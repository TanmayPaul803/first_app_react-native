import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

//React navigantion Imports
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './Components/screens/DrawerContent';

// screen Imports
import BaseScreen from './Components/screens/BaseScreen';
import User from './Components/User/User';

const App = () => {
  const [loading, isLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {},
    signOut: () => {},
    SignUp: () => {},
  }));

  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 1000);
  }, []);

  const AuthStack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const UserStack = createStackNavigator();
  const User_Aboutstack = createStackNavigator();

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator animating={true} color="#bc2b78" size="large" />
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        {/* -----Stack Navigator-----  */}
        {/* <BaseScreen /> */}
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={User} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;

const styles = StyleSheet.create({});
