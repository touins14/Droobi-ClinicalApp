import {
  EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILED,
	LOGIN_USER,
	PHONE_CHANGED,
  MEDICALID_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false,
	phone: '',
	medicalId: '',
	token: '',
	userId: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '', navigate: false };
    case LOGIN_USER_SUCCESS:
      return { ...state,
        user: action.payload,
        loading: false,
        navigate: true,
        token: action.payload.data.token,
        userId: action.payload.data.idPatient
      };
    case LOGIN_USER_FAILED:
      return { ...state, error: 'login failed', loading: false };
    case PHONE_CHANGED:
      return { ...state, phone: action.payload };
    case MEDICALID_CHANGED:
      return { ...state, medicalId: action.payload };
    default:
      return state;
    }
};
