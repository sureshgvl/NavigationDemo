/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../bottom/Home';
import Settings from '../bottom/Settings';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Correct Import

const Bottom = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen
                name="HomePage"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={size} />
                    ),
                }} />
            <Bottom.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="setting" color={color} size={size} />
                    ),
                }} />

        </Bottom.Navigator>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
