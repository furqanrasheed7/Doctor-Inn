import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet, Keyboard } from "react-native";
import { Button } from "react-native-elements";
import styles from "./SignupStyle";

const appId = "1047121222092614";

export default function LoginScreen({ navigation }) {
  const onLoginPress = () => {
    navigation.navigate('Home');
  };

  const [isHovered, setIsHovered] = useState(false);

  const onFbLoginPress = async () => {
    // Facebook login functionality
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <TouchableOpacity
              activeOpacity={1}
              onPressIn={() => setIsHovered(true)}
              onPressOut={() => setIsHovered(false)}
            >
              <View style={styles.loginFormView}>
                <Text style={styles.logoText}>The</Text>
                <Text style={styles.logoColor}> Doctors Inn</Text>
                <View style={styles.inputContainer}>
                  <Image style={styles.inputIcon} source={require('./fname.png')} />
                  <TextInput
                    placeholder="Enter your First Name"
                    placeholderColor="#c4c3cb"
                    style={styles.loginFormTextInput}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Image style={styles.inputIcon} source={require('./lname.png')} />
                  <TextInput
                    placeholder="Enter your Last Name"
                    placeholderColor="#c4c3cb"
                    style={styles.loginFormTextInput}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Image style={styles.inputIcon} source={require('./email.png')} />
                  <TextInput
                    placeholder="Enter your Email Address"
                    placeholderColor="#c4c3cb"
                    style={styles.loginFormTextInput}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Image style={styles.inputIcon} source={require('./phone.jpg')} />
                  <TextInput
                    placeholder="Enter your Phone Number"
                    placeholderColor="#c4c3cb"
                    style={styles.loginFormTextInput}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Image style={styles.inputIcon} source={require('./password.png')} />
                  <TextInput
                    placeholder="Password"
//                    placeholderColor="#c4c3cb"
                    style={styles.loginFormTextInput}
                    secureTextEntry={true}
                  />
                </View>
                <Button
                  buttonStyle={styles.loginButton}
                  onPress={() => onLoginPress()}
                  title="Sign Up"
                />
                <Button
                  containerStyle={styles.fbLoginButton}
                  type="clear"
                  onPress={() => onFbLoginPress()}
                  title="Already have an account? Login"
                />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};


