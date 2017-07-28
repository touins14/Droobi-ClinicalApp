import React from 'react';
import { View, Text, Image } from 'react-native';
import AfterBreakfastIcon from '../../images/After-breakfast.png';
import AfterDinnerIcon from '../../images/After-dinner.png';
import AfterLunchIcon from '../../images/After-lunch.png';
import BeforeDinnerIcon from '../../images/Before-dinner.png';
import BeforeLunchIcon from '../../images/Before-lunch.png';
import BedtimeIcon from '../../images/Bedtime.png';
import Icon from 'react-native-vector-icons/Ionicons';


const ItemMonitoring = ({ data,showIcon }) => {
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
  return (
    <View style={{ alignSelf:'stretch'}}>
    {data.map(item=>
      item.status===true?
        <View style={itemContainer}>
          <View><Text style={title}>{item.name}</Text></View>
          <View style={textIconConatiner}>
            
                        <View style={statusConatiner}>
                         {showIcon===true?<Icon name="ios-radio-button-on" size={16} color='#E70001' />:null}
                        </View>
            <View style={timeIconContainer}>
              <Image source={{uri:"http://droobi.astrolabs.io/glucose_service/public/meals_icons/"+item.name+".png"}} style={timeIcon} resizeMode='contain' />
            </View>
            <View style={textInfoContainer}>
              <View style={texInfotRow}>
                <Text style={labelText}>Target:</Text>
                <Text style={unitText}>{item.max}-{item.min} mg/dL</Text>
              </View>
              <View style={texInfotRow}>
                <Text style={labelText}>Frequency:</Text>
                <Text style={unitText}>Daily</Text>
              </View>
            </View>
          </View>
        </View>:null
      )}
    </View>
  );
};

const styles = {
  itemContainer: {
    flexDirection: 'column',
    alignSelf:'stretch',
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
