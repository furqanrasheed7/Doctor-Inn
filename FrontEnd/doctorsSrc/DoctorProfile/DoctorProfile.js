import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DoctorProfile = () => {
  // Doctor's details
  const doctors = {
    doctorName: 'Dr. John Doe',
    specialty: 'Cardiologist',
    bio: 'Experienced cardiologist with a focus on heart health.',
    hospital: 'City Hospital',
    experience: '15+ years',
    education: 'MD, Cardiology',
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <View style={styles.body}>
          <Image source={require("../../assets/profilepic.jpg")} style={styles.image} />
          <View style={styles.infoContainer}>
            <Card>
              <Text style={styles.name}>{doctors.doctorName}</Text>
              <Text style={styles.specialty}>{doctors.specialty}</Text>
              <Text style={styles.bio}>{doctors.bio}</Text>
              <Text style={styles.detail}>Hospital: {doctors.hospital}</Text>
              <Text style={styles.detail}>Experience: {doctors.experience}</Text>
              <Text style={styles.detail}>Education: {doctors.education}</Text>
            </Card>
          </View>
        </View>
      </View>
    </View>
  );
};

const Card = ({ children }) => (
  <View style={styles.card}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
//   centeredContent: {
//     width: '80%',
//   },
  body: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'space-between',
    height: '100%',
  },
  image: {
    width: 100,
    marginTop: 30,
    height: 100,
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: 35,
  },
  infoContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: 15,
  },
  specialty: {
    fontSize: 16,
    color: '#1976d2',
    textAlign: 'center',
    marginBottom: 15,
  },
  bio: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default DoctorProfile;
