import React from 'react';
import { Text, TouchableOpacity,View } from 'react-native';
import{StockLine}  from 'react-native-pathjs-charts';

const Chart = ({ onPress,label ,Style,color,data,tickValues}) => {

var data=[data]
let options = {
    width: 300,
    height: 150,
    color: '#28c5c2',
    min:0,max:400,
    margin: {
      top: 10,
      left: 35,
      bottom: 30,
      right: 10
    },
    animate: {
      type: 'delayed',
      duration: 200
    },
    axisX: {
     
     showAxis: false,
     showLines: false,
     showLabels: true,
     showTicks: false,
     zeroAxis: true,
     orient: 'bottom',
     tickValues:tickValues,
     tickCount: 7,
      label: {
          fontFamily: 'Arial',
          fontSize: 10,
          fontWeight: false,
          fill: '#28c5c2',
          
      }
    },
    axisY: {
     showAxis: false,
     showLines: true,
     showLabels: true,
     showTicks: true,
     zeroAxis: true,
     orient: "left",
     tickValues: [],
     label: {
          fontFamily: 'Arial',
          fontSize: 15,
          fontWeight: false,
          fill: '#28c5c2',
     }
    }
  }
     return (
          <View style={{alignSelf:'stretch',justifyContent:'center',alignItems:'center',padding:20}}>    
               <StockLine data={data} options={options} xKey='x' yKey='y' />     
          </View>
        );
};

export { Chart };

