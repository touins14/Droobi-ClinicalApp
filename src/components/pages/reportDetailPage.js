import React, { Component } from 'react';
import { Button } from '../common';
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';


// class ReportDetailPage extends Component {
//
//   render() {
//     const { navigate } = this.props.navigation;
//
//     return (
//       <ParallaxScrollView
//         backgroundColor="blue"
//         contentBackgroundColor="pink"
//         parallaxHeaderHeight={300}
//         renderForeground={() => (
//          <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Hello World!</Text>
//           </View>)}
//       >
//         <View style={{ height: 500 }}>
//            <Text>report Detail page </Text>
//            <Button label="Edit" />
//            <Button label="Go to ListView" onPress={() => navigate('listViewPage')} />
//         </View>
//       </ParallaxScrollView>
//
//     );
//   }
// }

class ReportDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        'Simplicity Matters',
        'Hammock Driven Development',
        'Value of Values',
        'Are We There Yet?',
        'The Language of the System',
        'Design, Composition, and Performance',
        'Clojure core.async',
        'The Functional Database',
        'Deconstructing the Database',
        'Hammock Driven Development',
        'Value of Values'
      ])
    };
  }

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <ListView
        ref="ListView"
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => (
          <View key={rowData} style={styles.row} >
            <Text style={styles.rowText} >
              { rowData }
            </Text>
          </View>
         )}
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}
            headerBackgroundColor="#333"
            stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
            backgroundSpeed={10}

            renderBackground={() => (
              <View key="background">
                {/*<Image source={{uri: 'https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg',
                                width: window.width,
                                height: PARALLAX_HEADER_HEIGHT}}/>*/}
                <View
                  style={{ position: 'absolute',
                              top: 0,
                              width: window.width,
                              backgroundColor: 'rgba(0, 0, 0, 0)',
                              height: PARALLAX_HEADER_HEIGHT }} />
                </View>
            )}

            renderForeground={() => (
              <View key="parallax-header" style={ styles.parallaxHeader }>
                <View style={styles.headerInfoContainer}>
                  <View style={styles.avatarContainer} >
                    <Image
                      style={styles.avatar}
                      source={{
                        uri: 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg',
                        width: AVATAR_SIZE,
                        height: AVATAR_SIZE
                      }}
                    />
                  </View>
                  <View style={styles.tableContainer}>
                    <Text>
                      Talks by Rich Hickey
                    </Text>
                    <Text>
                      CTO of Cognitec, Creator of Clojure
                    </Text>
                  </View>
                </View>
                <View style={styles.headerNoteContainer}>
                  <Text style={styles.headerNote}>
                    this is a long long long long long long long long long long long
                    long long long long long long long long long long long long long Note
                  </Text>
                </View>
              </View>
            )}

            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} >
                  <Icon name="ios-arrow-back" size={30} color="#900" />
                </View>
                <View>
                  <Text style={styles.stickySectionText}>Patient report</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg',
                      width: 60,
                      height: 60
                    }}
                  />
                </View>
              </View>
            )}
          />
        )}
      />
    );
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 80;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28c5c2'
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
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column'
  },
  headerInfoContainer: {
    backgroundColor: '#28c5c2',
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row'
  },
  tableContainer: {
  },
  avatarContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  avatar: {
    borderRadius: AVATAR_SIZE / 2
  },
  headerNoteContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  headerNote: {
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    padding: 5
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
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});

export default ReportDetailPage;
