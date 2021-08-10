import { STUDENT_LIST_DATA_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
    namee: "",
    surname: "",
    number: "",
    branch: "abranch",
    loading: false
}

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case STUDENT_LIST_DATA_SUCCESS:
            // console.log(action.payload);
            return action.payload;
    
        default:
            return state;
    }
}