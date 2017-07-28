import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import update from 'react-addons-update';
import DropDown, {
  Select,
  Option,
  OptionList,
} from 'react-native-selectme';
import Icon from 'react-native-vector-icons/Ionicons';
import PrescriptionRow from '../common/PrescriptionRow'
// import SelectMenu from '../common/SelectMenu'

class MedicationForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        prescriptions: []
      };
  }
  removingPrescreption(index) {
    this.setState({
      prescriptions: update(this.state.prescriptions, { $splice: [[index, 1]] })
    });
  }

  addingPrescreption(value) {
    console.log(value);
    this.setState({
      prescriptions: update(this.state.prescriptions, { $push: [value] })
    });
    // this.setState({ prescriptions: this.state.prescriptions.concat([value]) });
    console.log('after:  ', this.state.prescriptions);
  }
  renderPrescriptions() {
      if (this.state.prescriptions) {
        let i = -1;
        return (
            this.state.prescriptions.map((item) => {
              i++;
              return (
                  <PrescriptionRow
                          key={i}
                          addingTime={(value) => { this.addingPrescreption(value); }}
                          remove
                          removingTime={() => { this.removingPrescreption(i); }}
                  />
                );
            })
          );
        }
  }

  render() {
    const {
      medicationEditContainer,
      medicationRow,
      medicationRowTitle,
      bigDropDownContainer,
      bigDropDown,
      } = styles;
    return (
      <View style={medicationEditContainer}>
        <View style={medicationRow}>
          <View style={medicationRowTitle}>
            <Text>Medication:</Text>
          </View>
          <View style={bigDropDownContainer}>
            <TextInput style={bigDropDown} />
          </View>
        </View>
        {this.renderPrescriptions()}
        <PrescriptionRow addingTime={(value) => { this.addingPrescreption(value); }} />
        <View style={medicationRow}>
          <View style={medicationRowTitle}>
            <Text>Note:</Text>
          </View>
          <View style={bigDropDownContainer}>
            <TextInput style={bigDropDown} />
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: 10 }}>
          <TouchableOpacity onPress={() => { this.props.removing(); }}>
            <Icon name="ios-trash-outline" size={24} color='#696969' />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


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
  medicationRow: {
    flexDirection: 'row',
    marginBottom: 12
  },
  medicationRowTitle: {
     justifyContent: 'center',
     alignItems: 'center',
     flex: 1
  },
  bigDropDownContainer: {
     justifyContent: 'center',
     alignItems: 'center',
     flex: 0
  },
  bigDropDown:
  {
    height: 30,
    width: 200,
    backgroundColor: '#dcdcdc',
    borderRadius: 15,
    paddingLeft: 15
  },
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
    fontSize: 14,
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
  smallDrop:{
    height: 30,
    width: 30,
    backgroundColor: '#dcdcdc',
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    paddingLeft: 10
  }
};

export default MedicationForm;
