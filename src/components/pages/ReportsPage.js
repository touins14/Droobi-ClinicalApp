import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { Button, ItemList, CardBGL, ItemMonitoring } from '../common';
const Item = Picker.item;

class ReportsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{
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
    ]
  };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
       <Text>Reports page </Text>
       <ItemList titleText='patient1' subTitleText='qweqwe' date='02-03-04' status='unread' />
       <Picker mode="dropdown">
         <Item label="Java" value="java" />
         <Item label="JavaScript" value="js" />
       </Picker>
       <CardBGL data={this.state.data} language='EN' />
       <ItemMonitoring data={this.state.monitorings} /> 
       <Button label="go to PatientReportPage" onPress={() => navigate('PatientReportPage')} />
      </View>
    );
  }
}

export default ReportsPage;
