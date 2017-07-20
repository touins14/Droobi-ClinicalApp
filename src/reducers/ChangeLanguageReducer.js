import {
    TO_ARABIC,
    TO_ENGLISH
} from '../actions/types';

const INITIAL_STATE = {
	language: 'EN',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TO_ARABIC:
      return { ...state, language: 'AR' };
		case TO_ENGLISH:
      return { ...state, language: 'EN' };
		default:
      return state;
	}
};
