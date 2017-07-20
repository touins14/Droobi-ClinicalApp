import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from './common';

class TopNavBar extends Component {

  render() {
    return (
      <View>
        <Button label="Medication" />
        <Button label="Monitoring" />
      </View>
    );
  }
}

export default TopNavBar;
