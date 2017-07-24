import React from 'react';
import { View, Text, Image } from 'react-native';
import AfterBreakfastIcon from '../../images/After-breakfast.png';
import AfterDinnerIcon from '../../images/After-dinner.png';
import AfterLunchIcon from '../../images/After-lunch.png';
import BeforeDinnerIcon from '../../images/Before-dinner.png';
import BeforeLunchIcon from '../../images/Before-lunch.png';
import BedtimeIcon from '../../images/Bedtime.png';
import Icon from 'react-native-vector-icons/Ionicons';


const ItemMonitoring = ({ data }) => {
  const {
    cardStyle,
    itemContainer,
    title,
    timeIconContainer,
    timeIcon,
    textIconConatiner,
    textInfoContainer,
    texInfotRow,
    statusConatiner,
    labelText,
    unitText } = styles;

  const setTimeIcon = (title) => {
    switch (title) {
     case 'After Breakfast':
       return AfterBreakfastIcon;
     case 'After Dinner':
       return AfterDinnerIcon;
     case 'After Lunch':
       return AfterLunchIcon;
     case 'Before Lunch':
       return BeforeLunchIcon;
     case 'Before Dinner':
       return BeforeDinnerIcon;
     case 'Bedtime':
       return BedtimeIcon;
     default:
       return null;
    }
  };

  const itemsRender = (monitorings) => {
    return (
    monitorings.map((item) => {
      console.log(data);
      return (
        <View style={itemContainer}>
          <View><Text style={title}> {item.enTitle} </Text></View>
          <View style={textIconConatiner}>
            <View style={statusConatiner}>
              <Icon name="ios-radio-button-on" size={16} color='#E70001' />
            </View>
            <View style={timeIconContainer}>
              <Image source={setTimeIcon(item.enTitle)} style={timeIcon} resizeMode='contain' />
            </View>
            <View style={textInfoContainer}>
              <View style={texInfotRow}>
                <Text style={labelText}>Target:</Text>
                <Text style={unitText}>{item.target}mg/dL</Text>
              </View>
              <View style={texInfotRow}>
                <Text style={labelText}>Frequency:</Text>
                <Text style={unitText}>{item.frequency}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    })
  );
  };
  return (
    <View style={cardStyle}>
      {itemsRender(data)}
    </View>
  );
};

const styles = {
  cardStyle: {
    margin: 10,
    borderRadius: 10,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    shadowColor: 'rgba(162, 162, 162, 0.50)',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 5
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    color: 'grey'
  },
  textIconConatiner: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  statusConatiner: {
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 5
  },
  timeIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1
  },
  textInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 2
  },
  texInfotRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  labelText: {
    color: '#424242'
  },
  unitText: {
    paddingLeft: 5,
    color: '#a0a0a0'
  },
  timeIcon: {
    height: 40,
    width: 40
  }
};
export { ItemMonitoring };
