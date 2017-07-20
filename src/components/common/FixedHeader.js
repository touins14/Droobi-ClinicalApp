import React from 'react';
import { View,Text ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

 const FixedHeader = (props) => {
      let profileIcon=props.dashboard==true?
                  <TouchableOpacity style={styles.profileIconContainer} onPress={props.goProfile}>
                           <Icon  name='ios-contact-outline' style={styles.IconStyle}/>
                        </TouchableOpacity>:null
 	return (
 		<View style={styles.HeaderStyle}>
 		    <Text style={styles.textStyle}>{props.label}</Text>
                  {profileIcon}
 		</View>
 	);
 }
 
const styles = {
	HeaderStyle: {
            alignSelf:"stretch",
            height:65,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'#28c5c2'
	},
	textStyle:{
            fontWeight:'500',
            fontSize:18,
            marginTop:15,
            color:"#fff"
	},
      IconStyle:{
            fontSize:35,
            color:"#fff"
      },
      profileIconContainer:{
            position:"absolute",
            right:0,
            //backgroundColor:"pink",
            height:65,
            width:50,
            justifyContent:"center",
            alignItems:"flex-start",
            paddingTop:15
      }
};
export { FixedHeader };
