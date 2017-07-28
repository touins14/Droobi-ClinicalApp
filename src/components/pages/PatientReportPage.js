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
	                  <Text style={[styles.oneTabLabel,{color:"#28c5c2"}]}>{strings.progress}</Text>
	                </View>;
	      case '2':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/syringeGrey.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#949799"}]}>{strings.medication}</Text>
	                </View>;
	      case '3':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/medicalGrey.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#949799"}]}>Schedule</Text>
	                </View>;
	        return null;
	    }
	}
	_rendersecondGreen({route}) {
        switch (route.key) {
	      case '1':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/graphGrey.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#949799"}]}>{strings.progress}</Text>
	                </View>;
	      case '2':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/syringeGreen.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#28c5c2"}]}>{strings.medication}</Text>
	                </View>;
	      case '3':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/medicalGrey.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#949799"}]}>Schedule</Text>
	                </View>;
	        return null;
	    }
	}
	_renderthirdGreen({route}) {
        switch (route.key) {
	      case '1':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/graphGrey.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#949799"}]}>{strings.progress}</Text>
	                </View>;
	      case '2':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/syringeGrey.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#949799"}]}>{strings.medication}</Text>
	                </View>;
	      case '3':
	        return  <View style={styles.oneTab}>
	                  <Image source={require('../../images/medicalGreen.png')} style={styles.oneTabImage} />
	                  <Text style={[styles.oneTabLabel,{color:"#28c5c2"}]}>Schedule</Text>
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
			        <ProgressPage GoToListView={(filterday) => {navigate('ProgressListViewPage',{filterDay:filterday})}}/>
		        );
	        case '2':
		        return (
		            <MedicationPage ReportId={`${this.props.navigation.state.params.idReport}`} educatorName={this.props.loader===false?this.props.reportDetail[0].educator.firstName+'  '+this.props.reportDetail[0].educator.lastName:''}/>


		        );
		    case '3':
		        return (
		            <SchedulePage ReportId={`${this.props.navigation.state.params.idReport}`}/>
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
                <Button Style={styles.declineButton} color='#fff' label='Decline' onPress={() => { this.setState({ modalVisible: true, status: false});this.renderPopUp(false)}} />
                {/* <Button Style={styles.declineButton} color='#fff'label='Decline' onPress={()=>{this.props.declineReport(idReport)}}/> */}
                <Button Style={styles.approveButton} color='#fff' label='Approve' onPress={() => { this.setState({ modalVisible: true, status: true});this.renderPopUp(true)}} />
                {/* <Button Style={styles.approveButton} color='#fff'label='Approve' onPress={()=>{this.props.approveReport(idReport)}}/> */}
              </View>
            )

    	}else {
    		if(this.props.loader===true)
                  {return null}
            else

            	if(this.props.reportDetail[0].report.status === 'declined' )
		            	{
		            	  return <Button Style={styles.declineButton} color='#fff'label='Decline' />
		            	}
		        else if(this.props.reportDetail[0].report.status=='accepted' )
		        	   {return<Button Style={styles.approveButton} color='#fff'label='Approve' />}
		        else return null
    	}
    }
    render() {
    	var idReport=`${this.props.navigation.state.params.idReport}`
	    const { goBack } = this.props.navigation;
        const Patient=this.props.patientDetail;
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
			                <View style={styles.SubHeaderDetail}>
			                  {this.props.loader===true?null:
			                  	   <EducatorNoteBloc note={this.props.reportDetail[0].report.noteEd==null?"":this.props.reportDetail[0].report.noteEd}
			                  			             image={require('../../images/profilePhoto.jpg')}
			                  			             name={this.props.reportDetail[0].educator.firstName}
			                  		/>}
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
		                    <Text style={{fontSize:20,color:"#fff"}}>PatientReport</Text>
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
       <View style={styles.DetailBlocStyle}>
           <View style={{flex:2}}><Text style={styles.textDetail}>{props.FirstLabel}</Text></View>
           <View style={{flex:4}}><Text style={styles.textDetail}>{props.SecondLabel}</Text></View>
       </View>
    );
};
const EducatorNoteBloc = (props) => {
	return (
       <View style={styles.EducatorNoteBlocStyle}>
            <View style={styles.noteContainer}>
               <Text style={styles.noteText}>{props.note} </Text>
            </View>
            <View style={styles.noteCreactor}>
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
     flexDirection:'row',
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
    	flexDirection:'row',

    	alignItems:'center',
    },
    textDetail:{
    	fontSize:14,
    	color:'#fff',
    },
    EducatorNoteBlocStyle:{

    	alignSelf:"stretch",
          height:100,
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
    	padding:5
    },
    noteText:{
    	fontSize:14,
    	color:'grey',
    },
    noteCreactor:{
    	padding:5,
    	flexDirection:'row',
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
	  	flex:1,
        alignSelf:'stretch',
	  	flexDirection:"row",
        alignItems:'flex-start'
	},
    oneTabImage:{
	  	height:25,
	  	width:25,
        marginRight:10
	},
    oneTabLabel:{
	  	fontSize:14,
	  	marginTop:5,
	},
}
const mapStateToProps= state =>{
  return{
    language:state.language.language,
    reportList:state.doctor.ListReports,
    patientDetail:state.doctor.PatientDetails,
    reportDetail:state.doctor.ReportDetails,
    loader:state.doctor.loader,
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
