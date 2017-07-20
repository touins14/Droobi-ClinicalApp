import React, { Component } from 'react';
import { Text, View,Animated ,Dimensions,TouchableOpacity,Image} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {Container} from '../common';
import Icon from 'react-native-vector-icons/Ionicons';

class PatientReportPage extends Component {
    constructor(props) {
   	    super()
        this.state =  {
	        heightMax: new Animated.Value(0),
	        opacity: new Animated.Value(0),
        };
    
    }
    componentWillMount(){
	    Animated.parallel([
	           
	            Animated.timing(
	                this.state.heightMax,
	                {
	                    toValue:200,
	                    duration:500
	                    
	                }
	            ).start(),
	            Animated.timing(
	                this.state.opacity,
	                {
	                    toValue: 1,
	                    duration: 2000
	                }
	            ).start(),
	         
	        ])
    }
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
                
              </View>
            )}

            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                
              </View>
            )}

            renderFixedHeader={() => (
              <View key="fixed-header" style={styles.fixedSection}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Icon name='ios-arrow-back-outline' size={20}/></View>
                <View style={{flex:3,alignItems:'center',justifyContent:'center'}}><Text>PatientReport</Text></View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}></View>
              </View>
            )}
        
            >
           <Text>Hellotregsrgfdggdsfgdsgdsgdsgdsghjgdghdfgshdgfhdsgdsgjdhfghdfhdfgdfhgfdgfd</Text>
           <Text>Hellotregsrgfdggdsfgdsgdsgdsgdsghjgdghdfgshdgfhdsgdsgjdhfghdfhdfgdfhgfdgfd</Text>
           <Text>Hellotregsrgfdggdsfgdsgdsgdsgdsghjgdghdfgshdgfhdsgdsgjdhfghdfhdfgdfhgfdgfd</Text>
           <Text>Hellotregsrgfdggdsfgdsgdsgdsgdsghjgdghdfgshdgfhdsgdsgjdhfghdfhdfgdfhgfdgfd</Text>
           <Text>Hellotregsrgfdggdsfgdsgdsgdsgdsghjgdghdfgshdgfhdsgdsgjdhfghdfhdfgdfhgfdgfd</Text>
           <Text>Hellotregsrgfdggdsfgdsgdsgdsgdsghjgdghdfgshdgfhdsgdsgjdhfghdfhdfgdfhgfdgfd</Text>
           <Text>Hellotregsrgfdggdsfgdsgdsgdsgdsghjgdghdfgshdgfhdsgdsgjdhfghdfhdfgdfhgfdgfd</Text>
           <Text>Hellotregsrgfdggdsfgdsgdsgdsgdsghjgdghdfgshdgfhdsgdsgjdhfghdfhdfgdfhgfdgfd</Text>
           <Text>Hellotregsrgfdggdsfgdsgdsgdsgdsghjgdghdfgshdgfhdsgdsgjdhfghdfhdfgdfhgfdgfd</Text>
           <Text>Hellotregsrgfdggdsfgdsgdsgdsgdsghjgdghdfgshdgfhdsgdsgjdhfghdfhdfgdfhgfdgfd</Text>
            <Text>Hellotregsrgfdggdsfgdsgdsgdsgdsghjgdghdfgshdgfhdsgdsgjdhfghdfhdfgdfhgfdgfd</Text>
           <Text>Hellotregsrgfdggdsfgdsgdsgdsgdsghjgdghdfgshdgfhdsgdsgjdhfghdfhdfgdfhgfdgfd</Text>
        </ParallaxScrollView>
      </Container>
    );
  }
}
const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 250;
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
    //backgroundColor:"black",
    flexDirection:'row',

  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  avatar: {
    marginBottom: 10,
    borderRadius: 30
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  
  
}
export default PatientReportPage;
