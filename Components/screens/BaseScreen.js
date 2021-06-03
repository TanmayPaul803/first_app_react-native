import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import Login from './Login';
import SignUp from './SignUp';

const BaseScreen = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#ff96ad',
        },
      }}>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="LoginScreen" component={Login} />
      <AuthStack.Screen name="SignUpScreen" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default BaseScreen;

const styles = StyleSheet.create({});
