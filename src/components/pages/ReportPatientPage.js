import React, { Component } from 'react';
import { Text, View ,ScrollView,Image} from 'react-native';
import { connect } from 'react-redux';
import {Container,MedicationBlock,ItemReport} from '../common';
import { getReportsPatientList} from "../../actions/DoctorAction";

class ReportPatientPage extends Component {
  componentWillMount() {
    this.props.getReportsPatientList(this.props.PatientId);
  }
  extratctDate(date){
   var  date=new Date(date)
   var extractedDate=date.toLocaleDateString()
    return extractedDate
  }extratctTime(date){
     var  date=new Date(date)
     var hours=date.getHours()
     var min=date.getMinutes()
    
    return (hours+":"+min)
  }
  render() {
    const Patient = this.props.LoaderPatientDetails===false?this.props.patientDetail:''
    const { navigate } = this.props.navigation
    return (
      <Container>
        <ScrollView style={{paddingTop:20}}>
          {this.props.PatientListReport.map((item,i)=>
            <ItemReport key={i} titleText={Patient.firstName+' '+Patient.lastName}
                        date={this.extratctDate(item.dateRep)}
                        time={this.extratctTime(item.dateRep)}
                        status={item.statusRep}
                        language={this.props.language} 
                        onPress={() => {navigate('PatientReportPage',
                                         {idPatient: this.props.PatientId,
                                          idReport:item.idRep,
                                         
                                        })}} />
          )}
        </ScrollView>
      </Container>
    );
  }
}
const styles={
}
const mapStateToProps= state =>{

  return{
   language:state.language.language,
   PatientId:state.doctor.PatientId,
   PatientListReport:state.doctor.PatientListReport,
   patientDetail:state.doctor.PatientDetails,
   LoaderPatientDetails:state.doctor.LoaderPatientDetails,
  }
}
export default connect(mapStateToProps,{ getReportsPatientList })(ReportPatientPage);
