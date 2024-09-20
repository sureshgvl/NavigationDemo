/* eslint-disable react/no-unstable-nested-components */
import { Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../drawerScreens/HomeScreen';
import Sidebar from '../Sidebar';

const Drawer = createDrawerNavigator();

const MainScreen = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false, // Show header on screens
            drawerActiveTintColor: '#e91e63',
            drawerLabelStyle: { marginLeft: 10, fontSize: 16},
        }} drawerContent={props => <Sidebar {...props}/>}>
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Text style={{ color, fontSize: size }}>🏠</Text>
                    ),
                    headerShown: false,
                }}
            />

        </Drawer.Navigator>
    );
};

export default MainScreen;
