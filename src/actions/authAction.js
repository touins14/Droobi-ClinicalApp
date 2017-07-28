import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED ,
    LOGIN_USER,
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
        axios.post('http://droobi.astrolabs.io:3022/clinician/login', {
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

