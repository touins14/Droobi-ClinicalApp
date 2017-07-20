import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const DropDown = ({ options,onSelect}) => {
     const {buttonStyle,textButtonStyle,dropdownStyle} = styles;
     return (
     <ModalDropdown options={options}
                    animated={true}
                    style={buttonStyle}
                    textStyle={textButtonStyle}
                    dropdownStyle={dropdownStyle}
                    onSelect={onSelect}
                   />
     );
};
const styles = {
     
     buttonStyle: {
          //backgroundColor:"#000"
     },
     textButtonStyle:{
        color:"grey",
        fontSize:14,
     },
     dropdownStyle:{
      width:100
     }
};
export { DropDown };

