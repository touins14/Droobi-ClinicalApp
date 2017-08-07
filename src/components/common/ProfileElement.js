import React from 'react';
import { TextInput, View, Text,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import strings from './Translation';


const ProfileElement = ({language,title,labelOne,iconOne,labeltwo,icontwo,labelthree,iconthree, showIcon,showFirstIcon,onPress,goReading,goMedical,goReports}) => {

	let flexDirection= language=="AR"?'row-reverse':"row";
	let justifyContent= language=="AR"?'flex-end':"flex-start";
  let alignItems= language=="AR"?'flex-end':"flex-start";
  let goToIconName=language=="AR"?'ios-arrow-back':"ios-arrow-forward";

	return (
	<View style={styles.GlobalContainer}>

        <View style={styles.shadowContainer}>
            <OneItem language={language}
                     showFirstIcon={showFirstIcon}
                     icon={iconOne}
                     label={labelOne}
                     onPress={goReading}
                     flexDirection={flexDirection}
                     alignItems={alignItems}/>
            <OneItem language={language}
                     showFirstIcon={showFirstIcon}
                     icon={icontwo}
                     label={labeltwo}
                     flexDirection={flexDirection}
                     alignItems={alignItems}
                     onPress={goMedical}
                     />
            <OneItem language={language}
                     showFirstIcon={showFirstIcon}
                     icon={iconthree}
                     label={labelthree}
                     flexDirection={flexDirection}
                     alignItems={alignItems}
                     onPress={goReports}
                     />

        </View>

	</View>
	);
};
const OneItem=(props)=>{

    let goToIconName=props.language=="AR"?'ios-arrow-back':"ios-arrow-forward";
    let firstIcon=props.showFirstIcon==true?

        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
           <Image style={styles.IconStyle} source={props.icon}/>
        </View>:null
    return (
	<TouchableOpacity
          style={[styles.OneItemContainer,{flexDirection:props.flexDirection}]}
          onPress={props.onPress}
          activeOpacity={1}
          >

        {firstIcon}
        <View style={{flex:4,alignItems:props.alignItems}}>
        	<Text  style={styles.labelStyle}>{props.label}</Text>
        </View>
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
	           <Icon  name={goToIconName} style={styles.GoIconStyle}/>
        </View>

	</TouchableOpacity>);
};
const styles = {

    GlobalContainer:{
    	alignSelf:"stretch",
    	marginRight:10,
    	marginLeft:10,
    	backgroundColor:"transparent",
    	padding:10,
    },
	shadowContainer:{

           alignSelf:'stretch',
           backgroundColor:'#fff',
           marginLeft:5,
           marginRight:5,
           marginTop:10,
           borderRadius:10,
           paddingLeft:10,
           paddingRight:10,
           marginBottom:10,
					 shadowColor: 'rgba(162, 162, 162, 0.50)',
	         shadowOffset: { width: 1, height: 1 },
	         shadowOpacity: 1,
	         shadowRadius: 2,
           
	},
	OneItemContainer:{
		height:40,
		alignSelf:'stretch',
		flexDirection:"row",
		borderBottomWidth:1,
        borderBottomColor:"#ddd",
        marginLeft:10,
        marginRight:10,
        padding:5
	},
	GoIconStyle:{
        fontSize:25,
		color:"grey",
	},
	labelStyle:{
		marginLeft:10,
		marginRight:10,
		color:"grey",
		fontSize:16
	},
	IconStyle:{
		height:25,
		width:25,
	},


};
export { ProfileElement };
