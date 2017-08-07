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
     
     return (
       <View style={cardStyle}>
         {
           data.map((item) => {
             if (item.value < 150) iconBlood = grayBlood;
             else if (item.value >= 150 && item.value <= 250) iconBlood = greenBlood;
             else if (item.value > 250) iconBlood = redBlood;
             else iconBlood = '';
             return (
               <ItemBGL
                icon={{uri:"http://droobi.astrolabs.io/glucose_service/public/meals_icons/"+item.name+".png"}} 
                label={language==='EN'?item.name:item.arName}
                key={item.key}
                defaultValue={item.value}
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
          paddingLeft: 5,
          paddingRight: 5,
          shadowColor: 'rgba(162, 162, 162, 0.50)',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 1,
          shadowRadius: 2,
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
          backgroundColor:'#fff'
     }
};
export { CardBGL };
