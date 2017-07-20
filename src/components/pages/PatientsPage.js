import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../common';

class SignInPage extends Component {
//   static navigationOptions =() => ({
//    title: 'chatPage',
//    gesturesEnabled: true,
//    headerLeft: true,
//    header: true,
//    headerBackTitle: true,
//    headerStyle: { backgroundColor: '#28c5c2' }
// })
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
       <Text>Patients page </Text>
       <Button label="Go to patient Detail" onPress={() => navigate('patientDetailPage')} />
      </View>
    );
  }
}

export default SignInPage;
