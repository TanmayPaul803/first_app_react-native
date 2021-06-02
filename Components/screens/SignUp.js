import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff96ad',
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff5fd',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  action: {
    flexDirection: 'row',
    // backgroundColor: 'skyblue',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#e3e3e3',
    height: 40,
  },
  textInput: {
    paddingLeft: 10,
    flex: 1,
  },
  button: {
    marginTop: 40,
  },
  signIn: {
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button_text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  signUp: {
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ff96ad',
    fontWeight: 'bold',
  },
});

const SignUp = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };
  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };
  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirmPassword: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirm_SecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ff96ad" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        {/* Email Section */}
        <Text>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {/* PassWord Section */}
        <Text style={{marginTop: 30}}>PassWord</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={{marginTop: 30}}>Confirm PassWord</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Confirm your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            onChangeText={val => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirm_SecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <LinearGradient colors={['#ff96ad', '#bf1363']} style={styles.signIn}>
            <Text style={styles.button_text}>Sign Up</Text>
          </LinearGradient>

          {/* Sign up Button */}
          <TouchableOpacity
            style={styles.signUp}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{fontWeight: 'bold', color: '#bf1363'}}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUp;
