import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ListViewPage extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
       <Text>List View page </Text>
      </View>
    );
  }
}

export default ListViewPage;
