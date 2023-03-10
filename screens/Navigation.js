import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "./HomeActivity";
import PostScreen from "./PostActivity";
import StorageScreen from "./StorageActivity";
import { Image, Text } from "react-native";

function LogoTitle() {
	return (
		<Image
			style={{ width: 50, height: 50 }}
			source={require('../assets/ffff.png')}
		/>
	);
}

function LogoText() {
	return (
		<Image
			style={{
				width: 200,
				resizeMode: 'contain', height: 50
			}}
			source={require('../assets/new-york-times-logo.png')}
		/>
	);
}


const Stack = createNativeStackNavigator();

export const HomeNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="HomePost">
				<Stack.Screen name='HomeScreen' component={TabNavigation} options={{
					title: 'News', headerTitle: (props) => <LogoTitle {...props} />,
					headerRight: (props) => <LogoText {...props} />,
				}} />
				<Stack.Screen name='PostScreen' component={PostScreen} options={{ title: 'Article' }} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const Tab = createMaterialTopTabNavigator();

export const TabNavigation = () => {
	return (
		<Tab.Navigator initialRouteName="Tabs"
			screenOptions={{
				style: { color: 'red' },
			}}>
			<Tab.Screen name='NewsScreen' component={HomeScreen} options={{ title: 'News' }} />
			<Tab.Screen name='StorageScreen' component={StorageScreen} options={{ title: 'Storage' }} />
		</Tab.Navigator>
	)
}