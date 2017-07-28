import React, { Component } from 'react';
import { Text, View ,ScrollView,Image} from 'react-native';
import { connect } from 'react-redux';
import {Container,MedicationBlock} from '../common';
import { getReportMedication,getPatientMedication} from "../../actions/DoctorAction";


class MedicationPage extends Component {
  componentWillMount(){
      this.props.getReportMedication(this.props.ReportId);
      this.props.getPatientMedication(this.props.PatientId);
  }
  extratctDate(date){
   var  date=new Date(date)
   var extractedDate=date.toLocaleDateString()
    return extractedDate
  }
  render() {
    return (
      <View style={{paddingTop:20}}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>Suggested medication</Text>
        </View>
        {this.props.loaderReportMedication===false?
        <View style={[styles.globalContainer,{borderColor:"rgb(227, 80, 108)",borderWidth:1,}]}>
            
              <MedicationBlock name={this.props.ReportMedication.Drug.tradeName}
                               showIcon={this.props.ReportMedication.status==='pending'?true:false}
                               times={Object.keys(this.props.ReportMedication.times).map(key => this.props.ReportMedication.times[key])}
                               image={this.props.ReportMedication.Drug.tradeName}
                               unit={this.props.ReportMedication.Drug.unit}
                               note={this.props.ReportMedication.notes}/>
            
         <View style={styles.educatorNameContainer}>
            <Text style={styles.nameEducStyle}>{this.props.educatorName} - {this.extratctDate(this.props.ReportMedication.created_at)}</Text>
         </View>
        </View>:null}
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>Current medication</Text>
        </View>
        {this.props.loaderReportPatient===false?
          <View style={[styles.globalContainer,{borderColor:"#28c5c2",borderWidth:1,}]}>
          {this.props.PatientMedication.map(item=>item.status==='current'?
              <MedicationBlock name={item.Drug.tradeName}
                               showIcon={false}
                               times={Object.keys(item.times).map(key => item.times[key])}
                               image={item.Drug.tradeName}
                               unit={item.Drug.unit}
                               note={item.notes}/>
              :null)}
         <View style={styles.educatorNameContainer}>
            <Text style={styles.nameEducStyle}>{this.props.educatorName} - {this.extratctDate(this.props.PatientMedication.created_at)}</Text>
         </View>
        </View>:null}
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>Previous medication</Text>
        </View>
        {this.props.loaderReportPatient===false?
        <View style={[styles.globalContainer]}>
         {this.props.PatientMedication.map(item=>item.status==='finished'?
              <MedicationBlock name={item.Drug.tradeName}
                               showIcon={false}
                               times={Object.keys(item.times).map(key => item.times[key])}
                               image={item.Drug.tradeName}
                               unit={item.Drug.unit}
                               note={item.notes}/>
              :null)}
         <View style={styles.educatorNameContainer}>
            <Text style={styles.nameEducStyle}>{this.props.educatorName} - {this.extratctDate(this.props.PatientMedication.created_at)}</Text>
         </View>
        </View>:null}
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
    loaderReportPatient:state.doctor.loaderReportPatient,
    loaderReportMedication:state.doctor.loaderReportMedication,
    ReportMedication:state.doctor.ReportMedication,
    PatientMedication:state.doctor.PatientMedication,

  }
}
export default connect(mapStateToProps,{getPatientMedication,getReportMedication})(MedicationPage);


