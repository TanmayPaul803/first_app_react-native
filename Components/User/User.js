import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Home from '../screens/MainScreens/Home';
import Profile from '../screens/MainScreens/Profile';
import Bookmarks from '../screens/MainScreens/Bookmarks';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const User = () => {
  const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeStackScreen" component={Home} />
    </HomeStack.Navigator>
  );
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Feed"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Bookmarks}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default User;

const styles = StyleSheet.create({});
