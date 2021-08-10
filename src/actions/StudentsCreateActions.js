import firebase from '@firebase/app';
import '@firebase/auth';
import { Actions } from 'react-native-router-flux';
import {
    STUDENT_CHANGED,
    CREATE_REQUEST_SUCCES,
    CREATE_REQUEST,
    STUDENT_LIST_DATA_SUCCESS
} from "./types"

export const studentChange = ({ title, value }) => {
    console.log("action", { title, value });
    return (dispatch) => {
        dispatch({
            type: STUDENT_CHANGED,
            payload: { title, value }
        })

    }
}

export const stCreate = ({ namee, surname, number, branch }) => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        dispatch({ type: CREATE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
            .push({ namee, surname, number, branch })
            .then(() => {
                dispatch({ type: CREATE_REQUEST_SUCCES });
                Actions.pop();
            });
    };
};

export const studentsListData = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref( `/kullanicilar/${currentUser.uid}/ogrenciler` )
        .on("value", snapshot => {
            dispatch({ type: STUDENT_LIST_DATA_SUCCESS, payload: snapshot.val() });
        })
    }
}