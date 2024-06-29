import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput,navigation} from 'react-native';
import Sidebar from '../Sidebar/Sidebar';

const PersonalProfile = () => {
 // Initialize state with default values for a patient
 const [patient, setPatient] = useState({
    patientName: '',
    condition: '',
    medicalHistory: '',
    bloodType: '',
    weight: '',
    height: '',
    allergies: '',
 });

 // State to control the edit mode
 const [isEditMode, setIsEditMode] = useState(false);

 // Function to handle the "Edit Details" button press
 const handleEditPress = () => {
    setIsEditMode(!isEditMode);
 };

 return (
    <View style={styles.container}>
    <Sidebar navigation={navigation} />

    <View style={styles.body}>

      <Image source={require("./template_0.jpg")} style={styles.image} />
      <View style={styles.infoContainer}>
        {isEditMode ? (
          <TextInput
            style={styles.input}
            onChangeText={text => setPatient({ ...patient, patientName: text })}
            value={patient.patientName}
            placeholder="Patient Name"
          />
        ) : (
          <Text style={styles.name}>{patient.patientName}</Text>
        )}
        {isEditMode ? (
          <TextInput
            style={styles.input}
            onChangeText={text => setPatient({ ...patient, condition: text })}
            value={patient.condition}
            placeholder="Condition"
          />
        ) : (
          <Text style={styles.specialty}>{patient.condition}</Text>
        )}
        {isEditMode ? (
          <TextInput
            style={styles.input}
            onChangeText={text => setPatient({ ...patient, medicalHistory: text })}
            value={patient.medicalHistory}
            placeholder="Medical History"
          />
        ) : (
          <Text style={styles.bio}>{patient.medicalHistory}</Text>
        )}
        {isEditMode ? (
          <TextInput
            style={styles.input}
            onChangeText={text => setPatient({ ...patient, bloodType: text })}
            value={patient.bloodType}
            placeholder="Blood Type"
          />
        ) : (
          <Text style={styles.detail}>Blood Type: {patient.bloodType}</Text>
        )}
        {isEditMode ? (
          <TextInput
            style={styles.input}
            onChangeText={text => setPatient({ ...patient, weight: text })}
            value={patient.weight}
            placeholder="Weight"
          />
        ) : (
          <Text style={styles.detail}>Weight: {patient.weight}</Text>
        )}
        {isEditMode ? (
          <TextInput
            style={styles.input}
            onChangeText={text => setPatient({ ...patient, height: text })}
            value={patient.height}
            placeholder="Height"
          />
        ) : (
          <Text style={styles.detail}>Height: {patient.height}</Text>
        )}
        {isEditMode ? (
          <TextInput
            style={styles.input}
            onChangeText={text => setPatient({ ...patient, allergies: text })}
            value={patient.allergies}
            placeholder="Allergies"
          />
        ) : (
          <Text style={styles.detail}>Allergies: {patient.allergies}</Text>
        )}
      </View>
      <TouchableOpacity onPress={handleEditPress} style={styles.editButton}>
        <Text style={styles.editButtonText}>{isEditMode ? 'Save' : 'Edit Details'}</Text>
      </TouchableOpacity>
    </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
 flex:0,
 },
 body: {
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'space-between',
    height: '100%',
 },
 image: {
    width: 80,
    height: 80,
    alignItems: 'center',

    borderRadius: 40,
    marginBottom: 10,
 },
 infoContainer: {
    flex: 1,
    width: '100%',
 },
 name: {
    fontSize: 18,
    fontWeight: 'bold',
 },
 specialty: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
 },
 bio: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
 },
 detail: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
 },
 editButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginTop: 10,
 },
 editButtonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
 },
 input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#000',
    borderRadius: 5,
 },
});

export default PersonalProfile;
