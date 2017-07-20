import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemList = ({ titleText, subTitleText, date, status, language }) => {
    const {
        itemListConatiner,
        DotContainer,
        avatarContainer,
        infosContainer,
        textContainer,
        arrowContainer,
        avatar,
        Title,
        subTitle,
        dateTitle
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

    const rowDirection = language === "AR" ? 'row-reverse' : 'row';
    const alignItems = language === "AR" ? 'flex-end':'flex-start';
    const textAlign = language === "AR" ? 'right' : 'left';
    return (
        <View style={[itemListConatiner, { flexDirection: rowDirection }]}>
          <View style={DotContainer}>
            <Icon name="ios-radio-button-on" size={16} color={statusDot()} />
          </View>
          <View style={avatarContainer} >
            <Image
              resizeMode='cover'
              style={avatar}
              source={{
                uri: 'https://c1.staticflickr.com/9/8083/8344072439_d11702f4ed.jpg',
                width: 60,
                height: 60
              }}
            />
          </View>
          <View style={[infosContainer, { flexDirection: rowDirection }]} >
            <View style={textContainer}>
              <Text style={[Title, { textAlign }]} >{titleText}</Text>
              <Text style={[subTitle, { textAlign }]}>{subTitleText}</Text>
              <Text style={[dateTitle, { textAlign }]}>{date}</Text>
            </View>
            <View style={arrowContainer}>
              <Icon name={language === "AR" ? 'ios-arrow-back' : 'ios-arrow-forward'} size={24} color="#9e9e9e" />
            </View>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  itemListConatiner: {
    marginBottom: 10,
    shadowColor: 'rgba(162, 162, 162, 0.70)',
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

  avatarContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
    padding: 10
  },
  infosContainer: {
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
  avatar: {
    borderRadius: 30
  },
  Title: {
    color: '#28c5c2',
    fontSize: 18
  },
  subTitle: {
  },
  dateTitle: {
    color: '#a0a0a0',
    fontSize: 12
  }
});

export { ItemList };
