import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './Components/screens/SplashScreen';
import Login from './Components/screens/Login';
import SignUp from './Components/screens/SignUp';

const App = () => {
  const AuthStack = createStackNavigator();
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
        <AuthStack.Screen name="LoginScreen" component={Login} />
        <AuthStack.Screen name="SignUpScreen" component={SignUp} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
