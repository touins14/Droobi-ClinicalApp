import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import {DropDown}  from './';
import Icon from 'react-native-vector-icons/Ionicons';

class PrescriptionRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    itemDetails: {
      timeValue: 'Before Lunch',
      unitValue: '1000',
      unit: 'mg'
    }
    };
  }
  iconRender() {
    if (this.props.remove) {
      return (
        <TouchableOpacity onPress={() => { this.props.removingTime(); }}>
          <Icon name="ios-remove-circle-outline" size={24} color='#a9a9a9' />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={() => { this.props.addingTime(this.state.itemDetails); }}>
        <Icon name="ios-add-circle-outline" size={24} color='#dc143c' />
      </TouchableOpacity>
    );
  }

  render() {
    const { timeRow, timeIconContainer, mediumDropContainer, mediumDrop, unitInput, smallDrop } = styles
    return (
      <View style={timeRow}>
        <View style={timeIconContainer}>
          <TouchableOpacity onPress={() => { this.props.addingTime(this.state.itemDetails); }}>
            {this.iconRender()}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 0 }}>
          <View style={mediumDropContainer}>
            <View  style={mediumDrop} >
              <DropDown options={['hgfds','jhsfd','jhsda']} width={60}/>
            </View>
          </View>
            
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 0 }}>
            <TextInput style={unitInput} value={this.state.unitValue} onChangeText={(text) => this.setState({ unitValue: text })} />
            <TextInput style={smallDrop} value={this.state.unit} onChangeText={(text) => this.setState({ unit: text })} />
          </View>
        </View>
      </View>
  );
  }
}

          
const styles = {

  timeRow: {
    flexDirection: 'row',
    marginBottom: 12
  },
  timeIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    paddingRight: 15
  },
  mediumDropContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0
  },
  mediumDrop: {
    height: 30,
    width: 100,
    backgroundColor: '#dcdcdc',
    borderRadius: 15,
    paddingLeft: 15
  },
  unitInput: {
    height: 30,
    width: 70,
    backgroundColor: '#dcdcdc',
    borderRadius: 15,
    paddingLeft: 15,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    marginRight: 2
  },
  smallDrop: {
    height: 30,
    width: 30,
    backgroundColor: '#dcdcdc',
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    paddingLeft: 10
  }
};

export default PrescriptionRow;
