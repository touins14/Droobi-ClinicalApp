import React from 'react';
import { View } from 'react-native';


const Container = (props) => {
	return (
     <View style={styles.ViewStyle}>{props.children}</View>
    );
};

const styles ={
	ViewStyle: {
	   flex:1,
       backgroundColor: '#fff',

	},
};
export { Container };
