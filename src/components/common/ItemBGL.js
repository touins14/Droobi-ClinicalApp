import React from 'react';
import { Text, View, Image } from 'react-native';

const ItemBGL = ({ icon, label, language, defaultValue, blood }) => {
     const { itemStyle,
       timeIconContainer,
       timeIcon,
       titleContainer,
       title,
       bloodValueContainer,
       bloodValue,
       bloodUnit,
       bloodIconContainer,
       bloodIcon
     } = styles;
     const directionCard = language === 'AR' ? 'row-reverse' : 'row';
     const alignItems = language === 'AR' ? 'flex-end' : 'flex-start';
     const textAlign = language === 'AR' ? 'right' : 'left';

     return (
          <View style={[itemStyle, { flexDirection: directionCard }]} >
               <View style={timeIconContainer}>
                    <Image source={icon} style={timeIcon} resizeMode='contain' />
               </View>
               <View style={titleContainer}>
                   <Text style={title}>{label}</Text>
               </View>
               <View style={bloodValueContainer}>
                 <Text style={[bloodValue, { textAlign }]} >
                    {defaultValue}
                 </Text>
                 <Text style={bloodUnit}> mg/dl</Text>
               </View>
               <View style={bloodIconContainer}>
                    <Image source={blood} style={bloodIcon} resizeMode='contain' />
               </View>
          </View>
     );
};
const styles = {
     itemStyle: {
          alignSelf: 'stretch',
          height: 70,
          borderRadius: 10,
          padding: 5,
          borderBottomWidth: 1,
          borderBottomColor: '#ddd'
     },
     timeIconContainer: {
       flex: 0,
       justifyContent: 'center',
       alignItems: 'center',
       paddingHorizontal: 10
     },
     timeIcon: {
       height: 50,
       width: 50
     },
     titleContainer: {
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'flex-start',
       alignItems: 'center'
     },
     title: {
          fontSize: 18,
          color: 'grey'
     },
     bloodValueContainer: {
       flex: 0,
       flexDirection: 'row',
       justifyContent: 'flex-start',
       alignItems: 'center',
       paddingHorizontal: 10
     },
     bloodValue: {
       fontSize: 18,
     },
     bloodUnit: {
       color: '#a9a9a9'
     },
     bloodIconContainer: {
       flex: 0,
       paddingHorizontal: 10,
       alignItems: 'center',
       justifyContent: 'center'
     },
     bloodIcon: {
       width: 20
     }
};
export default ItemBGL;
