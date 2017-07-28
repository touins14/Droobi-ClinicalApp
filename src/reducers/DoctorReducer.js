import {
         GET_LIST_REPORT,
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

} from '../actions/types';

const INITIAL_STATE = {
	ListReports: [],
  ListReportsEducator: [],
  PatientDetails:[],
  ReportDetails:[],
  PatientId:'',
  Charts:[],
  loader:true,
  loaderReportPatient:true,
  loaderReportMedication:true,
  loaderReportMonitoring:true,
  loaderPatientMonitoring:true,
  LoaderPatientDetails:true,
  ListViewProgress:[],
  ReportMedication:[],
  PatientMedication:[],
  PatientMonitoring:[],
  ReportMonitoring:[],
  ListPatient:[],
  ListPatientEducator:[],
  PatientListReport:[]
};

export default (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case GET_LIST_REPORT_SUCCESS:
      return { ...state, ListReports: action.payload };
      
    case GET_EDUCATOR_LIST_REPORT_SUCCESS:
      return { ...state, ListReportsEducator: action.payload };

    case GET_PATIENT_DETAILS:
      return { ...state, LoaderPatientDetails: true};

    case GET_PATIENT_DETAILS_SUCCESS:
      return { ...state, PatientDetails: action.payload, LoaderPatientDetails: false};

    case GET_REPORT_DETAILS:
      return {...state,loader:true}

    case GET_REPORT_DETAILS_SUCCESS:
      return { ...state, ReportDetails: action.payload ,loader:false};

    case GET_CHART_ALL_CONDITION:
       return {...state,loader:true}

    case GET_CHART_ALL_CONDITION_SUCCESS:
      return { ...state, Charts: action.payload,loader:false };

    case SET_ID_PATIENT:
      return { ...state, PatientId: action.payload };

    case GET_CHARTS:
       return {...state,loader:true}

    case GET_CHARTS_SUCCESS:
      return { ...state, Charts: action.payload,loader:false };

    case GET_LIST_VIEW_PROGRESS_SUCCESS:
      return { ...state, ListViewProgress: action.payload,loader:false };

    case GET_REPORT_MEDICATION:
       return {...state,loaderReportMedication:true}

    case GET_REPORT_MEDICATION_SUCCESS:
      return { ...state, ReportMedication: action.payload,loaderReportMedication:false };

    case GET_REPORT_PATIENT:
       return {...state,loaderReportPatient:true}

    case GET_REPORT_PATIENT_SUCCESS:
      return { ...state, PatientMedication: action.payload,loaderReportPatient:false };

    case GET_REPORT_SCHEDULE:
       return {...state,loaderReportMonitoring:true}

    case GET_REPORT_SCHEDULE_SUCCESS:
      return { ...state, ReportMonitoring: action.payload,loaderReportMonitoring:false };

    case GET_PATIENT_SCHEDULE:
       return {...state,loaderPatientMonitoring:true}
       
    case GET_PATIENT_SCHEDULE_SUCCESS:
      return { ...state, PatientMonitoring: action.payload,loaderPatientMonitoring:false };

    case GET_PATIENT_LIST_SUCCESS:
      return { ...state, ListPatient: action.payload };

    case GET_PATIENT_EDUCATOR_LIST_SUCCESS:
      return { ...state, ListPatientEducator: action.payload };

    case GET_REPORT_PATIENT_LIST:
        return { ...state, loadingListPatientReport: action.payload };

     case GET_REPORT_PATIENT_LIST_SUCCESS:
        return { ...state, PatientListReport: action.payload };
 
    default:
      return state;
    }
};
