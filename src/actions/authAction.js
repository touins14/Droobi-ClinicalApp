import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED ,
    LOGIN_USER,
    PHONE_CHANGED,
    MEDICALID_CHANGED,
    SEND_NEW_PASSWORD
  } from './types';
import axios from 'axios';
import {
    
      Alert

     
  } from 'react-native';

export const emailChanged =(text)=>{
	return{
		type:EMAIL_CHANGED,
		payload:text
	};
};
export const passwordChanged =(text)=>{
	return{
		type:PASSWORD_CHANGED,
		payload:text
	};
};
export const loginUser =(email,password)=>{

  return(dispatch)=>{
        dispatch({ type:LOGIN_USER });
        axios.post('http://droobi.astrolabs.io:3011/patient/authenticate', {
            username :email,
            password:password,
          
        }).then(response => {
                  console.log('Response:',response)
                  dispatch({type:LOGIN_USER_SUCCESS,payload:response}) 
                  
              })
              .catch(error=>{
                 dispatch({type:LOGIN_USER_FAILED,payload:error})
                 Alert.alert(
                 null,
                 "login failed",)
               }) 
  }
};
export const PhoneChanged =(text)=>{
  return{
    type:PHONE_CHANGED,
    payload:text
  };
};
export const MedicalIdChanged =(text)=>{
  return{
    type:MEDICALID_CHANGED,
    payload:text
  };
};
export const SendNewPassword =(phone,medicalId)=>{
  /*return(dispatch)=>{
        dispatch({ type:SEND_NEW_PASSWORD });
        axios.post('',{
                 phone:phone,
                 medicalId:medicalId,
                 
              })
              .then(response => {
                  console.log(response)
              })
              .catch(error=>{
                 console.log(error)
               }) 
  }*/
};