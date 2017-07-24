import React, { Component } from 'react';
import { Text, View,Animated ,Dimensions,TouchableOpacity,Image} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {Container,Button} from '../common';
import Icon from 'react-native-vector-icons/Ionicons';
import strings from '../common/Translation';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import ProgressPage from './ProgressPage'

class PatientReportPage extends Component {
    constructor(props) {
   	    super()
        this.state =  {
	        index: 0,
	          routes: [
	            { key: '1' },
	            { key: '2'},
	            { key: '3'}
	          ],
        };
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
        
	    switch (route.key) {
	        case '1':
		        return (
			        <ProgressPage/>
		        );
	        case '2':
		        return (
		            <View  >
			            <Text>two</Text>
			        </View>
		        );
		    case '3':
		        return (
		            <View  >
			            <Text>three</Text>
			        </View>
		        );
	        default:
	            return null;
	    }
    };
    render() {
	    const { navigate } = this.props.navigation;

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
		                        <Text style={styles.name}>Mohamed Ahmed</Text>
		                        <Text style={styles.name}>abdelkarim</Text>
		                    </View>
		                    <View style={styles.secondHeaderDetail}>
		                         <DetailBloc FirstLabel='HC#' SecondLabel='HC8635723653745743'/>
		                         <DetailBloc FirstLabel='Diabetic' SecondLabel='Type 2,since 2017'/>
		                         <DetailBloc FirstLabel='hb1Ac' SecondLabel='10%'/>
		                         <DetailBloc FirstLabel='BMI' SecondLabel='50%'/>
		                         <DetailBloc FirstLabel='Cholestrol' SecondLabel='20KG'/>
		                    </View>
		                </View>
		                <View style={styles.SubHeaderDetail}>
		                  <EducatorNoteBloc note='this Report was created to change the medication of this patient'
		                                    image={require('../../images/profilePhoto.jpg')}
		                                    name='Mohamed salim'
		                  />
		                </View>
	                
	              </View>
	        )}

	            renderStickyHeader={() => (
	              <View key="sticky-header" style={styles.stickySection}>
	                
	              </View>
	            )}

	            renderFixedHeader={() => (
	              <View key="fixed-header" style={styles.fixedSection}>
	                <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}>
	                   <Icon name='ios-arrow-back-outline' size={30} color="#fff"/>
	                </TouchableOpacity>
	                <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
	                    <Text style={{fontSize:20,color:"#fff"}}>PatientReport</Text>
	                </View>
	                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}></View>
	               
	              </View>
	            )}
	        
	            >
	            <View style={styles.buttonsConfirmationContainer}>
	                <Button Style={styles.declineButton} color='#fff'label='Decline'/>
	                <Button Style={styles.approveButton} color='#fff'label='Approve'/>
	            </View>
	            <View style={{alignSelf:"stretch"}}>
	            <TabViewAnimated
                      style={{flex:1,marginLeft:10,marginRight:10}}
                      navigationState={this.state}
                      renderScene={this._renderScene.bind(this)}
                      onRequestChangeTab={this._handleChangeTab.bind(this)} 
                      renderHeader={this._renderHeader.bind(this)}
                    />
                </View>
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
export default PatientReportPage;
