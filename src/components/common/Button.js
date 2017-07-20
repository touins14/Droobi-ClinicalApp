import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress,label ,Style,color}) => {

     const {textStyle } = styles;
     return (
     <TouchableOpacity onPress={onPress} style={Style}>
        <Text style={[textStyle,{color:color}]}>{label}</Text>
     </TouchableOpacity>
      
     );
};
const styles = {
     
     textStyle: {
          alignSelf: 'center',
          fontSize: 16,
          paddingTop: 5,
          paddingBottom: 5,
          
     }
};
export { Button };

