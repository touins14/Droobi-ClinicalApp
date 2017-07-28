import React, { Component } from 'react';
import { Text, View, Picker, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';
import update from 'react-addons-update';

import { Button, ItemList, CardBGL, ItemMonitoring, PopUp, ItemReport } from '../common';
import Icon from 'react-native-vector-icons/Ionicons';

import MedicationForm from '../common/MedicationForm';


const Item = Picker.item;
class ReportsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    dropDownValue: '',
    modalVisible: true,
    noteValue: '',
    options: [
      'NovaNorm',
      'Bayetta',
      'medication01',
      'NovaNorm2',
      'Bayetta2',
      'medication02'
    ],
    data: [{
      enTitle: 'After Breakfast',
      key: 1,
      bloodValue: 120,
    },
    {
      enTitle: 'Bedtime',
      key: 3,
      bloodValue: 290,
    }],
    monitorings: [
      {
        enTitle: 'Before Dinner',
        target: '100-120',
        frequency: 'Daily'
      },
      {
        enTitle: 'After Breakfast',
        target: '140-180',
        frequency: '1day/week'
      },
      {
        enTitle: 'Before Lunch',
        target: '120-160',
        frequency: '3day/week'
      }
    ],
    medications: []
  };
  }


  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  addingCard() {
    this.setState({
      medications: update(this.state.medications, { $push: ['wqe'] })
    });
  }

  removingCard(index) {
    this.setState({
      medications: update(this.state.medications, { $splice: [[index, 1]] })
    })
  }

  selectingValue(value) {
    this.setState({ selectParentValue: value });
  }

  renderMedications() {
      if (this.state.medications) {
        let i = -1;
        return (
            this.state.medications.map((item) => {
              i++;
              return (
                  <MedicationForm key={i} removing={() => this.removingCard(i)} />
                );
            })

          );
        }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
       <Text>Reports page </Text>
       {/* <ItemList titleText='patient1' subTitleText='qweqwe' date='02-03-04' status='unread' /> */}
       {/* <PopUp
         visible={this.state.modalVisible}
         title='You are about to approve the report'
         subTitle='You can leave a comment before approuving'
         onChangeValue={(value) => { this.setState({ noteValue: value })}}
         onAccept={() => {this.setModalVisible(false);console.log('accepted')}}
         onRefuse={() => {this.setModalVisible(false);console.log('refused')}}
         defaultValue='comment here'
       /> */}
       {/* <ItemReport titleText='patient1' date='02-03-04' time='21:22' status='pending' language='AR' /> */}
       {this.renderMedications()}
       {/* <SelectMenu label='medication' data={this.state.options} selectingValue={(value) => this.selectingValue(value)} /> */}
       {/* <CardBGL data={this.state.data} language='EN' /> */}
       {/* <ItemMonitoring data={this.state.monitorings} />  */}
       <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
         <TouchableOpacity onPress={() => { this.addingCard() }}>
          <Icon name="ios-add-circle-outline" size={48} color='#a9a9a9' />
        </TouchableOpacity>
      </View>
       <Button label="go to PatientReportPage" onPress={() => navigate('PatientReportPage')} />
      </View>
    );
  }
}

export default ReportsPage;
