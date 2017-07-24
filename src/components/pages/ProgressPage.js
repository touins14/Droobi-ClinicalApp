import React, { Component } from 'react';
import { Text, View,ScrollView,Image } from 'react-native';
import { Button } from '../common';

class ProgressPage extends Component {
  render() {
    
    return (
      <View>
          <View style={styles.filterDay}>
            <View><Text style={styles.titlStyle}>Glucose Reading</Text></View>
            <View style={styles.ButtonsDayContainer}>
	            <Button Style={[styles.DayButton,{backgroundColor:"#28c5c2"}]} color='#fff'label="7 Days"/>
	            <Button Style={styles.DayButton} color='#28c5c2'label="14 Days"/>
	            <Button Style={styles.DayButton} color='#28c5c2'label="30 Days"/>
	        </View>
          </View>
          <View style={styles.filterCondition}>
          	<View><Text style={styles.filterByCondStyle}>Filter By Condition</Text></View>
          	<ScrollView style={styles.filterBlockStyle} horizontal={true}>
               <Condition label='All conditions' image={require('../../images/smoothie.png')}/>
               <Condition label='After breackfast' image={require('../../images/smoothie.png')}/>
               <Condition label='jhsgjsk' image={require('../../images/smoothie.png')}/>
               <Condition label='jhsgjsk' image={require('../../images/smoothie.png')}/>
               <Condition label='jhsgjsk' image={require('../../images/smoothie.png')}/>
               <Condition label='jhsgjsk' image={require('../../images/smoothie.png')}/>
               <Condition label='jhsgjsk' image={require('../../images/smoothie.png')}/>
          		
          	</ScrollView>
          </View>
      </View>
    );
  }
}
const Condition = (props) => {
	return (
       <View style={styles.condition}>
           <Image source={props.image} style={styles.ConditionImage} />
            
	           <Text style={{textAlign:'center'}}>{props.label}</Text>
	        
       </View>
    );
};
const styles={
    filterDay:{
    	paddingTop:20,
    },
	ButtonsDayContainer:{
        alignSelf:"stretch",
        alignItems:'center',
        justifyContent:"center",
        flexDirection:'row'
	},
	DayButton:{
        flex:1,
        margin:10,
        height:35,
        borderRadius:10,
        borderWidth:0.5,
        borderColor:'#28c5c2',
        alignItems:'center',
        justifyContent:'center'
	},
	titlStyle:{
		fontSize:16,
		color:'grey',
		marginLeft:10,
		marginRight:10
	},
	filterByCondStyle:{
		fontSize:12,
		color:'grey',
		marginLeft:10,
		marginRight:10
	},
	filterBlockStyle:{
		alignSelf:"stretch",
        height:100,
        marginRight:5,
        marginLeft:5 ,
        marginTop:10,
        padding:5,
        shadowColor: '#ddd',
        shadowOffset: {
            width: 1.5,
            height: 1.5
        },
        shadowOpacity: 1.9,
        flexDirection:"row"
	},
	condition:{
		width:100,
		justifyContent:"center",
		alignItems:"center",
	},
	ConditionImage:{
      height:50,
      width:50,
      marginBottom:6
	}
}
export default ProgressPage;
