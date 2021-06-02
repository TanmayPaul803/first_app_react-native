import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
  const {height} = Dimensions.get('screen');
  const height_logo = height * 0.28;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff96ad',
      flexDirection: 'column',
    },
    header: {
      flex: 2,

      alignItems: 'center',
      justifyContent: 'center',
    },
    footer: {
      flex: 1,
      backgroundColor: '#fff5fd',

      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 30,
      paddingVertical: 50,
    },
    logo: {
      width: height_logo,
      height: height_logo,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#022e57',
    },
    text: {
      fontSize: 13,
      color: '#778899',
    },
    button: {
      height: 40,
      width: 130,
      backgroundColor: '#000',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
      marginTop: 20,
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../Assets/Instagram_Logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        duraton="1500">
        <Text style={styles.title}>Stay connected with everyone!</Text>

        <Text style={styles.text}>Sign in with account</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <LinearGradient colors={['#bf1363', '#ff96ad']} style={styles.button}>
            <Text style={{color: '#fff'}}>Get Started</Text>
            <MaterialIcons name="navigate-next" color="#fff" size={20} />
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;
