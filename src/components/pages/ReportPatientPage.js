import React, { Component } from 'react';
import { Text, View ,ScrollView,Image} from 'react-native';
import { connect } from 'react-redux';
import {Container,MedicationBlock,ItemReport} from '../common';

class ReportPatientPage extends Component {
  
  render() {
    return (
      <View style={{paddingTop:20}}>
          <ItemReport titleText='patient1' date='02-03-04' time='21:22' status='pending'  />
      </View>
    );
  }
}
const styles={
}
const mapStateToProps= state =>{
  return{
    
  }
}
export default connect(mapStateToProps,{})(ReportPatientPage);


