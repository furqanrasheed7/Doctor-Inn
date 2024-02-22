import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import styles from "./style";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image, 
  ImageBackground
} from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import * as Facebook from "expo-facebook";

const appId = "1047121222092614";

export default function LoginScreen() {
  const onLoginPress = () => {};

  const onFbLoginPress = async () => {
    Alert.alert(
      `Please use our React Native Starer Kit instead. You can download it for free at https://instamobile.io`
    );
    // try {
    //   await Facebook.initializeAsync({
    //     appId,
    //   });
    //   const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    //     permissions: ["public_profile", "email"],
    //   });
    //   if (type === "success") {
    //     const response = await fetch(
    //       `https://graph.facebook.com/me?access_token=${token}`
    //     );
    //     Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
    //   }
    // } catch ({ message }) {
    //   Alert.alert(`Facebook Login Error: ${message}`);
    // }
  };

  return (
    <ImageBackground
    source={{ uri: 'https://shorturl.at/dhtX3' }}
      style={styles.backgroundImage}
    >
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Image
            source={{ uri: 'https://shorturl.at/dmKU4' }}
            style={styles.image}
            />
            <Text style={styles.logoText1}>WELCOME TO </Text>
            <Text style={styles.logoText}>The Doctor's Inn</Text>
            
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title="Sign in"
              color= "blue"
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title="Register"
            />
            <Button
              containerStyle={styles.fbLoginButton}
              type="clear"
              onPress={() => onFbLoginPress()}
              title="Login With Facebook"
            />
            <Image
            source={{ uri: 'https://shorturl.at/tzA19' }}
            style={styles.image2}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ImageBackground>

  );
}
