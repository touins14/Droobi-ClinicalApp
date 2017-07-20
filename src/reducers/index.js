import { combineReducers } from 'redux';
import ChangeLanguageReducer from './ChangeLanguageReducer';

const firstReducer = (state = null, action) => {
	return state;
};
export default combineReducers({
	firstReducer: firstReducer
});
