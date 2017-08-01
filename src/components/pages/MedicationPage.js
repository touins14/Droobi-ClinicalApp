import React, { Component } from 'react';
import { Text, View ,ScrollView,Image} from 'react-native';
import { connect } from 'react-redux';
import {Container, MedicationBlock} from '../common';
import { getReportMedication, getPatientMedication} from "../../actions/DoctorAction";
import strings from '../common/Translation';

class MedicationPage extends Component {
  componentWillMount() {
    console.log(this.props.PatientId);
      this.props.getReportMedication(this.props.ReportId);
      this.props.getPatientMedication(this.props.PatientId);
  }
  extratctDate(date){
   var  date=new Date(date)
   var extractedDate=date.toLocaleDateString()
    return extractedDate
  }
  renderMedication(){
  
      return this.props.ReportMedication.drugs.map(item=>
        <MedicationBlock
          data={item}
          showIcon={this.props.ReportMedication.status==='pending'?true:false}
          
          language={this.props.language} />
      
      )
      
  }

  renderCurrentMedicationPatient() {
    return this.props.PatientMedication.map(item=>
      item.status==='current'?

      <View style={[styles.globalContainer,{borderColor:"#28c5c2",borderWidth:1,}]}>
          {item.drugs.map(item2=>
            <MedicationBlock
              data={item2}
              showIcon={false}
              language={this.props.language} />
          
          )}
        <View style={styles.educatorNameContainer}>
          <Text style={styles.nameEducStyle}>{this.props.educatorName} - {this.extratctDate(item.created_at)}</Text>
        </View>
      </View>:null)
      
  }
  renderPreviousMedicationPatient() {
    return this.props.PatientMedication.map(item=>
      item.status==="finished"?

      <View style={[styles.globalContainer,{borderColor:"#ddd",borderWidth:1,}]}>
          {item.drugs.map(item2=>
            <MedicationBlock
              data={item2}
              showIcon={false}
              language={this.props.language} />
          
          )}
        <View style={styles.educatorNameContainer}>
          <Text style={styles.nameEducStyle}>{this.props.educatorName} - {this.extratctDate(item.created_at)}</Text>
        </View>
      </View>:null)
      
  }

  render() {
    let alignItems=this.props.language==='AR'?"flex-end":"flex-start"
    return (
      <View style={{paddingTop:20}}>
        <View style={[styles.titleContainer,{alignItems:alignItems}]}>
           {this.props.suggestedMedication===true? <Text style={styles.titleStyle}>{strings.suggestedMedication}</Text>:null}
        </View>
        {this.props.loaderReportMedication===false?
          <View style={[styles.globalContainer,{borderColor:"rgb(227, 80, 108)", borderWidth: 1}]}>
              {this.renderMedication()}
              <View style={styles.educatorNameContainer}>
                <Text style={styles.nameEducStyle}>{this.props.educatorName} - {this.extratctDate(this.props.ReportMedication.created_at)}</Text>
              </View>
          </View>:null}

        <View style={[styles.titleContainer,{alignItems:alignItems}]}>
            <Text style={styles.titleStyle}>{strings.currentMedication}</Text>
        </View>
        {this.props.loaderReportPatient===false?this.renderCurrentMedicationPatient():null}
        <View style={[styles.titleContainer,{alignItems:alignItems}]}>
            <Text style={styles.titleStyle}>{strings.previousMedication}</Text>
        </View>
        {this.props.loaderReportPatient===false?this.renderPreviousMedicationPatient():null}
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
