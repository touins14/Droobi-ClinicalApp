import React, { Component } from 'react';
import { Text, View ,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import {Container,ItemMonitoring} from '../common';
import { getReportSchedule,getPatientSchedule} from "../../actions/DoctorAction";


class SchedulePage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }
  componentWillMount(){
      this.props.getReportSchedule(this.props.ReportId);
      this.props.getPatientSchedule(this.props.PatientId);
  }
  render() {
    console.log('hajouraaaaaaaa',this.props.PatientMonitoring,this.props.ReportMonitoring)
    return (
      <View style={{paddingTop:20}}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>Suggested Monitoring</Text>
        </View>
        {this.props.loaderReportMonitoring===false?
        <View style={[styles.globalContainer,{borderColor:"rgb(227, 80, 108)",borderWidth:1,}]}>
            
              <ItemMonitoring  data={Object.keys(this.props.ReportMonitoring.times).map(key => this.props.ReportMonitoring.times[key])}
                               showIcon={this.props.ReportMonitoring.status==='pending'?true:false}
              /> 
        </View>:null}
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>Current Monitoring</Text>
        </View>
        {this.props.loaderPatientMonitoring===false?
          <View style={[styles.globalContainer,{borderColor:"#28c5c2",borderWidth:1,}]}>
          {this.props.PatientMonitoring.map(item=>item.status==='current'?
            
              <ItemMonitoring  data={Object.keys(item.times).map(key => item.times[key])}
                               showIcon={false}
              /> 
            :null)}
        </View>:null}
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>Previous medication</Text>
        </View>
        {this.props.loaderPatientMonitoring===false?
           this.props.PatientMonitoring.map(item=>item.status==='finished'?
          <View style={[styles.globalContainer]}>
            <ItemMonitoring  data={Object.keys(item.times).map(key => item.times[key])}
                             showIcon={false}
            /> 
          </View>:null):null}
      </View>
    );
  }
}
const styles={
  globalContainer:{
     alignSelf:'stretch',
       justifyContent:'center',
       alignItems:'center',
       marginRight:5,
       marginLeft:5 ,
       marginTop:10,
       marginBottom:10,
       padding:5,
       borderRadius:5,
       shadowColor: '#ddd',
       shadowOffset: {
            width: 1.5,
            height: 1.5
        },
        shadowOpacity: 1.9,
  },
  titleContainer:{
        alignSelf:'stretch',
        padding:10,
  },
  educatorNameContainer:{
        alignSelf:'stretch',
        padding:10,
  },
  titleStyle:{
    fontSize:18,
    color:'grey'
  },
  nameEducStyle:{
    fontSize:14,
    color:'grey'
  }
}
const mapStateToProps= state =>{
  return{
    language:state.language.language,
    PatientId:state.doctor.PatientId,
    loader:state.doctor.loader,
    loaderReportMonitoring:state.doctor.loaderReportMonitoring,
    loaderPatientMonitoring:state.doctor.loaderPatientMonitoring,
    PatientMonitoring:state.doctor.PatientMonitoring,
    ReportMonitoring:state.doctor.ReportMonitoring,
  }
}
export default connect(mapStateToProps,{ getReportSchedule,getPatientSchedule})(SchedulePage);

