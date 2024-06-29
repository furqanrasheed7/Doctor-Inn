import React from 'react';
import { View, Button, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForDevOnly = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="Go to AppointmentLog" onPress={() => navigation.navigate('AppointmentLog')} />
      <Button title="Go to BookAppointment" onPress={() => navigation.navigate('BookAppointment')} />
      <Button title="Go to ChatScreen" onPress={() => navigation.navigate('ChatScreen')} />
      <Button title="Go to ConfirmAppointment" onPress={() => navigation.navigate('ConfirmAppointment')} />
      <Button title="Go to DoctorDetails" onPress={() => navigation.navigate('DoctorDetails')} />
      <Button title="Go to DoctorsDirectory" onPress={() => navigation.navigate('DoctorsDirectory')} />
      <Button title="Go to FindClinic" onPress={() => navigation.navigate('FindClinic')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to IntroPage" onPress={() => navigation.navigate('IntroPage')} />
      <Button title="Go to LoginPage" onPress={() => navigation.navigate('LoginPage')} />
      <Button title="Go to MedicalProfile" onPress={() => navigation.navigate('MedicalProfile')} />
      <Button title="Go to Medication" onPress={() => navigation.navigate('Medication')} />
      <Button title="Go to MedicationHistory" onPress={() => navigation.navigate('MedicationHistory')} />
      <Button title="Go to PersonalProfile" onPress={() => navigation.navigate('PersonalProfile')} />
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
      <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
      <Button title="Go to VideoCallScreen" onPress={() => navigation.navigate('VideoCallScreen')} />
      <Button title="Go to Sidebar" onPress={() => navigation.navigate('Sidebar')} />
      <Button title="Go to PatientDetails" onPress={() => navigation.navigate('PatientDetails')} />
      <Button title="Go to AppointmentCounter" onPress={() => navigation.navigate('AppointmentCounter')} />
      <Button title="Go to DoctorChatScreen" onPress={() => navigation.navigate('DoctorChatScreen')} />
      <Button title="Go to DoctorProfile" onPress={() => navigation.navigate('DoctorProfile')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
});

export default ForDevOnly;
