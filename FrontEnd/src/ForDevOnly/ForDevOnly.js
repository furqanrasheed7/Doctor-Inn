import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForDevOnly = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button title="Go to Intro Page" onPress={() => navigation.navigate('IntroPage')} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
      <Button title="Go to Find Clinic" onPress={() => navigation.navigate('FindClinic')} />
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Book Appointment" onPress={() => navigation.navigate('BookAppointment')} />
    </View>
  );
};

export default ForDevOnly;