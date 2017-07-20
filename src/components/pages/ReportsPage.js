import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../common';
import ItemList from '../ItemList';

class ReportsPage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
       <Text>Reports page </Text>
       <ItemList />
       <Button label="go to PatientReportPage" onPress={() => navigate('PatientReportPage')} />
      </View>
    );
  }
}

export default ReportsPage;
