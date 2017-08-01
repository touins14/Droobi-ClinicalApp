import React from 'react';
import { Text, TouchableOpacity,View ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import strings from './Translation';

const MedicationBlock = (props) => {

     let flexDirection=props.language==="AR"?'row-reverse':'row';
     let alignItems=props.language==="AR"?'flex-end':'flex-start';
     return (
     <View style={styles.ViewContainer}>
        <View style={[styles.firstView,{flexDirection:flexDirection}]}>
              {props.showIcon===true?
                <View style={styles.buttonContainer}>
                  <Icon name="ios-radio-button-on" size={16} color="rgb(227, 80, 108)" />
                </View>:null}
              <View style={styles.imageContainer}>
                <Image source={{uri:'http://droobi.astrolabs.io/medication_service/public/drugs/'+props.data.drug.tradeName+'.png'}}
                       style={styles.imageStyle}
                       resizeMode='center'
                       />
              </View>
             <View style={[styles.detailContainer,{alignItems:alignItems}]}>
                <Text style={styles.nameStyle}>{props.data.drug.tradeName}</Text>
                  {Object.keys(props.data.times).map(key => props.data.times[key]).map(item=>
                    item.status===true?
                    <View style={[styles.listTakeContainer,{flexDirection:flexDirection}]} key={item.name}>
                      <Text style={{fontSize:13,color:"grey",marginRight:10,fontWeight:"600"}}>{props.language==="AR"?item.arName:item.name}</Text>
                      <Text style={{fontSize:12,color:"grey"}}>{item.value} {props.data.drug.unit}</Text>
                    </View>:null)}

             </View>
        </View>
        <View style={[styles.secondView,{flexDirection:flexDirection,alignItems:'flex-end'}]}>
              <Text style={{fontSize:14,color:"grey"}}>{strings.note }</Text>
              <Text style={{fontSize:12,color:"grey",marginLeft:10,marginRight:10}}>{props.data.note}</Text>
        </View>
     </View>

     );

};
const styles={

      ViewContainer:{
           height:150,
           alignSelf:'stretch',
           backgroundColor:'#fff',
           marginLeft:10,
           marginRight:10,
           borderBottomColor:'#ddd',
           borderBottomWidth:0.5,
           padding:10,

      },
      firstView:{
         flex:2,
         //backgroundColor:"pink",
         //flexDirection:'row'
      },
      imageContainer:{
          flex:2,
          //backgroundColor:"pink",
          justifyContent:"center",
          alignItems:"center"
      },
      buttonContainer:{
          flex:0.2,
          //backgroundColor:"pink",
          justifyContent:"center",
          alignItems:"center"
      },
      detailContainer:{
          flex:2,
          //backgroundColor:"yellow",
          padding:10
      },
     secondView:{
        flex:1,
        //flexDirection:'row',
        alignItems:"center",
        justifyContent:"flex-start",
        paddingLeft:20
        //backgroundColor:"yellow"
     },
     nameStyle:{
          fontSize:20,
          color:"grey",
          marginBottom:5

     },
     listTakeContainer:{
          alignSelf:'stretch',

          //flexDirection:"row",
     },
     imageStyle:{
       height:50,
       width:60
     }
}
export { MedicationBlock };
