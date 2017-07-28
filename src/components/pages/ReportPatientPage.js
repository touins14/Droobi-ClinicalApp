import React, { Component } from 'react';
import { Text, View ,ScrollView,Image} from 'react-native';
import { connect } from 'react-redux';
import {Container,MedicationBlock,ItemReport} from '../common';
import { getReportsPatientList} from "../../actions/DoctorAction";

class ReportPatientPage extends Component {
  componentWillMount() {
    this.props.getReportsPatientList(this.props.PatientId);
  }
  render() {
    return (
      <View style={{paddingTop:20}}>
          {this.props.PatientListReport.map((item,i)=>
            <ItemReport key={i} titleText='patient1' date='02-03-04' time='21:22' status='pending'  />
          )}
      </View>
    );
  }
}
const styles={
}
const mapStateToProps= state =>{
  return{
   PatientId:state.doctor.PatientId,
   PatientListReport:state.doctor.PatientListReport
  }
}
export default connect(mapStateToProps,{ getReportsPatientList })(ReportPatientPage);
