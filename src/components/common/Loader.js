import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-spinkit';

const Loader = ({ size,color }) => {

     const {spinner } = styles;
     return (
      <Spinner style={styles.spinner}  size={size} type="Bounce" color={color}/>
      
     );
};
const styles = {
     
     spinner: {
          
          
     }
};
export { Loader };

