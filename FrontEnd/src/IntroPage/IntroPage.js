import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const IntroPage = ({navigation}) => {
    const onGetStartedPress = () => {
        navigation.navigate('LoginPage');
      };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Place your final logo here */}
        <Image
          source={require('./Di.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>
          <Text style={styles.doctorText}>Doctor</Text>
          <Text style={styles.innText}> Inn</Text>
        </Text>
      </View>
      <TouchableOpacity onPress={onGetStartedPress} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust the width of your logo
    height: 200, // Adjust the height of your logo
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  doctorText: {
    color: '#2d368d', // Blue color
  },
  innText: {
    color: '#ef2d2d', // Red color
  },
  button: {
    backgroundColor: '#2d368d', // Example color, you can change it
    width: '80%',
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default IntroPage;
