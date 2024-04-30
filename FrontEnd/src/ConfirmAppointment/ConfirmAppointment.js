import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmAppointment = ({navigation}) => {
    const onBackHomePress = () => {
        navigation.navigate("Home");
      };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Your booking is now confirmed.</Text>
      </View>
      <TouchableOpacity onPress={onBackHomePress} style={styles.button}>
        <Text style={styles.buttonText}>Back home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold', // Make the text bold
    textAlign: 'center',
    marginBottom: 30,
    color: '#27313d', // Set text color
  },
  button: {
    backgroundColor: '#2a3489',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 14,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ConfirmAppointment;
