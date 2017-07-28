import React, { Component } from 'react';
import { Text, View,ScrollView,Image,Dimensions,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { Button,Chart } from '../common';
import { getChartAllCondition,getCharts} from "../../actions/DoctorAction";
const window = Dimensions.get('window');
class ProgressPage extends Component {
  constructor(props) {
    super(props);
      this.state = {
          filterDay:7,
          filterCondition:'All Condition',
          clickedButton7:true,
          clickedButton14:false,
          clickedButton30:false
      }
    }
  componentWillMount(){
      this.props.getChartAllCondition(this.props.PatientId);
  }
  render() {
    let background7=this.state.clickedButton7==true?{backgroundColor:"#28c5c2"}:{backgroundColor:"#fff"}
    let color7=this.state.clickedButton7==true?'#fff':'#28c5c2'
    let background14=this.state.clickedButton14==true?{backgroundColor:"#28c5c2"}:{backgroundColor:"#fff"}
    let color14=this.state.clickedButton14==true?'#fff':'#28c5c2'
    let background30=this.state.clickedButton30==true?{backgroundColor:"#28c5c2"}:{backgroundColor:"#fff"}
    let color30=this.state.clickedButton30==true?'#fff':'#28c5c2'
    
    return (
      <View>
          <View style={styles.filterDay}>
            <View><Text style={styles.titlStyle}>Glucose Reading</Text></View>
            <View style={styles.ButtonsDayContainer}>
	            <Button Style={[styles.DayButton,background7]}
                      color={color7}
                      label="7 Days"
                      onPress={()=>{this.setState({
                                            filterDay:7,
                                            clickedButton7:!this.state.clickedButton7,
                                            clickedButton14:false,
                                            clickedButton30:false,
                                    })
                                   this.props.getCharts(7,this.state.filterCondition,this.props.PatientId)}}
                      />
	            <Button Style={[styles.DayButton,background14]}
                      color={color14}
                      label="14 Days"
                      onPress={()=>{this.setState({
                                        filterDay:14,
                                        clickedButton7:false,
                                        clickedButton14:true,
                                        clickedButton30:false
                                      })
                                    this.props.getCharts(14,this.state.filterCondition,this.props.PatientId);}}
                      />
	            <Button Style={[styles.DayButton,background30]}
                      color={color30}
                      label="30 Days"
                      onPress={()=>{this.setState({
                                        filterDay:30,
                                        clickedButton7:false,
                                        clickedButton14:false,
                                        clickedButton30:true
                                    })
                                    this.props.getCharts(30,this.state.filterCondition,this.props.PatientId);}}
                      />
	        </View>
          </View>
          <View style={styles.filterCondition}>
          	<View><Text style={styles.filterByCondStyle}>Filter By Condition</Text></View>
          	<View style={styles.swiperStyle}>
            <Swiper height={120}
                    showsButtons={true}
                    showsPagination={false}
                    width={window.width-50}
                    loadMinimalSize={2}
                    loadMinimal={true}
                    >
		        <View style={styles.slide}>
		              <Condition label='All Conditions'
                             image={require('../../images/smoothie.png')}
                             clickedStyle={styles.clickedCondition}
                             onPress={()=>{this.setState({filterCondition:"All Conditions"})
                             this.props.getCharts(this.state.filterDay,"All Conditions",this.props.PatientId)
                             }}
                  />
                  <Condition label='Before Lunch' 
                             image={require('../../images/Before-lunch.png')}
                             onPress={()=>{this.setState({filterCondition:"Before Lunch"})
                             this.props.getCharts(this.state.filterDay,"Before Lunch",this.props.PatientId)
                             }}
                  />
                  <Condition label='After Lunch' 
                             image={require('../../images/After-lunch.png')}
                             onPress={()=>{this.setState({filterCondition:"After Lunch"})
                             this.props.getCharts(this.state.filterDay,"After Lunch",this.props.PatientId)
                             }}
                  />
		        </View>
		        <View style={styles.slide}>
		              <Condition label='Bedtime'
                             image={require('../../images/After-dinner.png')}
                             onPress={()=>{this.setState({filterCondition:"Bedtime"})
                             this.props.getCharts(this.state.filterDay,"Bedtime",this.props.PatientId)
                            }}
                  />
                  <Condition label='After Breakfast'
                             image={require('../../images/After-breakfast.png')}
                             onPress={()=>{this.setState({filterCondition:"After Breakfast"})
                             this.props.getCharts(this.state.filterDay,"After Breakfast",this.props.PatientId)
                             }}
                  />
                  <Condition label='Before  Dinner'
                             image={require('../../images/Bedtime.png')}
                             onPress={()=>{this.setState({filterCondition:"Before Dinner"})
                             this.props.getCharts(this.state.filterDay,"Before Dinner",this.props.PatientId)
                             }}
                  />
		        </View>
		        <View style={styles.slide}>
		              <Condition label='After Dinner'
                             image={require('../../images/Before-dinner.png')}
                             onPress={()=>{this.setState({filterCondition:"After Dinner"})
                             this.props.getCharts(this.state.filterDay,"After Dinner",this.props.PatientId)
                             }}
                  />
                  <Condition label='Fasting'
                             image={require('../../images/After-breakfast.png')}
                             onPress={()=>{this.setState({filterCondition:"Fasting"})
                             this.props.getCharts(this.state.filterDay,"Fasting",this.props.PatientId)
                             }}
                  />
                  
		        </View>
		        
		      </Swiper>

           </View>
           <View><Text style={styles.filterByCondStyle}>Chart View</Text></View>
           {this.props.loader===true?null:<View style={styles.swiperStyle}>
              <Chart data={this.props.Charts.vals} tickValues={this.props.Charts.condition===undefined?this.props.Charts.day:this.props.Charts.condition}/>
           </View>}
           <View style={styles.StatisticContainer}>
              <Statistic label='IQR' number={this.props.Charts.iqr}/>
              <Statistic label='Median' number={this.props.Charts.median}/>
              <Statistic label='Hypo' number={this.props.Charts.hypo}/>
              <Statistic label='Hyper' number={this.props.Charts.hyper}/>
           </View>
           <TouchableOpacity style={styles.GoListView} onPress={()=>this.props.GoToListView(this.state.filterDay)}>
              <Text style={{color:'grey',fontSize:16}}>List View</Text>
              <Icon name="ios-arrow-forward" color='grey' size={22} />
           </TouchableOpacity>

          </View>
      </View>
    );
  }
}
const Condition = (props) => {
	return (
       <TouchableOpacity style={[styles.condition,props.clickedStyle]} onPress={props.onPress}>
            <View style={styles.FirstmealStyle}>
                <Image source={props.image} style={styles.ConditionImage} />
            </View>
            <View style={styles.SecondmealStyle}>
	           <Text style={{textAlign:'center',color:'grey'}}>{props.label}</Text>
	        </View>
       </TouchableOpacity>
    );
};
const Statistic = (props) => {
	return (
        <View style={styles.staticItem}>
            <Text style={{color:'#28c5c2',fontSize:18,}}>{props.label}</Text>
            <Text style={{color:'grey',fontSize:16}}>{props.number}</Text>
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
  	swiperStyle:{
         alignSelf:'stretch',
         justifyContent:'center',
         alignItems:'center',
         marginRight:5,
         marginLeft:5 ,
         marginTop:10,
         marginBottom:10,
         padding:5,
         shadowColor: '#ddd',
         shadowOffset: {
              width: 1.5,
              height: 1.5
          },
          shadowOpacity: 1.9,
        
      
  	},
  	condition:{
  		width:100,
  	},
    clickedCondition:{
      backgroundColor:'rgba(184,233,232,0.3)',
      borderBottomColor:'#28c5c2',
      borderBottomWidth:2
    },
    nonClickedCondition:{
      backgroundColor:'transparent',
      //borderBottomColor:'#28c5c2',
    },
  	staticItem:{
  		flex:1,
  		alignItems:'center',
  		justifyContent:'center'
  	},
  	FirstmealStyle:{
  		flex:2,
  		justifyContent:"flex-end",
  		alignItems:"center",
  	},
  	SecondmealStyle:{
  		flex:1,
  		justifyContent:"flex-start",
  		alignItems:"center",
  	},
  	ConditionImage:{
          height:50,
          width:50,
          marginBottom:6
  	},
  	slide: {
  		justifyContent:"center",
  		alignItems:'center',
          height:120,
      	flexDirection:'row',
      	//backgroundColor: '#ddd',
      },
      StatisticContainer:{
      	//backgroundColor:'black',
      	alignSelf:'stretch',
      	flexDirection:'row',
      	padding:10
      },
      GoListView:{
         alignSelf:'stretch',
         height:40,
         flexDirection:'row',
         justifyContent:'space-between',
         marginRight:5,
         marginLeft:5 ,
         marginTop:10,
         marginBottom:10,
         padding:10,
         shadowColor: '#ddd',
         shadowOffset: {
              width: 1.5,
              height: 1.5
          },
          shadowOpacity: 1.9,
          alignItems:'center'
      }
 
}
const mapStateToProps= state =>{
  return{
    language:state.language.language,
    PatientId:state.doctor.PatientId,
    Charts:state.doctor.Charts,
    loader:state.doctor.loader,
  }
}
export default connect(mapStateToProps,{getChartAllCondition,getCharts})(ProgressPage);

