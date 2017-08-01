import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';


import reducers from './reducers';
import SignInPage from './components/pages/SignInPage';
import ReportsPage from './components/pages/ReportsPage';
import PatientsPage from './components/pages/PatientsPage';
import ChatPage from './components/pages/ChatPage';
import PatientReportPage from './components/pages/PatientReportPage';
import ProgressListViewPage from './components/pages/ProgressListViewPage';
import ProfilePatientPage from './components/pages/ProfilePatientPage';
import ReportPatientPage from './components/pages/ReportPatientPage';
import MedicalPatientPage from './components/pages/MedicalPatientPage';
import ReadingPatientPage from './components/pages/ReadingPatientPage';
import testPage from './components/pages/testPage';
import AddNewReportPage from './components/pages/AddNewReportPage';
import strings from './components/common/Translation';

export const tabsNavigation = TabNavigator({
	reports: {
		screen: ReportsPage,
		navigationOptions: ({navigation}) => ({
			title: `${navigation.state.params.reportsTitle}`,
			headerTintColor: '#fff',
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={require('./images/medical-grey.png')}
					style={{ height: 30, width: 30, tintColor: tintColor }}
				/>
			),
			headerStyle: { backgroundColor: '#28c5c2' }
		 }),
		

	},
	patients: {
		screen: PatientsPage,
		navigationOptions: ({navigation}) => ({
			title: `${navigation.state.params.PatientsPageTitle}`,
			headerTintColor: '#fff',
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={require('./images/team.png')}
					style={{ height: 30, width: 30, tintColor: tintColor }}
				/>
			),
			headerStyle: { backgroundColor: '#28c5c2' }
		}),
		gesturesEnabled:false,
        headerBackTitle:null,
	},
	chat: {
		screen: ChatPage,

		navigationOptions: ({navigation}) => ({
			title: `${navigation.state.params.ChatPageTitle}`,
			headerTintColor: '#fff',
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={require('./images/chat-grey.png')}
					style={{ height: 30, width: 30, tintColor: tintColor }}
				/>
			),
			headerStyle: { backgroundColor: '#28c5c2' }
		}),
		gesturesEnabled:false,
        headerBackTitle:null,
	}
},
{
	initialRouteName: 'reports',
	animationEnabled: true,
	swipeEnabled: false,
	tabBarOptions: {
		tabStyle: {
			width: 100,
		},
		style: {
			backgroundColor: '#fff',
		},

		showIcon: true,
		showLabel: false,
		activeTintColor: '#28c5c2',
		inactiveTintColor: 'grey'
    }

},


);

const Navigator = StackNavigator(
	{
		SignInPage: { screen: SignInPage },
		tabsPage: { 
			screen: tabsNavigation,
			navigationOptions: {
				gesturesEnabled:false,
	            headerBackTitle:null,
	            headerLeft:null,
	        }
		 },
		PatientReportPage: {
			screen: PatientReportPage,
			navigationOptions: {
				header: null
			}
		},
		ProgressListViewPage: {
			screen: ProgressListViewPage,
			navigationOptions: ({navigation}) => ({
				title: `${navigation.state.params.ListViewTitle}`,
			    headerTintColor: '#fff',
				gesturesEnabled:false,
	            headerBackTitle:null,
	            headerStyle: { backgroundColor: '#28c5c2' }
			})
		},
		ProfilePatientPage: {
			screen: ProfilePatientPage,
			navigationOptions:({navigation}) => ({
				title: `${navigation.state.params.TitleProfilePage}`,
			    headerTintColor: '#fff',
				gesturesEnabled:false,
	            headerBackTitle:null,
	            headerStyle: { backgroundColor: '#28c5c2' }
	        })
		},
		
		ReportPatientPage: {
			screen: ReportPatientPage,
			navigationOptions:({navigation}) => ({
				title: `${navigation.state.params.ReportPatientPage}`,
			    headerTintColor: '#fff',
				gesturesEnabled:false,
	            headerBackTitle:null,
	            headerStyle: { backgroundColor: '#28c5c2' }
			}),
		},
		MedicalPatientPage: {
			screen: MedicalPatientPage,
			navigationOptions:({navigation}) => ({
				title: `${navigation.state.params.MedicalPatientPage}`,
			    headerTintColor: '#fff',
				gesturesEnabled:false,
	            headerBackTitle:null,
	            headerStyle: { backgroundColor: '#28c5c2' }
			}),
		},
		ReadingPatientPage: {
			screen: ReadingPatientPage,
			navigationOptions:({navigation}) => ({
				title: `${navigation.state.params.ReadingPatientPage}`,
			    headerTintColor: '#fff',
				gesturesEnabled:false,
	            headerBackTitle:null,
	            headerStyle: { backgroundColor: '#28c5c2' }
			}),
		},
		AddNewReportPage: {
			screen: AddNewReportPage,
			navigationOptions:({navigation}) => ({
				title: `${navigation.state.params.newReportPage}`,
			    headerTintColor: '#fff',
				gesturesEnabled:false,
	            headerBackTitle:null,
	            headerStyle: { backgroundColor: '#28c5c2' }
			}),
		},
		testPage: {
			screen: testPage,
			navigationOptions: {
				title: 'test',
			    headerTintColor: '#fff',
				gesturesEnabled:false,
	            headerBackTitle:null,
	            headerStyle: { backgroundColor: '#28c5c2' }
			}
		}
	},
    {
			initialRouteName: 'SignInPage',
			cardStyle: {
				shadowOpacity: 0.5,
			},
    },
    {
        transitions: null
	}
);

class App extends Component {
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Navigator />
			</Provider>
		);
	}
}

export default App;
