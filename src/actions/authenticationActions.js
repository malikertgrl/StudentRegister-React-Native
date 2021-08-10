import { Actions } from 'react-native-router-flux';
import firebase from '@firebase/app';
import '@firebase/auth';
import {
    EMAİL_CHANGED,
    PASSWORD_CHANGED,
    LOGİN_USER,
    LOGİN_USER_SUCCES,
    LOGİN_USER_FAIL
} from "./types";
import { Alert } from "react-native";




export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: EMAİL_CHANGED,
            payload: email
        })
    }
}


export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload: password
        })
    }
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGİN_USER })
        if (email === "" || password === "") {
            Alert.alert(
                "UYARI",
                "Her iki alanda dolu olmalıdır!",
                [
                    {
                        text: "Tamam",
                        onPress: () => console.log("ok Pressed"),

                    }
                ]
            );
        } else {
            console.log("Loginemail: ", email);
            console.log("LoginPassword: ", password);
            firebase.auth().signInWithEmailAndPassword(email, password)

                .then((user) => loginSucces(dispatch, user))
                //  .then((e) => console.log(e.code))




                // .then((user) => loginSucces(dispatch, user))
                .catch((e) => {
                    console.log("hata");
                    console.log(e.code);

                    if (e.code === "auth/wrong-password" || e.code === "auth/too-many-requests") {
                        Alert.alert(
                            "UYARI",
                            "Hatalı şifre, tekrar deneyiniz.",
                            [
                                {
                                    text: "Tamam",
                                    onPress: () => console.log("ok Pressed"),

                                }
                            ]
                        );
                    }
                    else if (e.code === "auth/invalid-email") {
                        Alert.alert(
                            "UYARI",
                            "Geçersiz E-mail formatı!",
                            [
                                {
                                    text: "Tamam",
                                    onPress: () => console.log("ok Pressed"),

                                }
                            ]
                        );

                    }
                    else if (e.code === "auth/user-not-found") {
                        Alert.alert(
                            "UYARI",
                            "Yeni bir kullanıcı oluşturmak ister misiniz.",
                            [
                                {
                                    text: "Evet",
                                    onPress: () => firebase.auth().createUserWithEmailAndPassword(email, password)
                                    .then((user) => loginSucces(dispatch, user))
                                    .catch(() => loginFail(dispatch))

                                }
                            ]
                        );
                      

                        
                           
                    } 



                })
        }

    }
}

const loginSucces = (dispatch, user) => {
    console.log("basarılı");
    dispatch({
        type: LOGİN_USER_SUCCES,
        payload: user
    })
    Actions.main();
}

const loginFail = (dispatch) => {

    console.log("hatalı");
    Alert.alert(

        "UYARI",
        "Şifreniz en az 6 karakterden oluşmalıdır.",
        [
            {
                text: "Tamam",
                onPress: () => console.log("ok Pressed"),

            }
        ]
    );

    dispatch({
        type: LOGİN_USER_FAIL,

    })

}