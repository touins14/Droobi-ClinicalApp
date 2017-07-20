 import React, { Component } from 'react';
 import { Text, View } from 'react-native';
 import { Button } from '../common';

 class SignInPage extends Component {
 //   static navigationOptions =() => ({
 //    title: 'signInPage',
 //    gesturesEnabled: false,
 //    headerLeft: null,
 //    header: null,
 //    headerBackTitle: null,
 //    headerStyle: { backgroundColor: '#28c5c2' }
 // })

   render() {
     const { navigate } = this.props.navigation;
     return (
       <View>
        <Text>Sign in page </Text>
        <Button label="Go to tabs" onPress={() => navigate('tabsPage')} />
       </View>
     );
   }
 }

 export default SignInPage;
