import React from 'react';
import { TextInput, View, Text,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');

const Input = ({  value, onChangeText, placeholder, secureTextEntry,autoFocus,language,direction,IconName}) => {
	const { inputStyle, labelStyle, containerStyle } = styles;
	let directionInput=language=="AR"?'row-reverse':"row";
	return (
	<View style={[containerStyle,{flexDirection:directionInput}]}>	
	     <Icon  name={IconName} style={{fontSize:30,color:'#28c5c2',backgroundColor:"transparent"}}/>
	     <TextInput
	         secureTextEntry={secureTextEntry}
	         placeholder={placeholder}
	         autoCorrect={false}
		     value={value}
		     autoFocus={autoFocus}
		     onChangeText={onChangeText}
		     style={[inputStyle,direction]}
		     language={language}
		     blurOnSubmit={true}

	     />
    </View>
	);
};

const styles = {
	inputStyle: {
      color: '#000',
      paddingRight: 20,
      paddingLeft: 20,
      fontSize: 18,
      flex: 3,

	},
	containerStyle: {
        height: 40,
        width:width/2+80,
        borderRadius:20,
        flexDirection:"row",
        backgroundColor:"#fff",
        opacity:0.7,
        paddingLeft:20,
        paddingRight:20,
        marginBottom:10,
        alignItems:'center',



        

	}
};
export { Input };
