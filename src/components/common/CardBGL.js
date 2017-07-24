import React from 'react';
import { Text, View, Image } from 'react-native';
import ItemBGL from './ItemBGL';
import redBlood from '../../images/big-blood-drop-Alert.png';
import greenBlood from '../../images/big-blood-drop.png';
import grayBlood from '../../images/big-blood.png';
import AfterBreakfastIcon from '../../images/After-breakfast.png';
import AfterDinnerIcon from '../../images/After-dinner.png';
import AfterLunchIcon from '../../images/After-lunch.png';
import BeforeDinnerIcon from '../../images/Before-dinner.png';
import BeforeLunchIcon from '../../images/Before-lunch.png';
import BedtimeIcon from '../../images/Bedtime.png';

const CardBGL = ({ data, language }) => {
     const { cardStyle } = styles;
     const directionCard = language === 'AR' ? 'row-reverse' : 'row';
     const alignItems = language === 'AR' ? 'flex-end' : 'flex-start';
     const textAlign = language === 'AR' ? 'right' : 'left';
     let iconBlood;
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
     return (
       <View style={cardStyle}>
         {
           data.map((item) => {
             if (item.bloodValue < 150) iconBlood = grayBlood;
             else if (item.bloodValue >= 150 && item.bloodValue <= 250) iconBlood = greenBlood;
             else if (item.bloodValue > 250) iconBlood = redBlood;
             else iconBlood = '';
             return (
               <ItemBGL
                icon={setTimeIcon(item.enTitle)}
                label={item.enTitle}
                key={item.key}
                defaultValue={item.bloodValue}
                language={language}
                blood={iconBlood}
               />
            );
           })
         }

       </View>
       );
};
const styles = {
     cardStyle: {
          alignSelf: 'stretch',
          marginRight: 10,
          marginLeft: 10,
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 10,
          padding: 5,
          shadowColor: 'rgba(162, 162, 162, 0.50)',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 1,
          shadowRadius: 2,
          borderBottomWidth: 1,
          borderBottomColor: '#ddd'
     }
};
export { CardBGL };
