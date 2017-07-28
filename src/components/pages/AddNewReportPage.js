import React, { Component } from 'react';
import { Text, View ,ScrollView,Image,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import update from 'react-addons-update';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { Container, MedicationBlock, ItemReport, Button} from '../common';
import MedicationForm from '../common/MedicationForm';
import MonitoringForm from '../common/MonitoringForm';

import strings from '../common/Translation';

class AddNewReportPage extends Component {
    constructor(props) {
        super()
        this.state =  {
          index: 0,
            routes: [
              { key: '1' },
              { key: '2'},
            ],
            medications: [],
            monitorings:[]
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
                  {this.renderMedications()}
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
			           <TouchableOpacity onPress={() => { this.addingCard() }}>
			                <Icon name="ios-add-circle-outline" size={48} color='#a9a9a9' />
			           </TouchableOpacity>
			        </View>
                </ScrollView>

            );
        case '2':
            return (
                <ScrollView>
                	{this.renderMonitorings()}
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
			           <TouchableOpacity onPress={() => { this.addingCard() }}>
			                <Icon name="ios-add-circle-outline" size={48} color='#a9a9a9' />
			           </TouchableOpacity>
			        </View>
                </ScrollView>
            );
          default:
              return null;
      }
    }
    renderMedications() {
      if (this.state.medications) {
        let i = -1;
        return (
            this.state.medications.map((item) => {
              i++;
              return (
                  <MedicationForm key={i} removing={() => this.removingCard(i)} onChangeUpdate={(indexMedication, indexPrescription, inputName, inputValue) => { this.updateMedication(indexMedication, indexPrescription, inputName, inputValue); }} />
                );
            })

          );
        }
    }
    renderMonitorings() {
      if (this.state.monitorings) {
        let i = -1;
        return (
            this.state.monitorings.map((item) => {
              i++;
              return (
                  <MonitoringForm key={i} removing={() => this.removingCard(i)} />
                );
            })

          );
        }
    }
    addingCard() {
      this.setState({
	      medications: update(this.state.medications, { $push: ['wqe'] }),
	      // monitorings: update(this.state.monitorings, { $push: ['wqe'] })
	    });
    }
    removingCard(index) {
	    this.setState({
	      medications: update(this.state.medications, { $splice: [[index, 1]] }),
	      // monitorings: update(this.state.monitorings, { $splice: [[index, 1]] })
	    })
    }

    updateMedication(indexMedication, indexPrescription, inputName, inputValue) {
      console.log(indexMedication);
      console.log(indexPrescription);
      console.log(inputName);
      console.log(inputValue);
      for ( var i = 0; i < this.state.medications.length; i++) {
        if (inputName === 'medications') {
          console.log('medications');
        } else if (inputName === 'note') {
          console.log('note');
        } else {
          console.log('another For');
        }
      }
    }

    render() {
	    return (
	      <Container >
	            <View style={styles.sendButtonContainer}>
	              <Button Style={styles.sendButton}
	                      color='rgb(227, 80, 108)'
	                      label='Send Report'
	                      />
	            </View>
	            <View style={{alignSelf:"stretch", flex:10, backgroundColor: '#ffffff', marginTop:20 }}>
                    <TabViewAnimated
                        style={{flex:1,marginLeft:10,marginRight:10}}
                        navigationState={this.state}
                        renderScene={this._renderScene.bind(this)}
                        onRequestChangeTab={this._handleChangeTab.bind(this)}
                        renderHeader={this._renderHeader.bind(this)}
                      />
                </View>
	      </Container>
	    );
    }
}
const styles={
	sendButtonContainer:{
    	alignSelf:'stretch',
    	flex:1,
    	height:60,
    	justifyContent:'center',
    	alignItems:'center'
    },
    sendButton:{
        width:150,
        borderColor:"rgb(227, 80, 108)",
        borderWidth:1.5,
        marginTop:20,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
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
      	fontSize: 16,
      	marginTop: 5,
    },
}
const mapStateToProps= state =>{
  return{}
}
export default connect(mapStateToProps,{})(AddNewReportPage);
