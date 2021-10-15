import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from './screens/Home';
import Restaurant from './screens/Restaurant';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';
import OrderCompleted from './screens/OrderCompleted';

const store = configureStore();

export default function RootNavigation() {
	const stack = createStackNavigator();
	const screenOptions = {
		headerShown: false,
	};

	return (
		<ReduxProvider store={store}>
			<NavigationContainer>
				<stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
					<stack.Screen name="Home" component={Home}></stack.Screen>
					<stack.Screen name="Restaurant" component={Restaurant}></stack.Screen>
					<stack.Screen name="OrderCompleted" component={OrderCompleted}></stack.Screen>
				</stack.Navigator>
			</NavigationContainer>
		</ReduxProvider>
	);
}
