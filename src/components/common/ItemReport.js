import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemReport = ({ titleText, date, time, status, language }) => {
    const {
        itemListConatiner,
        DotContainer,
        infosContainer,
        textContainer,
        arrowContainer,
        Title,
        subTitle,
        dateTitle,
        timeTitle
      } = styles;

    const statusDot = () => {
      switch (status) {
          case 'unread':
              return '#078a38';
          case 'pending':
            return '#e66501';
          default :
            return 'rgba(255, 255, 255, 0)';
      }
    };

    const rowDirection = language === 'AR' ? 'row-reverse' : 'row';
    const alignItems = language === 'AR' ? 'flex-end' : 'flex-start';
    const textAlign = language === 'AR' ? 'right' : 'left';
    return (
        <TouchableOpacity style={[itemListConatiner, { flexDirection: rowDirection }]}>
          <View style={DotContainer}>
            <Icon name="ios-radio-button-on" size={16} color={statusDot()} />
          </View>
          <View style={[infosContainer, { flexDirection: rowDirection }]} >
            <View style={textContainer}>
              <View style={{ flexDirection: rowDirection, justifyContent: 'flex-start'}}>
                <Text style={[dateTitle, { textAlign }]}>{date}</Text>
                <Text style={[timeTitle, { textAlign }]}>{time}</Text>
              </View>
              <Text style={[Title, { textAlign }]} >{titleText}</Text>
            </View>
            <View style={arrowContainer}>
              <Icon
                name={language === 'AR' ? 'ios-arrow-back' : 'ios-arrow-forward'}
                size={24}
                color="#9e9e9e"
              />
            </View>
          </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  itemListConatiner: {
    margin: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    shadowColor: 'rgba(162, 162, 162, 0.50)',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  DotContainer: {
    paddingHorizontal: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0
  },
  infosContainer: {
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    flex: 0
  },
  arrowContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
    paddingHorizontal: 5
  },
  Title: {
    color: '#28c5c2',
    fontSize: 16
  },
  subTitle: {
  },
  dateTitle: {
    color: '#a0a0a0',
    fontSize: 12
  },
  timeTitle: {
    marginHorizontal: 8,
    color: '#a0a0a0',
    fontSize: 12
  }
});

export { ItemReport };
