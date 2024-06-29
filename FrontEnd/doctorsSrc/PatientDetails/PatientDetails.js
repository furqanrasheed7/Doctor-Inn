import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const patientData = {
  '1': { name: 'John Doe', history: 'Patient has a history of diabetes and hypertension.', avgSugar: '110 mg/dL', avgBP: '120/80 mmHg', profilePic: require('../../assets/profilepic.jpg') },
  '2': { name: 'Jane Smith', history: 'Patient has a history of asthma.', avgSugar: '90 mg/dL', avgBP: '110/70 mmHg', profilePic: require('../../assets/profilepic.jpg') },
  '3': { name: 'Alex Johnson', history: 'Patient has a history of high cholesterol.', avgSugar: '100 mg/dL', avgBP: '130/85 mmHg', profilePic: require('../../assets/profilepic.jpg') },
  '4': { name: 'Emily Davis', history: 'Patient has a history of migraines.', avgSugar: '95 mg/dL', avgBP: '115/75 mmHg', profilePic: require('../../assets/profilepic.jpg') },
  '5': { name: 'Michael Brown', history: 'Patient has a history of allergies.', avgSugar: '105 mg/dL', avgBP: '118/76 mmHg', profilePic: require('../../assets/profilepic.jpg') },
  '6': { name: 'Sarah Wilson', history: 'Patient has a history of thyroid issues.', avgSugar: '92 mg/dL', avgBP: '112/72 mmHg', profilePic: require('../../assets/profilepic.jpg') },
  '7': { name: 'David Miller', history: 'Patient has a history of high blood pressure.', avgSugar: '98 mg/dL', avgBP: '125/80 mmHg', profilePic: require('../../assets/profilepic.jpg') },
};

const PatientDetails = ({ route }) => {
  const { appointmentId } = route.params;
  const patient = patientData[appointmentId];
  const navigation = useNavigation();

  const handleChatPress = () => {
    // Navigate to the DoctorChatScreen with patient's name as parameter
    navigation.navigate('DoctorChatScreen', { patientId: appointmentId, patientName: patient.name });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image source={patient.profilePic} style={styles.profilePhoto} />
        <Text style={styles.name}>{patient.name}</Text>
        <Text style={styles.sectionTitle}>Medical History</Text>
        <Text style={styles.text}>{patient.history}</Text>
        <Text style={styles.sectionTitle}>Average Sugar</Text>
        <Text style={styles.text}>{patient.avgSugar}</Text>
        <Text style={styles.sectionTitle}>Average Blood Pressure</Text>
        <Text style={styles.text}>{patient.avgBP}</Text>
        {/* Chat with Patient button */}
        <TouchableOpacity style={styles.button} onPress={handleChatPress}>
          <Text style={styles.buttonText}>Chat with {patient.name}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: 'center', // Center items inside the card
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#b3ccfc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    color: '#28397a',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PatientDetails;
