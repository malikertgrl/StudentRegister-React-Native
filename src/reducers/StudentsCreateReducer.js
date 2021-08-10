import {
    STUDENT_CHANGED,
    CREATE_REQUEST_SUCCES,
    CREATE_REQUEST
} from "../actions/types"


const INITIAL_STATE = {
    namee: "",
    surname: "",
    number: "",
    branch: "abranch",
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
         case STUDENT_CHANGED:
            //  console.log("reducer",{ ...state, [action.payload.title]: action.payload.value });
             return { ...state, [action.payload.title]: action.payload.value };
        case CREATE_REQUEST:
            return { ...state, loading: true }
        case CREATE_REQUEST_SUCCES:
            return INITIAL_STATE;

        default:
            return state;
    }
}