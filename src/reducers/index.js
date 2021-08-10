
import { combineReducers } from "redux";
import AuthenticationReducers from "./AuthenticationReducers";
import StudentsCreateReducer from "./StudentsCreateReducer";
import StudentsDataReducers from "./StudentsDataReducers";

export default combineReducers({
    AuthenticationResponse: AuthenticationReducers,
    studentListResponse: StudentsCreateReducer,
    studentsDataResponse: StudentsDataReducers 

    
});