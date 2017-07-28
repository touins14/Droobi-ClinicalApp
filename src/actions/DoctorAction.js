import { GET_LIST_REPORT,
         GET_LIST_REPORT_SUCCESS,
         GET_LIST_REPORT_FAILED,
         GET_PATIENT_DETAILS,
         GET_PATIENT_DETAILS_SUCCESS,
         GET_PATIENT_DETAILS_FAILED,
         GET_REPORT_DETAILS,
         GET_REPORT_DETAILS_SUCCESS,
         GET_REPORT_DETAILS_FAILED,
         GET_CHART_ALL_CONDITION,
         GET_CHART_ALL_CONDITION_SUCCESS,
         GET_CHART_ALL_CONDITION_FAILED,
         SET_ID_PATIENT,
         GET_CHARTS,
         GET_CHARTS_SUCCESS,
         GET_CHARTS_FAILED,
         GET_LIST_VIEW_PROGRESS,
         GET_LIST_VIEW_PROGRESS_SUCCESS,
         GET_LIST_VIEW_PROGRESS_FAILED,
         CHANGE_STATUS_REPORT,
         DECLINE_REPORT,
         APPROVE_REPORT,
         GET_REPORT_MEDICATION,
         GET_REPORT_MEDICATION_SUCCESS,
         GET_REPORT_MEDICATION_FAILED,
         GET_REPORT_PATIENT,
         GET_REPORT_PATIENT_SUCCESS,
         GET_REPORT_PATIENT_FAILED,
         GET_REPORT_SCHEDULE,
         GET_REPORT_SCHEDULE_SUCCESS,
         GET_REPORT_SCHEDULE_FAILED,
         GET_PATIENT_SCHEDULE,
         GET_PATIENT_SCHEDULE_SUCCESS,
         GET_PATIENT_SCHEDULE_FAILED,
         GET_PATIENT_LIST,
         GET_PATIENT_LIST_SUCCESS,
         GET_PATIENT_LIST_FAILED,
         GET_PATIENT_EDUCATOR_LIST,
         GET_PATIENT_EDUCATOR_LIST_SUCCESS,
         GET_PATIENT_EDUCATOR_LIST_FAILED,
         GET_EDUCATOR_LIST_REPORT,
         GET_EDUCATOR_LIST_REPORT_SUCCESS,
         GET_EDUCATOR_LIST_REPORT_FAILED,
         GET_REPORT_PATIENT_LIST,
         GET_REPORT_PATIENT_LIST_SUCCESS,
         GET_REPORT_PATIENT_LIST_FAILED

} from './types';
import axios from 'axios';

export const getReportsList =(userId)=>{
  return(dispatch)=>{
        dispatch({ type:GET_LIST_REPORT });
        axios.get('http://droobi.astrolabs.io:3022/report/doctor/'+userId)
          .then(response => {
                  console.log('Response:',response)
                  dispatch({type:GET_LIST_REPORT_SUCCESS,payload:response.data})

              })
              .catch(error=>{
                 dispatch({type:GET_LIST_REPORT_FAILED,payload:error})
               })
  }
};
export const getEducatorReportsList =(userId)=>{
  return(dispatch)=>{
        dispatch({ type:GET_EDUCATOR_LIST_REPORT });
        axios.get('http://droobi.astrolabs.io:3022/report/educator/'+userId)
          .then(response => {
                  console.log('Response:',response)
                  dispatch({type:GET_EDUCATOR_LIST_REPORT_SUCCESS,payload:response.data})

              })
              .catch(error=>{
                 dispatch({type:GET_EDUCATOR_LIST_REPORT_FAILED,payload:error})
               })
  }
};
export const getPatientDetails =(patientId)=>{
  return(dispatch)=>{
        dispatch({ type:GET_PATIENT_DETAILS});
        axios.get('http://droobi.astrolabs.io:3020/patient/'+patientId)
          .then(response => {
                  console.log('Response:',response)
                  dispatch({type:GET_PATIENT_DETAILS_SUCCESS,payload:response.data})

              })
              .catch(error=>{
                 dispatch({type:GET_PATIENT_DETAILS_FAILED,payload:error})
               })
  }
};
export const SetIdPatient =(text)=>{
  return{
    type:SET_ID_PATIENT,
    payload:text
  };
};
export const getReportDetails =(ReportId)=>{
  return(dispatch)=>{
        dispatch({ type:GET_REPORT_DETAILS});
        axios.get('http://droobi.astrolabs.io:3022/report/'+ReportId)
          .then(response => {
                  console.log('Response:',response)
                  dispatch({type:GET_REPORT_DETAILS_SUCCESS,payload:response.data})

              })
              .catch(error=>{
                 dispatch({type:GET_REPORT_DETAILS_FAILED,payload:error})
               })
  }
};

export const getChartAllCondition =(patientId)=>{
  return(dispatch)=>{
        dispatch({ type:GET_CHART_ALL_CONDITION});
        axios.get('http://droobi.astrolabs.io:3021/stats/patient/'+patientId+'/reading/allConditions')
          .then(response => {
                  console.log('Response:',response)
                  dispatch({type:GET_CHART_ALL_CONDITION_SUCCESS,payload:response.data})

              })
              .catch(error=>{
                 dispatch({type:GET_CHART_ALL_CONDITION_FAILED,payload:error})
               })
  }
};
export const getCharts =(day,condition,patientId)=>{
  return(dispatch)=>{
        dispatch({ type:GET_CHARTS});
        axios.get('http://droobi.astrolabs.io:3021/stats/patient/'+patientId+'/reading/'+condition+'/'+day)
          .then(response => {
                  console.log('Response:',response)
                  dispatch({type:GET_CHARTS_SUCCESS,payload:response.data})

              })
              .catch(error=>{
                 dispatch({type:GET_CHARTS_FAILED,payload:error})
               })
  }
};
export const getListViewProgress =(patientId,day)=>{
  return(dispatch)=>{
        dispatch({ type:GET_LIST_VIEW_PROGRESS});
        axios.get('http://droobi.astrolabs.io:3021/glucose/patient/'+patientId+'/days/'+day)
          .then(response => {
                  console.log('Response:',response)
                  dispatch({type:GET_LIST_VIEW_PROGRESS_SUCCESS,payload:response.data})

              })
              .catch(error=>{
                 dispatch({type:GET_LIST_VIEW_PROGRESS_FAILED,payload:error})
               })
  }
};
export const changeStatusReport =(idReport)=>{
  return(dispatch)=>{
        dispatch({ type:CHANGE_STATUS_REPORT});
        axios.put('http://droobi.astrolabs.io:3022/report/open/'+idReport)
            .then(response => {
                  console.log('Response:',response)
            })
            .catch(error=>{
                 console.log('Error:',error)
               })
  }
};
export const declineReport = (idReport, note)=>{
  console.log('declined report ', note);
  return(dispatch) => {
        dispatch({ type:DECLINE_REPORT});
        axios.put('http://droobi.astrolabs.io:3022/report/decline/'+idReport, { note })
            .then(response => {
                  console.log('Response:',response)
            })
            .catch(error=>{
                 console.log('Error:',error)
               })
  }
};
export const approveReport = (idReport , note ) => {
  console.log('appprouuving report ', note);
  return(dispatch)=>{
        dispatch({ type:APPROVE_REPORT});
        axios.put('http://droobi.astrolabs.io:3022/report/accept/'+idReport, { note })
            .then(response => {
                  console.log('Response:',response)
            })
            .catch(error=>{
                 console.log('Error:',error)
               })
  }
};
export const getReportMedication =(idReport)=>{
  return(dispatch)=>{
        dispatch({ type:GET_REPORT_MEDICATION});
        axios.get('http://droobi.astrolabs.io:3022/report/'+idReport+'/medication')
            .then(response => {
                  console.log('Response:',response)
                  dispatch({type:GET_REPORT_MEDICATION_SUCCESS,payload:response.data})
            })
            .catch(error=>{
                 dispatch({type:GET_REPORT_MEDICATION_FAILED,payload:error})
               })
  }
};
export const getPatientMedication =(idPatient)=>{
  return(dispatch)=>{
        dispatch({ type:GET_REPORT_PATIENT});
        axios.get('http://droobi.astrolabs.io:3022/medication/patient/'+idPatient)
            .then(response => {
                  console.log('Response:', response)
                  dispatch({type:GET_REPORT_PATIENT_SUCCESS,payload:response.data})
            })
            .catch(error=>{
                 dispatch({type:GET_REPORT_PATIENT_FAILED,payload:error})
               })
  }
};
export const getReportSchedule =(idReport)=>{
  return(dispatch)=>{
        dispatch({ type:GET_REPORT_SCHEDULE});
        axios.get('http://droobi.astrolabs.io:3022/report/'+idReport+'/monitoring')
            .then(response => {
                  console.log('Response:',response)
                  dispatch({type:GET_REPORT_SCHEDULE_SUCCESS,payload:response.data})
            })
            .catch(error=>{
                 dispatch({type:GET_REPORT_SCHEDULE_FAILED,payload:error})
               })
  }
};
export const getPatientSchedule =(idPatient)=>{
  return(dispatch)=>{
        dispatch({ type:GET_PATIENT_SCHEDULE});
        axios.get('http://droobi.astrolabs.io:3021/measuresTimes/patient/'+idPatient)
            .then(response => {
                  console.log('Response:',response)
                  dispatch({type:GET_PATIENT_SCHEDULE_SUCCESS,payload:response.data})
            })
            .catch(error=>{
                 dispatch({type:GET_PATIENT_SCHEDULE_FAILED,payload:error})
               })
  }
};
export const getPatientList =(userId)=>{
  return(dispatch)=>{
        dispatch({ type:GET_PATIENT_LIST});
        axios.get('http://droobi.astrolabs.io:3022/doctor/'+userId+'/patients')
            .then(response => {
                  console.log('Response:',response)
                  dispatch({type:GET_PATIENT_LIST_SUCCESS,payload:response.data})
            })
            .catch(error=>{
                 dispatch({type:GET_PATIENT_LIST_FAILED,payload:error})
               })
  }
};
export const getPatientEducatorList =(userId)=>{
  return(dispatch)=>{
        dispatch({ type:GET_PATIENT_EDUCATOR_LIST});
        axios.get('http://droobi.astrolabs.io:3022/educator/'+userId+'/patients')
            .then(response => {
                  console.log('Response:',response)
                  dispatch({type:GET_PATIENT_EDUCATOR_LIST_SUCCESS,payload:response.data})
            })
            .catch(error=>{
                 dispatch({type:GET_PATIENT_EDUCATOR_LIST_FAILED,payload:error})
               })
  }
};
// EN COURS DE CONSTRUCTION
export const getReportsPatientList = (userId) => {
  return (dispatch) => {
        dispatch({ type:GET_REPORT_PATIENT_LIST});
        axios.get('http://droobi.astrolabs.io:3022/doctor/'+userId+'/patients')
            .then(response => {
                  console.log('Response:',response)
                  dispatch({type: GET_REPORT_PATIENT_LIST_SUCCESS,payload: response.data})
            })
            .catch(error => {
                 dispatch({type: GET_REPORT_PATIENT_LIST_FAILED,payload: error})
               })
  }
};
