import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ItemList extends Component {
  render() {
    return (
        <View style={styles.itemListConatiner}>
          <View style={styles.DotContainer}>
            <Icon name="ios-radio-button-on" size={30} color="#900" />
          </View>
          <View style={styles.avatarContainer} >
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://c1.staticflickr.com/9/8083/8344072439_d11702f4ed.jpg',
                width: 60,
                height: 60
              }}
            />
          </View>
          <View style={styles.infosContainer} >
            <View>
              <Text>Patient Name</Text>
              <Text>Educator Name</Text>
              <Text>02-03-2017</Text>
            </View>
            <View>
              <Icon name="ios-arrow-forward" size={30} color="#900" />
            </View>
          </View>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  itemListConatiner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  DotContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 0
  },
  avatarContainer: {
    flex: 0
  },
  infosContainer: {
    flex: 0
  }
});

export default ItemList;
