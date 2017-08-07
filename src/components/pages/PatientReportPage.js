import React, { Component } from 'react';
import { Text, View,Animated ,Dimensions,TouchableOpacity,Image} from 'react-native';
import { connect } from 'react-redux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import strings from '../common/Translation';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import ProgressPage from './ProgressPage';
import MedicationPage from './MedicationPage';
import SchedulePage from './SchedulePage';
import { Container, Button, PopUp } from '../common';
import { getReportsList, getPatientDetails, getReportDetails, declineReport, approveReport } from '../../actions/DoctorAction';

class PatientReportPage extends Component {
    constructor(props) {
      super();
      this.state = {
        index: 0,
        modalVisible: false,
        status: null,
        noteValue: null,
        routes: [
          { key: '1' },
          { key: '2' },
          { key: '3' }
        ],
        };
    }
    componentWillMount() {
      var idPatient = `${this.props.navigation.state.params.idPatient}`
      var idReport = `${this.props.navigation.state.params.idReport}`
      this.props.getPatientDetails(idPatient);
      this.props.getReportDetails(idReport);
    }
    _handleChangeTab (index){
      this.setState({ index });
    }
    _renderFirstGreen({ route }) {
        switch (route.key) {
	      case '1':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/graphGreen.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#28c5c2"}]}>{strings.reading}</Text>
	                </View>;
	      case '2':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/syringeGrey.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#949799"}]}>{strings.medication}</Text>
	                </View>;
	      case '3':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/medicalGrey.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#949799"}]}>{strings.monitoring}</Text>
	                </View>;
	        return null;
	    }
	}
	_rendersecondGreen({route}) {
        switch (route.key) {
	      case '1':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/graphGrey.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#949799"}]}>{strings.reading}</Text>
	                </View>;
	      case '2':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/syringeGreen.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#28c5c2"}]}>{strings.medication}</Text>
	                </View>;
	      case '3':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/medicalGrey.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#949799"}]}>{strings.monitoring}</Text>
	                </View>;
	        return null;
	    }
	}
	_renderthirdGreen({route}) {
        switch (route.key) {
	      case '1':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/graphGrey.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#949799"}]}>{strings.reading}</Text>
	                </View>;
	      case '2':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/syringeGrey.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#949799"}]}>{strings.medication}</Text>
	                </View>;
	      case '3':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/medicalGreen.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#28c5c2"}]}>{strings.monitoring}</Text>
	                </View>;
	        return null;
	    }
	}
	_renderHeader (props){
		let renderIcon;
		if (this.state.index===0){
			renderIcon=this._renderFirstGreen
		}else if (this.state.index===1){
			renderIcon=this._rendersecondGreen
		}else if (this.state.index===2){
			renderIcon=this._renderthirdGreen
		}
	    return (
	      <TabBar
	        {...props}

	        style={{backgroundColor:"transparent"}}
	        indicatorStyle={{backgroundColor:'rgba(40,212,201,1)'}}
	        renderIcon={renderIcon}
	        labelStyle={{color:"grey"}}

	      />
	    );
    }
    _renderScene ({ route }) {
    	let alignItems=this.props.language==='AR'?"flex-end":"flex-start"
        const { navigate } = this.props.navigation;
	    switch (route.key) {
	        case '1':
		        return (
			        <ProgressPage GoToListView={(filterday) => {navigate('ProgressListViewPage',{filterDay:filterday,ListViewTitle:strings.listView})}}/>
		        );
	        case '2':
		        return (
		            <MedicationPage ReportId={`${this.props.navigation.state.params.idReport}`} educatorName={this.props.loaderReportDetail===false?this.props.reportDetail[0].educator.firstName+'  '+this.props.reportDetail[0].educator.lastName:''} suggestedMedication={true}/>


		        );
		    case '3':
		        return (
		            <SchedulePage ReportId={`${this.props.navigation.state.params.idReport}`} suggestedMonitoring={true}/>
		        );
	        default:
	            return null;
	    }
    }
    renderPopUp(value) {
      const idReport = `${this.props.navigation.state.params.idReport}`;
      if (this.state.modalVisible) {
        if (this.state.status ){
          return (
             <PopUp
               visible={this.state.modalVisible}
               title='You are about to approve the report'
               subTitle='You can leave a comment before approuving'
               onChangeValue={(value) => { this.setState({ noteValue: value }); }}
               onAccept={(note) => { this.setState({ modalVisible: false }); this.props.approveReport(idReport, this.state.noteValue); }}
               onRefuse={(note) => { this.setState({ modalVisible: false }); }}
               defaultValue='comment here'
             />
           );
        } else {
          return (
            <PopUp
              visible={this.state.modalVisible}
              title='You are about to decline the report'
              subTitle='You can leave a comment before declining'
              onChangeValue={(value) => { this.setState({ noteValue: value }); }}
              onAccept={(note) => { this.setState({ modalVisible: false }); this.props.declineReport(idReport, this.state.noteValue); }}
              onRefuse={(note) => { this.setState({ modalVisible: false }); }}
              defaultValue='comment here'
            />
          );
        }

      }
      return null
    }

    renderButtons() {
      if (this.props.TypeUser == 'doctor') {
        if (this.props.loader === true)
          { return null }
    		else if (this.props.reportDetail[0].report.status == 'declined'|| this.props.reportDetail[0].report.status === 'accepted')
          {
            return null
          }
		        else return(
              <View style={styles.buttonsConfirmationContainer}>
                <Button Style={styles.declineButton} color='#fff' label={strings.decline} onPress={() => { this.setState({ modalVisible: true, status: false});this.renderPopUp(false)}} />              
                <Button Style={styles.approveButton} color='#fff' label={strings.approve} onPress={() => { this.setState({ modalVisible: true, status: true});this.renderPopUp(true)}} />                
              </View>
            )

    	}else {
    		if(this.props.loaderReportDetail===true)
                  {return null}
            else

            	if(this.props.reportDetail[0].report.status === 'declined' )
		            	{
		            	  return <Button Style={styles.declinedButton} color='rgb(227, 80, 108)' label={strings.reportDeclined} />
		            	}
		        else if(this.props.reportDetail[0].report.status=='accepted' )
		        	   {return<Button Style={styles.approvedButton} color='rgb(40, 197, 194)' label={strings.reportApproved} />}
		        else return null
    	}
    }
    render() {
    	var idReport=`${this.props.navigation.state.params.idReport}`
	    const { goBack } = this.props.navigation;
        const Patient=this.props.patientDetail;
        const flexDirection = this.props.language === 'AR' ? 'row-reverse' : 'row';
        const alignItems = this.props.language === 'AR' ? 'flex-end': 'flex-start';
        const textAlign=this.props.language === 'AR' ? 'right': 'left';
	    return (
	        <Container>
		        <ParallaxScrollView
		            headerBackgroundColor="#fff"
		            stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
		            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
		            backgroundSpeed={10}

		            renderBackground={() => (
		              <View key="background">

		                <View style={{position: 'absolute',
		                              top: 0,
		                              width: window.width,
		                              backgroundColor: '#28c5c2',
		                              height: PARALLAX_HEADER_HEIGHT}}/>
		              </View>
		            )}

		            renderForeground={() => (
		              <View key="parallax-header" style={ styles.parallaxHeader }>

			                <View style={[styles.headerDetail,{flexDirection:flexDirection}]}>
			                    <View style={styles.firstHeaderDetail}>
			                        <Image  source={{uri:'http://droobi.astrolabs.io/patient_service/public/pictures/'+Patient.picture}} style={styles.profilePic}/>
			                        <Text style={styles.name}>{Patient.firstName}</Text>
			                        <Text style={styles.name}>{Patient.lastName}</Text>
			                    </View>
			                    {
                                this.props.LoaderPatientDetails==false?
			                    <View style={styles.secondHeaderDetail}>
			                         <DetailBloc FirstLabel='HC#' SecondLabel={Patient.hc} flexDirection={flexDirection} alignItems={alignItems}/>
			                         <DetailBloc FirstLabel='Diabetic' SecondLabel={'Type'+Patient.diabetic.type} flexDirection={flexDirection} alignItems={alignItems}/>
			                         <DetailBloc FirstLabel='hb1Ac' SecondLabel={Patient.hbA1c.value} flexDirection={flexDirection} alignItems={alignItems}/>
			                         <DetailBloc FirstLabel='BMI' SecondLabel={Patient.bmi.value} flexDirection={flexDirection} alignItems={alignItems}/>
			                         <DetailBloc FirstLabel='Cholestrol' SecondLabel={Patient.cholesterol.value} flexDirection={flexDirection} alignItems={alignItems}/>
			                    </View>:null}
			                </View>
			                <View style={styles.SubHeaderDetail}>
			                  {this.props.loaderReportDetail===true?null:

			                  	   this.props.TypeUser==='doctor'?
			                  	   	    <EducatorNoteBloc note={this.props.reportDetail[0].report.noteEd==null?"":this.props.reportDetail[0].report.noteEd}
			                  			                  image={{uri:'http://droobi.astrolabs.io/medication_service/public/pictures/educators/'+this.props.reportDetail[0].educator.picture}}
			                  			                  name={this.props.reportDetail[0].educator.firstName+' '+this.props.reportDetail[0].educator.lastName}
			                  			                  flexDirection={flexDirection}
			                  			                  textAlign={textAlign}
			                  			                  />:

   										<EducatorNoteBloc note={this.props.reportDetail[0].report.noteDr==null?"":this.props.reportDetail[0].report.noteDr}
			                  			                  image={{uri:'http://droobi.astrolabs.io/medication_service/public/pictures/doctors/'+this.props.reportDetail[0].doctor.picture}}
			                  			                  name={this.props.reportDetail[0].doctor.firstName+' '+this.props.reportDetail[0].doctor.lastName}
			                  			                  flexDirection={flexDirection}
			                  			                  textAlign={textAlign}/>
			                  	    
			                  	   }
			                  	  
			                  		
			                </View>

		              </View>
		          )}

		            renderStickyHeader={() => (
		              <View key="sticky-header" style={styles.stickySection}>
		              </View>
		            )}

		            renderFixedHeader={() => (
		              <View key="fixed-header" style={styles.fixedSection}>
		                <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}
		                                  onPress={() => goBack()}
		                >
		                   <Icon name='ios-arrow-back-outline' size={30} color="#fff"/>
		                </TouchableOpacity>
		                <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
		                    <Text style={{fontSize:20,color:"#fff"}}>{strings.patientReport}</Text>
		                </View>
		                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}></View>

		              </View>
		            )}

		            >

		            {this.renderButtons()}
		            <View style={{alignSelf:"stretch"}}>
		            <TabViewAnimated
	                      style={{flex:1,marginLeft:10,marginRight:10}}
	                      navigationState={this.state}
	                      renderScene={this._renderScene.bind(this)}
	                      onRequestChangeTab={this._handleChangeTab.bind(this)}
	                      renderHeader={this._renderHeader.bind(this)}
	                    />
	               </View>
                 { this.renderPopUp() }
		        </ParallaxScrollView>
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
const EducatorNoteBloc = (props) => {
	return (
       <View style={styles.EducatorNoteBlocStyle}>
            <View style={styles.noteContainer}>
               <Text style={[styles.noteText,{textAlign:props.textAlign}]}>{props.note} </Text>
            </View>
            <View style={[styles.noteCreactor,{flexDirection:props.flexDirection}]}>
                <Image  source={props.image}style={styles.noteCreatorImage}/>
                <Text   style={styles.nameNoteCreator}>{props.name}</Text>
            </View>
       </View>
    );
};

const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 400;
const STICKY_HEADER_HEIGHT = 70;
const styles={
	container: {
	    flex: 1,
	    backgroundColor: 'black'
	},
	background: {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    width: window.width,
	    height: PARALLAX_HEADER_HEIGHT
	},
	stickySection: {
	    height: STICKY_HEADER_HEIGHT,
	    alignSelf:"stretch",
	    justifyContent: 'center',
	    backgroundColor:'#28c5c2'
	},
	stickySectionText: {
	    color: 'white',
	    fontSize: 20,
	    margin: 10
	},
    fixedSection: {

	    position: 'absolute',
	    alignSelf:'stretch',
	    top:10,
	    left:0,
	    right:0,
	    height:STICKY_HEADER_HEIGHT,
	    //backgroundColor:"yellow",
	    flexDirection:'row',
	},
	parallaxHeader: {
	    alignItems: 'flex-start',
	    justifyContent:'flex-start',
	    flex:1,
	    flexDirection: 'column',
	    paddingTop: 80
	},
    headerDetail:{
     //backgroundColor:"#000",
     alignSelf:'stretch',
     
     flex:3,
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
    	flexDirection:"column",
    	alignItems:'flex-start',
    	justifyContent:'flex-start',
    	///backgroundColor:"#ddd"
    },
    profilePic:{
        height:80,
        width:80,
        borderRadius:40,
        marginBottom:7
    },
    name:{
    	fontSize:16,
    	color:'#fff'
    },
    DetailBlocStyle:{
    	height:27,
    	alignSelf:'stretch',
    	borderBottomWidth:0.5,
    	borderBottomColor:"#fff",
    	alignItems:'center',
    	marginRight:10,
    	marginLeft:10
    },
    textDetail:{
    	fontSize:14,
    	color:'#fff',
    },
    EducatorNoteBlocStyle:{

    	alignSelf:"stretch",
          marginRight:15,
          marginLeft:15 ,
          marginTop:10,
          padding:5,
          shadowColor: '#ddd',
          shadowOffset: {
               width: 3,
               height: 3
          },
          shadowOpacity: 1.9
    },
    noteContainer:{
    	padding:5,

    },
    noteText:{
    	fontSize:14,
    	color:'grey',

    },
    noteCreactor:{
    	//backgroundColor:'pink',
    	padding:5,
    	
    	alignItems:'center'
    },
    noteCreatorImage:{
    	height:30,
    	width:30,
    	borderRadius:15,
    },
    nameNoteCreator:{
    	fontSize:14,
    	color:"grey",
    	marginRight:10,
    	marginLeft:10
    },
    buttonsConfirmationContainer:{
    	alignSelf:'stretch',
    	flexDirection:'row',
    },
    declineButton:{
        flex:1,
        backgroundColor:"rgb(227, 80, 108)",
        margin:10,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    approveButton:{
        flex:1,
        backgroundColor:'rgb(40, 197, 194)',
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    oneTab:{
	  	
        
	  	flexDirection:"row",
        alignItems:'flex-start'
	},
    oneTabImage:{
	  	height:25,
	  	width:25,
        marginRight:5,
        marginLeft:5
	},
    oneTabLabel:{
	  	fontSize:14,
	  	marginTop:5,
	},
	declinedButton:{
		alignSelf:'stretch',
		height:40,
        borderColor:"rgb(227, 80, 108)",
        borderWidth:1,
        marginRight:20,
        marginLeft:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
	},
	approvedButton:{

		alignSelf:'stretch',
		height:40,
        borderColor:'rgb(40, 197, 194)',
        borderWidth:1,
        marginRight:20,
        marginLeft:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
	}
}
const mapStateToProps= state =>{
  return{
    language:state.language.language,
    reportList:state.doctor.ListReports,
    patientDetail:state.doctor.PatientDetails,
    reportDetail:state.doctor.ReportDetails,
    loader:state.doctor.loader,
    loaderReportDetail:state.doctor.loaderReportDetail,
    LoaderPatientDetails:state.doctor.LoaderPatientDetails,
    TypeUser:state.auth.TypeUser,
  }
}
export default connect(mapStateToProps,{getReportsList,
	                                   getPatientDetails,
	                                   getReportDetails,
	                                   declineReport,
	                                   approveReport
	                               })(PatientReportPage);
