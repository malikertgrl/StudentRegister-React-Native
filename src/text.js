// StudentsListActions
import firebase from '@firebase/app';
import '@firebase/auth';
import StudentsListReducer from './reducers/StudentsListReducer';
import {
    STUDENT_ADD,
    STUDENT_ADDEDS,
    CREATE_REQUEST_SUCCES,
    CREATE_REQUEST
} from "./types";

export const studentAdd = ({ props, value }) => {
    return (dispatch) => {
        dispatch({
            type: STUDENT_ADD,
            payload: { props, value }
        })
    }

}
export const studentAdds = ( namee ) => {
    return (dispatch) => {
        dispatch({
            type: STUDENT_ADDEDS,
            payload: namee
        })
    }

}

export const sCreate = ({ namee, surname, number, branch }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({type: CREATE_REQUEST})
        firebase.database().ref('/kullanicilar/$(currentUser.uid)/ogrenciler')
            .push({ namee, surname, number, branch })
            .then(() => {
                dispatch({type: CREATE_REQUEST_SUCCES})
            })
    }
}

// StudentsListReducer
import { STUDENT_ADD, STUDENT_ADDEDS } from "../actions/types";


const INITIAL_STATE = {
    namee: "",
    surname: "",
    number: "",
    branch: "",
    number2:""
};


export default (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case STUDENT_ADD:
            return {...state, [action.payload.props]: action.payload.value};
        case STUDENT_ADDEDS:
            return {...state, namee: action.payload};
           
    
        default:
            return state;
    }
}