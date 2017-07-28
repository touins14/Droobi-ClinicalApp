import React, { Component } from 'react';
import { Text, View,Dimensions,Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { connect } from 'react-redux';
import {Container,Button,ProfileElement} from '../common';
import strings from '../common/Translation';
import {getPatientDetails} from "../../actions/DoctorAction";

class ProfilePatientPage extends Component {
  componentWillMount(){
    this.props.getPatientDetails(this.props.PatientId);
  }
  render() {
      const { navigate } = this.props.navigation;
      const Patient=this.props.patientDetail;
    return (
    	<Container>
            <ParallaxScrollView
		            headerBackgroundColor="#fff"
		            stickyHeaderHeight={ 70 }
		            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
		            backgroundSpeed={10}
		            
		            renderBackground={() => (
		              <View key="background">
		                
		                <View style={{position: 'absolute',
		                              top: 0,
		                              width: window.width,
		                              backgroundColor: '#fff',
		                              height: PARALLAX_HEADER_HEIGHT}}/>
		              </View>
		            )}

		            renderForeground={() => (
		              <View key="parallax-header" style={ styles.parallaxHeader }>
		                
			                <View style={styles.headerDetail}>
			                    <View style={styles.firstHeaderDetail}>
			                        <Image  source={require('../../images/profilePhoto.jpg')}style={styles.profilePic}/>
			                        <Text style={styles.name}>{Patient.firstName}</Text>
			                        <Text style={styles.name}>{Patient.lastName}</Text>
			                    </View>
			                    {
                                this.props.LoaderPatientDetails==false?
                                <View style={styles.secondHeaderDetail}>
			                         <DetailBloc FirstLabel='HC#' SecondLabel={Patient.hc}/>
			                         <DetailBloc FirstLabel='Diabetic' SecondLabel={'Type'+Patient.diabetic.type}/>
			                         <DetailBloc FirstLabel='hb1Ac' SecondLabel={Patient.hbA1c.value}/>
			                         <DetailBloc FirstLabel='BMI' SecondLabel={Patient.bmi.value}/>
			                         <DetailBloc FirstLabel='Cholestrol' SecondLabel={Patient.cholesterol.value}/>
			                    </View>:null}
			                    
			                </View>
			                
		                
		              </View>
		            )}>
		          <View style={{marginTop:20}}>
		            <View style={styles.titleStyleContainer}>
		                <Text style={styles.titleStyle}> Care Team</Text>
		            </View>
		            <View style={styles.CareTeamContainer}>
		                <CareTeam firstLabel='Dr Majjed Salim' secondlabel='doctor' image={require('../../images/profilePhoto.jpg')}/>
		                <CareTeam firstLabel='Amira Ibrahim' secondlabel='educator' image={require('../../images/profilePhoto.jpg')}/>
		            </View>
		            <View style={styles.titleStyleContainer}>
		                <Text style={styles.titleStyle}>Medical situation</Text>
		            </View>
		            <ProfileElement 
	                            showFirstIcon={true}
	                            iconOne={require('../../images/graphGreen.png')}
	                            labelOne='Reading History'
	                            icontwo={require('../../images/syringeGreen.png')}
	                            labeltwo='Health plan'
	                            iconthree={require('../../images/careplan.png')}
	                            labelthree='Reports'
	                            title={strings.medical}
	                            goReading={() => navigate('ReadingPatientPage')}
                                goMedical={() => navigate('MedicalPatientPage')}
                                goReports={() => navigate('ReportPatientPage')}
	                            />
		          </View>
                  {this.props.TypeUser=='doctor'?null:<Button label='new report' onPress={() => navigate('AddNewReportPage')}/>}
		    </ParallaxScrollView>
		</Container>
    );
  }
}
const DetailBloc = (props) => {
	return (
       <View style={styles.DetailBlocStyle}>
           <View style={{flex:2}}><Text style={styles.textDetail}>{props.FirstLabel}</Text></View>
           <View style={{flex:4}}><Text style={styles.textDetail}>{props.SecondLabel}</Text></View>
       </View>
    );
};

const CareTeam= (props) => {
	return (
       <View style={styles.CareTeamStyle}>
            <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                <Image  source={props.image}style={styles.CareTeamPic}/>
            </View>
            <View style={{flex:4,justifyContent:'center'}}>
              <Text style={{color:'grey',fontSize:16}}>{props.firstLabel}</Text>
              <Text style={{color:'grey',fontSize:12}}>{props.secondlabel}</Text>
            </View>
       </View>
    );
};
const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 170;
const styles={

    parallaxHeader: {
	    alignItems: 'flex-start',
	    justifyContent:'flex-start',
	    flex:1,
	    flexDirection: 'column',
	    paddingTop: 2,
	    paddingBottom:20,
	    
	
      
	},
    headerDetail:{
    	//backgroundColor:"pink",
     	alignSelf:'stretch',
     	flexDirection:'row',

     	
    },
    SubHeaderDetail:{
       flex:2,
       alignSelf:'stretch',
       backgroundColor:"#fff",
       alignItems:'center',
       justifyContent:'center',

    },
    firstHeaderDetail:{
    	flex:2,
    	alignItems:'center',
    	justifyContent:'flex-start',
    	paddingTop:10,
    },
    secondHeaderDetail:{
    	flex:3,
    	paddingTop:20,
    	flexDirection:"column",
    	alignItems:'flex-start',
    	justifyContent:'flex-start',
    	//backgroundColor:"#ddd"
    },
    profilePic:{
        height:80,
        width:80,
        borderRadius:40,
        marginBottom:7
    },
    CareTeamPic:{
        height:50,
        width:50,
        borderRadius:25,
    },
    DetailBlocStyle:{
    	height:27,
    	alignSelf:'stretch',
    	borderBottomWidth:0.5,
    	borderBottomColor:"#fff",
    	flexDirection:'row',
    	borderBottomColor:'grey',
    	borderBottomWidth:0.5,
    	alignItems:'center',
    	marginRight:10
    },
    textDetail:{
    	fontSize:14,
    	color:'grey',
    },
    
    titleStyleContainer:{
    	alignSelf:'stretch',
    	padding:10
    },
    titleStyle:{
    	fontSize:18,
    	color:'grey'
    },
    CareTeamContainer:{
    	alignSelf:'stretch',
        backgroundColor:'#fff',
        marginLeft:25,
        marginRight:25,
        marginTop:10,
        borderRadius:10,
        padding:10,
        marginBottom:10,
        shadowColor: '#ddd',
        shadowOffset: {
            width: 3,
            height: 3},
		        
        shadowRadius: 10,
        shadowOpacity: 2
    },
    CareTeamStyle:{
    	alignSelf:'stretch',
    	borderBottomColor:'#ddd',
    	borderBottomWidth:1,
    	height:60,
    	flexDirection:'row'
    }
    
}
const mapStateToProps= state =>{
  return{
    PatientId:state.doctor.PatientId,
    patientDetail:state.doctor.PatientDetails,
    LoaderPatientDetails:state.doctor.LoaderPatientDetails,
    TypeUser:state.auth.TypeUser,
  }
}
export default connect(mapStateToProps,{getPatientDetails})(ProfilePatientPage);

