import { 
    TO_ARABIC,
    TO_ENGLISH
  } from './types';
export const ChangeToArabic =()=>{
	return(dispatch)=>{
        dispatch({ type:TO_ARABIC });}
};
export const ChangeToEnglish =()=>{
  return(dispatch)=>{
        dispatch({ type:TO_ENGLISH });}
};

