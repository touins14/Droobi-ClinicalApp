import React, { Component } from 'react';
import { Text, View,Dimensions,Image,Animated,TouchableOpacity,ScrollView} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { connect } from 'react-redux';
import {Container,Button,ProfileElement} from '../common';
import strings from '../common/Translation';
import {getPatientDetails} from "../../actions/DoctorAction";
import Modal from 'react-native-modal'

class ProfilePatientPage extends Component {
  constructor(props) {
      super();
      this.state = {
        showModal:false
      };
  }
  componentWillMount(){
    this.props.getPatientDetails(this.props.PatientId);
  }
  IsModalVisible(value){
    this.setState({showModal:value})
  }
  renderImageModal(){
    const Patient = this.props.patientDetail;
    return(
      
        <Modal isVisible={this.state.showModal}
               backdropColor='transparent'
               animationIn='fadeIn'
               animationOut='fadeOut'
               animationOutTiming={400}
               

               >
          <TouchableOpacity style={styles.viewStyle}
                            onPress={()=>{this.IsModalVisible(false)}}>
            <Image source={{ uri: 'http://droobi.astrolabs.io/patient_service/public/pictures/'+Patient.picture }} style={styles.GrowPic}/>
            
          </TouchableOpacity>
        </Modal>
     
    )
  }
  render() {

      const { navigate } = this.props.navigation;
      const Patient = this.props.patientDetail;
      const flexDirection = this.props.language === 'AR' ? 'row-reverse' : 'row';
      const alignItems = this.props.language === 'AR' ? 'flex-end': 'flex-start';
      const justifyContent = this.props.language === 'AR' ? 'flex-end': 'flex-start';
      const textAlign=this.props.language === 'AR' ? 'right': 'left';
    return (
    	<Container>
        <View key="parallax-header" style={ styles.parallaxHeader }>
          <View style={[styles.headerDetail,{flexDirection:flexDirection}]}>
			      <View style={styles.firstHeaderDetail}>
			        <TouchableOpacity onPress={()=>{this.IsModalVisible(true)}}>
                <Image source={{ uri: 'http://droobi.astrolabs.io/patient_service/public/pictures/'+Patient.picture }} style={styles.profilePic}/>
              </TouchableOpacity>
                              
			        <Text style={styles.name}>{Patient.firstName}</Text>
			        <Text style={styles.name}>{Patient.lastName}</Text>
			      </View>
			      {
              this.props.LoaderPatientDetails==false?
                <View style={styles.secondHeaderDetail}>
			            <DetailBloc FirstLabel='HC#' SecondLabel={Patient.hc} flexDirection={flexDirection} alignItems={alignItems}/>
			            <DetailBloc FirstLabel='Diabetic' SecondLabel={'Type'+Patient.diabetic.type} flexDirection={flexDirection} alignItems={alignItems}/>
			            <DetailBloc FirstLabel='hb1Ac' SecondLabel={this.props.language=="EN"?Patient.hbA1c.value+' %':' %'+Patient.hbA1c.value} flexDirection={flexDirection} alignItems={alignItems}/>
			            <DetailBloc FirstLabel='BMI' SecondLabel={Patient.bmi.value} flexDirection={flexDirection} alignItems={alignItems}/>
			            <DetailBloc FirstLabel='Cholestrol' SecondLabel={Patient.cholesterol.value} flexDirection={flexDirection} alignItems={alignItems}/>
			          </View>:null}
              {this.renderImageModal()
            }
			    </View>
        </View>
		          
		    <ScrollView >
		      <View style={[styles.titleStyleContainer,{alignItems:alignItems}]}>
		          <Text style={styles.titleStyle}>{strings.careTeam}</Text>
		      </View>
          {this.props.loaderPatientCareTeam===false?
            <View style={styles.CareTeamContainer}>
              <CareTeam firstLabel={this.props.PatientCareTeam.doctor.firstName +' '+this.props.PatientCareTeam.doctor.lastName}
                        secondlabel={strings.doctor}
                        image={{uri:'http://droobi.astrolabs.io/medication_service/public/pictures/doctors/'+this.props.PatientCareTeam.doctor.picture}}
                        flexDirection={flexDirection}
                        alignItems={alignItems}/>

              <CareTeam firstLabel={this.props.PatientCareTeam.educator.firstName +' '+this.props.PatientCareTeam.educator.lastName}
                        secondlabel={strings.educator}
                        image={{uri:'http://droobi.astrolabs.io/medication_service/public/pictures/educators/'+this.props.PatientCareTeam.educator.picture}}
                        flexDirection={flexDirection}
                        alignItems={alignItems}/>
            </View>:null
          }
		      <View style={[styles.titleStyleContainer,{alignItems:alignItems}]}>
		        <Text style={styles.titleStyle}>{strings.medicalSituation}</Text>
		      </View>
		      <ProfileElement
	          showFirstIcon={true}
	          iconOne={require('../../images/graphGreen.png')}
	          labelOne={strings.readingHistory}
	          icontwo={require('../../images/syringeGreen.png')}
	          labeltwo={strings.healthPlan}
	          iconthree={require('../../images/careplan.png')}
	          labelthree={strings.reports}
	          title={strings.medical}
	          goReading={() => navigate('ReadingPatientPage',{ReadingPatientPage:strings.readingHistory})}
            goMedical={() => navigate('MedicalPatientPage',{MedicalPatientPage:strings.healthPlan})}
            goReports={() => navigate('ReportPatientPage',{ReportPatientPage:strings.reports})}
            language={this.props.language}
	        />
		    </ScrollView>
          {this.props.TypeUser=='doctor'?null:
            <Button 
              Style={styles.newReportButton}
              color='#fff'
              label={strings.newReport}
              onPress={() => navigate('AddNewReportPage',{newReportPage:strings.newReport})}/>}
		</Container>
    );
  }
}
const DetailBloc = (props) => {
	return (
       <View style={[styles.DetailBlocStyle,{flexDirection:props.flexDirection}]}>
           <View style={{flex:2,alignItems:props.alignItems}}><Text style={styles.textDetail}>{props.FirstLabel}</Text></View>
           <View style={{flex:4,alignItems:props.alignItems}}><Text style={styles.textDetail}>{props.SecondLabel}</Text></View>
       </View>
    );
};

const CareTeam= (props) => {
	return (
       <View style={[styles.CareTeamStyle,{flexDirection:props.flexDirection}]}>
            <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                <Image  source={props.image}style={styles.CareTeamPic}/>
            </View>
            <View style={{flex:4,justifyContent:'center',alignItems:props.alignItems,paddingLeft:10,paddingRight:10}}>
              <Text style={{color:'grey',fontSize:16}}>{props.firstLabel}</Text>
              <Text style={{color:'grey',fontSize:12}}>{props.secondlabel}</Text>
            </View>
       </View>
    );
};
const window = Dimensions.get('window');
const styles={

    parallaxHeader: {
	    alignItems: 'flex-start',
	    justifyContent:'flex-start',
	    flexDirection: 'column',
	    
	    
      backgroundColor:'black'
    },
    headerDetail: {
    	backgroundColor:"pink",
     	alignSelf: 'stretch',
      paddingRight: 8,
      backgroundColor: '#fff',
      shadowColor: 'rgba(162, 162, 162, 0.50)',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 2,
      shadowRadius: 2,

    },
    SubHeaderDetail:{
       flex:2,
       alignSelf:'stretch',
       backgroundColor:"#fff",
       alignItems:'center',
       justifyContent:'center',

    },
    firstHeaderDetail:{
    	flex:1.5,
    	alignItems:'center',
    	justifyContent:'center',
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
    GrowPic:{
        height:150,
        width:150,
        borderRadius:75,
        
    },
    CareTeamPic:{
        height:50,
        width:50,
        borderRadius:25,
    },
    DetailBlocStyle:{
    	height:27,
    	alignSelf:'stretch',
    	borderBottomColor:'#dcdcdc',
    	borderBottomWidth:0.5,
    	alignItems:'center',

    	
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
        paddingLeft:12,
        paddingRight:12,
        marginBottom:10,
        shadowColor: 'rgba(162, 162, 162, 0.50)',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,

    },
    CareTeamStyle:{
    	alignSelf:'stretch',
    	borderBottomColor:'#ddd',
    	borderBottomWidth:1,
    	height:60,
    	
    },
    newReportButton:{
        alignSelf:'stretch',
        backgroundColor:"rgb(40, 197, 194)",
        marginLeft:40,
        marginRight:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
 
     viewStyle:{
        position:'absolute',
        top:50,
        left:-20,
        right:-20,
        height:165,
        backgroundColor:"#fff",
        alignItems:'center',
        justifyContent:'center',
        
     },
    

}
const mapStateToProps= state =>{
  return{
    language:state.language.language,
    PatientId:state.doctor.PatientId,
    patientDetail:state.doctor.PatientDetails,
    LoaderPatientDetails:state.doctor.LoaderPatientDetails,
    TypeUser:state.auth.TypeUser,
    PatientCareTeam:state.doctor.PatientCareTeam,
    loaderPatientCareTeam:state.doctor.loaderPatientCareTeam
  }
}
export default connect(mapStateToProps,{getPatientDetails})(ProfilePatientPage);
