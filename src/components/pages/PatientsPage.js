import React, { Component } from 'react';
import { Text, View ,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Button ,ItemList} from '../common';
import { getPatientList,getPatientEducatorList,SetIdPatient} from "../../actions/DoctorAction";
import strings from '../common/Translation';

class PatientsPage extends Component {

  componentWillMount(){
    this.props.TypeUser==='doctor'?this.props.getPatientList(this.props.userId):
                                   this.props.getPatientEducatorList(this.props.userId)
  }
  render() {
    const { navigate } = this.props.navigation;
    let listPatient=this.props.TypeUser==='doctor'?this.props.patientList:this.props.patientEducatorList
    return (
      
      <ScrollView style={{backgroundColor:"#fff",paddingTop:20}}>
       
        {
          listPatient.map((item,i) =>
          <ItemList 
              picture={item.picture}
              key={i}
              titleText={item.firstName}
              subTitleText={'HC'+item.hc}
              onPress={() => {navigate('ProfilePatientPage',{TitleProfilePage:strings.profile}),this.props.SetIdPatient(item._id)}}
              language={this.props.language}
              />
        )}
      </ScrollView>
    );
  }
}
const mapStateToProps= state =>{
  return{
    language:state.language.language,
    userId:state.auth.userId,
    TypeUser:state.auth.TypeUser,
    patientList:state.doctor.ListPatient,
    patientEducatorList:state.doctor.ListPatientEducator,
  }
}
export default connect(mapStateToProps,{getPatientList,getPatientEducatorList,SetIdPatient})(PatientsPage);

