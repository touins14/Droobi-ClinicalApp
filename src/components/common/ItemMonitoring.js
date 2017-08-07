import React from 'react';
import { View, Text, Image } from 'react-native';
import AfterBreakfastIcon from '../../images/After-breakfast.png';
import AfterDinnerIcon from '../../images/After-dinner.png';
import AfterLunchIcon from '../../images/After-lunch.png';
import BeforeDinnerIcon from '../../images/Before-dinner.png';
import BeforeLunchIcon from '../../images/Before-lunch.png';
import BedtimeIcon from '../../images/Bedtime.png';
import Icon from 'react-native-vector-icons/Ionicons';
import strings from './Translation'


const ItemMonitoring = ({ data,showIcon,language }) => {
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

    let alignItems=language==='AR'?"flex-end":"flex-start"
    let justifyContent=language==='AR'?"flex-end":"flex-start"
    const flexDirection = language === 'AR' ? 'row-reverse' : 'row'
  return (
    <View style={{ alignSelf:'stretch'}}>
    {data.map((item,i)=>
      item.status===true?
        <View key={i} style={itemContainer}>
          <View style={{alignItems:alignItems}}><Text style={title}>{language==="EN"?item.name:item.arName}</Text></View>
          <View style={[textIconConatiner,{  flexDirection: flexDirection}]}>
            
                        <View style={statusConatiner}>
                         {showIcon===true?<Icon name="ios-radio-button-on" size={16} color='#E70001' />:null}
                        </View>
            <View style={[timeIconContainer,{justifyContent: justifyContent}]}>
              <Image source={{uri:"http://droobi.astrolabs.io/glucose_service/public/meals_icons/"+item.name+".png"}} style={timeIcon} resizeMode='contain' />
            </View>
          <View style={[textInfoContainer,{alignItems: alignItems}]}>
              <View style={[texInfotRow,{flexDirection: flexDirection}]}>
                <Text style={labelText}>{strings.target}</Text>
                <Text style={unitText}>{item.max}-{item.min} mg/dL</Text>
              </View>
              <View style={[texInfotRow,{flexDirection:flexDirection}]}>
                <Text style={labelText}>{strings.frequency}</Text>
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
    borderBottomColor: '#ddd'
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
  
    justifyContent: 'flex-start'
  },
  statusConatiner: {
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 5
  },
  timeIconContainer: {
    flexDirection: 'row',
    
    alignItems: 'center',
    flex: 1
  },
  textInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    
    flex: 2
  },
  texInfotRow: {
    flex: 1,
    
    justifyContent: 'space-between'
  },
  labelText: {
    color: '#424242'
  },
  unitText: {
    paddingLeft: 10,
    paddingRight: 10,
    color: '#a0a0a0'
  },
  timeIcon: {
    height: 40,
    width: 40
  }
};
export { ItemMonitoring };
