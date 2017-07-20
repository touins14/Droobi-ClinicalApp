import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';


import reducers from './reducers';
import SignInPage from './components/pages/SignInPage';
import ReportsPage from './components/pages/ReportsPage';
import PatientsPage from './components/pages/PatientsPage';
import ChatPage from './components/pages/ChatPage';
import ReportDetailPage from './components/pages/reportDetailPage';
import ListViewPage from './components/pages/ListViewPage';
import configureStore from './configureStore';


export const tabsNavigation = TabNavigator({
	reports: {
		screen: ReportsPage,
		navigationOptions: {
			title: 'reports',
			headerStyle: { backgroundColor: '#28c5c2' }
		}
	},
	patients: {
		screen: PatientsPage,
		navigationOptions: {
			title: 'patients',
			headerStyle: { backgroundColor: '#28c5c2' }
		}
	},
	chat: {
		screen: ChatPage,
		navigationOptions: {
			title: 'chat',
			headerStyle: { backgroundColor: '#28c5c2' }
		}
	}
},
{
	initialRouteName: 'reports',
	animationEnabled: true,
	swipeEnabled: true
}
);

const Navigator = StackNavigator(
	{
		SignInPage: { screen: SignInPage },
		tabsPage: { screen: tabsNavigation },
		reportDetailPage: { screen: ReportDetailPage,
			navigationOptions: {
				header: null
			}
		},
		listViewPage: { screen: ListViewPage },
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

const store = configureStore();
class App extends Component {
	render() {
		// const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Navigator />
			</Provider>
		);
	}
}

export default App;
