import React, { Component } from 'react';
import { Text, View, Picker ,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Button, ItemList, CardBGL, ItemMonitoring,DropDown } from '../common';
import { getReportsList,SetIdPatient,changeStatusReport,getEducatorReportsList} from "../../actions/DoctorAction";
import Icon from 'react-native-vector-icons/Ionicons';
const Item = Picker.item;


class ReportsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
  componentWillMount(){
      this.props.TypeUser==='doctor'?this.props.getReportsList(this.props.userId):this.props.getEducatorReportsList(this.props.userId);
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
  changeStatus(idReport,statusReport){
    if(statusReport=='new'){
      this.props.changeStatusReport(idReport)
    }
  }
  render() {
    console.log('list reports',this.props.ListReportsEducator)
    const { navigate } = this.props.navigation;
    let ListReport=this.props.TypeUser==='doctor'?this.props.reportList:this.props.ListReportsEducator
    return (
      
      <ScrollView style={{backgroundColor:"#fff",paddingTop:20}}>
       
        {ListReport.map((item,i) =>
          <ItemList 
              key={i}
              picture={item.patient.picture}
              titleText={item.patient.firstName}
              subTitleText={this.props.TypeUser==='doctor'?item.educator.firstName:item.doctor.firstName}
              date={this.extratctDate(item.dateRep)+ "     " +this.extratctTime(item.dateRep) }
              status={item.statusRep}
              onPress={() => {this.changeStatus(item.idRep,item.statusRep) 
                              navigate('PatientReportPage', {idPatient: item.patient._id,idReport:item.idRep}),this.props.SetIdPatient(item.patient._id)}}/>
        )}

       
      </ScrollView>
    );
  }
}
const mapStateToProps= state =>{
  return{
    language:state.language.language,
    reportList:state.doctor.ListReports,
    ListReportsEducator:state.doctor.ListReportsEducator,
    TypeUser:state.auth.TypeUser,
    userId:state.auth.userId,
  }
}
export default connect(mapStateToProps,{getReportsList,SetIdPatient,changeStatusReport,getEducatorReportsList})(ReportsPage);

