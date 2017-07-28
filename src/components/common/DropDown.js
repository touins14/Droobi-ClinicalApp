import React from 'react';
import { Text, TouchableOpacity,View } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';

const DropDown = ({ options,onSelect,width}) => {
     const {buttonStyle,textButtonStyle,dropdownStyle} = styles;
     return (
        
            <ModalDropdown options={options}
                    animated={true}
                    style={[buttonStyle,{width:width}]}
                    textStyle={textButtonStyle}
                    dropdownStyle={dropdownStyle}
                    onSelect={onSelect}
                    defaultValue={'BeforeLunch'}
                   />
        
     );
};
const styles = {
     
     buttonStyle: {
          backgroundColor:"#ddd",
          borderRadius:15,
          justifyContent:'center',
          alignItems:'center',
          flex:1
     },
     textButtonStyle:{
        color:"black",
        fontSize:10,
     },
     dropdownStyle:{
      marginTop:7,
      marginLeft:30
      

     }
};
export { DropDown };

