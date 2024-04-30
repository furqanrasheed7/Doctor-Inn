import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DoctorDetails = ({ route, navigation }) => {
  const { doctor } = route.params?.doctor || { doctor: { name: 'Default Name', type: 'Default Type', clinic: 'Default Clinic', location: 'Default Location', description: 'Default Description', profilePicture: require('./template_0.jpg') } };
 // Assuming you have a way to determine these values
 const numberOfPatients = 100; // Example value
 const reviewStars = 4.5; // Example value

 return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Image source={doctor.profilePicture} style={styles.doctorPicture} />
      <Text style={styles.title}>{doctor.name}</Text>
      <Text style={styles.subtitle}>{doctor.type}</Text>
      <Text style={styles.subtitle}>{doctor.clinic}</Text>
      <Text style={styles.subtitle}>{doctor.location}</Text>
      <View style={styles.reviewContainer}>
        <Text style={styles.reviewText}>{reviewStars} stars</Text>
        <Text style={styles.patientText}>{numberOfPatients} patients</Text>
      </View>
      <Text style={styles.description}>{doctor.description}</Text>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
 },
 backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
 },
 backButtonText: {
    fontSize: 18,
    color: '#333',
 },
 doctorPicture: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 50, // Assuming the picture is a square
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
 },
 subtitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
 },
 reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
 },
 reviewText: {
    fontSize: 18,
    color: '#333',
 },
 patientText: {
    fontSize: 18,
    color: '#333',
 },
 description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
 },
});

export default DoctorDetails;
