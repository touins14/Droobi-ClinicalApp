import {combineReducers} from "redux";
import AuthReducer from './AuthReducer';
import ChangeLanguageReducer from './ChangeLanguageReducer';
import DoctorReducer from './DoctorReducer';




export default combineReducers({
	auth:AuthReducer,
	language:ChangeLanguageReducer,
	doctor:DoctorReducer,
	
})
