import React from 'react';
import { Text, TouchableOpacity,View ,Image,TextInput,} from 'react-native';
import {NoteModal} from './NoteModal';

const CardBGL = ({ icon, label, onChangeText, language, defaultValue, onPress, onChangeTextNote, isVisible, Cancel, Save, blood }) => {

     const {CardStyle,labelStyle} = styles;
     let directionCard=language==="AR"?'row-reverse':'row';
     let alignItems=language   =="AR"?'flex-end':"flex-start";
     let textAlign=language   =="AR"?'right':"left";
     return (
          <View style={[CardStyle,{flexDirection:directionCard}]} >
               <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Image source={icon} style={{height:50,width:50}}/>
               </View>
               <View style={{flex:1.2,justifyContent:"center",alignItems:'center'}}>
                   <Text style={labelStyle}>{label}</Text>
               </View>
               <View style={{flex:0.75,alignItems:"center",borderBottomWidth:1,marginTop:33,marginBottom:33,borderBottomColor:"#ddd"}}>
                    <TextInput
                        defaultValue={defaultValue}
                        autoCorrect={false}
                        style={{flex:1,fontSize:20,textAlign:textAlign}}
                        onChangeText={onChangeText}/>
               </View>
               <View style={{flex:0.75,alignItems:"center",justifyContent:"flex-end",paddingBottom:20}}>
                    <Text >mg/dl</Text>
               </View>
               <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                    <Image source={blood} style={{height:52,width:35}}/>
               </View>
               <TouchableOpacity style={{flex:0.5,justifyContent:"flex-end",alignItems:"flex-end"}} onPress={onPress}>
                    <Image source={(require('../../images/edit.png'))} style={{height:25,width:25}}/>
               </TouchableOpacity>

          </View>
     );
};
const styles = {
     CardStyle:{

          alignSelf:"stretch",
          height:100,
          marginRight:15,
          marginLeft:15 ,
          marginTop:10,
          borderRadius:10,
          padding:5,

          shadowColor: '#ddd',
          shadowOffset: {
               width: 3,
               height: 3
          },
          shadowRadius: 10,
          shadowOpacity: 1.9
     },
     labelStyle:{
          fontSize:18,
          color:"grey"
     }
};
export { CardBGL };
