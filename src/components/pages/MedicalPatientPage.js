import React, { Component } from 'react';
import { Text, View ,ScrollView,Image} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { connect } from 'react-redux';
import {Container,MedicationBlock} from '../common';
import MedicationPage from './MedicationPage';
import SchedulePage from './SchedulePage';
import strings from '../common/Translation';

class MedicalPatientPage extends Component {
  constructor(props) {
        super()
        this.state =  {
          index: 0,
            routes: [
              { key: '1' },
              { key: '2'},
            ],
        };
    }
  _handleChangeTab (index){
      this.setState({ index });
    }
    _renderFirstGreen({ route }) {
        switch (route.key) {
        case '1':
          return  <View style={styles.oneTab}>
                    <Image source={require('../../images/syringeGreen.png')} style={styles.oneTabImage} />
                    <Text style={[styles.oneTabLabel,{color:"#28c5c2"}]}>{strings.medication}</Text>
                  </View>;
        case '2':
          return  <View style={styles.oneTab}>
                    <Image source={require('../../images/medicalGrey.png')} style={styles.oneTabImage} />
                    <Text style={[styles.oneTabLabel,{color:"#949799"}]}>{strings.monitoring}</Text>
                  </View>;
          return null;
      }
  }
  _rendersecondGreen({route}) {
        switch (route.key) {
        case '1':
          return  <View style={styles.oneTab}>
                    <Image source={require('../../images/syringeGrey.png')} style={styles.oneTabImage} />
                    <Text style={[styles.oneTabLabel,{color:"#949799"}]}>{strings.medication}</Text>
                  </View>;
        case '2':
          return  <View style={styles.oneTab}>
                    <Image source={require('../../images/medicalGreen.png')} style={styles.oneTabImage} />
                    <Text style={[styles.oneTabLabel,{color:"#28c5c2"}]}>{strings.monitoring}</Text>
                  </View>;
          return null;
      } 
  }
  _renderHeader (props){
    let renderIcon;
    if (this.state.index===0){
      renderIcon=this._renderFirstGreen
    }else{
      renderIcon=this._rendersecondGreen
    }
      return (
        <TabBar
          {...props}

          style={{backgroundColor:"transparent"}}
          indicatorStyle={{backgroundColor:'rgba(40,212,201,1)'}}
          renderIcon={renderIcon}
          labelStyle={{color:"grey"}}
          
        />
      );
    }
    _renderScene ({ route }) {
      let alignItems=this.props.language==='AR'?"flex-end":"flex-start"
        const { navigate } = this.props.navigation;
      switch (route.key) {
          case '1':
            return (
                <ScrollView>
                  <MedicationPage educatorName={this.props.loader===false?this.props.reportDetail[0].educator.firstName+'  '+this.props.reportDetail[0].educator.lastName:''} suggestedMedication={false}/>      
                </ScrollView>
                
            );
        case '2':
            return (
                <ScrollView><SchedulePage suggestedMonitoring={false}/></ScrollView>
            );
          default:
              return null;
      }
    }
  render() {
    return (
      <View style={{alignSelf:"stretch",flex:1,backgroundColor:'#fff'}}>
        <TabViewAnimated
                        style={{flex:1,marginLeft:10,marginRight:10}}
                        navigationState={this.state}
                        renderScene={this._renderScene.bind(this)}
                        onRequestChangeTab={this._handleChangeTab.bind(this)} 
                        renderHeader={this._renderHeader.bind(this)}
                      />
      </View>
    );
  }
}
const styles={
  oneTab:{
      flex:1,
        alignSelf:'stretch',
      flexDirection:"row",
        alignItems:'flex-start'
  },
    oneTabImage:{
      height:30,
      width:30,
      marginRight:10
  },
    oneTabLabel:{
      fontSize:16,
      marginTop:5,
  },
}
const mapStateToProps= state =>{
  return{
    language:state.language.language,
  }
}
export default connect(mapStateToProps,{})(MedicalPatientPage);


