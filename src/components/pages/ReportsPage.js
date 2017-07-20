import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../common';
import ItemList from '../ItemList';

class SignInPage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
       <Text>Reports page </Text>
       <ItemList />
       <Button label="go to listViewPage" onPress={() => navigate('reportDetailPage')} />
      </View>
    );
  }
}

export default SignInPage;
