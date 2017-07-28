import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import update from 'react-addons-update';
import Icon from 'react-native-vector-icons/Ionicons';
import PrescriptionRow from '../common/PrescriptionRow'
import {DropDown}  from './';

class MonitoringForm extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    const {
      
      } = styles;
    return (
      <View style={styles.medicationEditContainer}>
          <OneComponent 
              label='Condition:' 
              children={<View style={styles.bigDropDown}>
                           <DropDown options={['hgfds','jhsfd','jhsda']} width={100}/>
                        </View>}/>
          <OneComponent 
              label='Target max' 
              children={<TextInput style={styles.bigDropDown} />}/>
          <OneComponent 
              label='Target min' 
              children={<TextInput style={styles.bigDropDown} />}/>
          <OneComponent 
              label='Frequency' 
              children={<TextInput style={styles.bigDropDown} />}/>
              
          <View style={{ justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: 10 }}>
          <TouchableOpacity onPress={() => { this.props.removing(); }}>
            <Icon name="ios-trash-outline" size={24} color='#696969' />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const OneComponent = (props) => {
  return (
        <View style={styles.OneComponentContainer}>
            <Text style={{color:'grey',fontSize:14,}}>{props.label}</Text>
            {props.children}
        </View>
    );
};

const styles = {
  medicationEditContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    margin: 10,
    borderRadius: 10,
    padding: 5,
    shadowColor: 'rgba(162, 162, 162, 0.50)',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  OneComponentContainer:{
    height:30,
    alignSelf:'stretch',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:10,
    paddingLeft:10,
    marginBottom:10,
    alignItems:'center'
  },
   bigDropDown:
  { justifyContent:'center',
    alignItems:'center',
    height: 30,
    width: 200,
    backgroundColor: '#dcdcdc',
    borderRadius: 15,
    
  },
  
};

export default MonitoringForm;
