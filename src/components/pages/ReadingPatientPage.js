import React, { Component } from 'react';
import { Text, View ,ScrollView,Image} from 'react-native';
import { connect } from 'react-redux';
import {Container,MedicationBlock} from '../common';
import ProgressPage from './ProgressPage';
//import {} from "../../actions/DoctorAction";


class ReadingPatientPage extends Component {
  componentWillMount(){
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{backgroundColor:'#fff'}}>
          <ProgressPage GoToListView={(filterday) => {navigate('ProgressListViewPage',{filterDay:filterday})}}/>
      </ScrollView>
    );
  }
}
const styles={
}
const mapStateToProps= state =>{
  return{
  }
}
export default connect(mapStateToProps,{})(ReadingPatientPage);


