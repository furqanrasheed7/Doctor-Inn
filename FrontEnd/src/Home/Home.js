import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,Image } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Left Top corner - Scroll bar */}
      {/* <View style={styles.scrollBar}></View> */}

            {/* Logo */}
            <View style={styles.logoContainer}>
        <Image
        style={styles.logo}
          source={require('./Di.png')} // Adjust the path to your Di.png file
          
        />
      </View>


      {/* Search bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search, doctors, and appointments"
        />
      </View>

      {/* Rest of the content */}
      {/* Upcoming appointments */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
        <TouchableOpacity style={styles.card}>
          <Text>General check-up</Text>
          <View style={styles.pillContainer}>
            <View style={styles.pill}>
              <Text style={styles.pillText}>Aug 12</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text>Cardiologist check-up</Text>
          <View style={styles.pillContainer}>
            <View style={styles.pill}>
              <Text style={styles.pillText}>Aug 28</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Current medications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Current Medications</Text>
        <View style={styles.medicationRow}>
          <TouchableOpacity style={styles.medicationCard}>
            <Text>Paracetamol</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.medicationCard}>
            <Text>Vitamin C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.medicationCard}>
            <Text>Vitamin D</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Find your doctor */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Find Your Doctor</Text>
        <View style={styles.doctorRow}>
          <Text style={styles.doctor}>General</Text>
          <Text style={styles.doctor}>Dentist</Text>
          <Text style={styles.doctor}>Geneticist</Text>
        </View>
        <View style={styles.doctorRow}>
          <Text style={styles.doctor}>Nurse</Text>
          <Text style={styles.doctor}>Virologist</Text>
          <Text style={styles.doctor}>Cardiologist</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  // scrollBar: {
  //   width: 10,
  //   height: '70%',
  //   backgroundColor: '#ccc',
  //   position: 'absolute',
  //   left: 0,
  //   top: 0,
  // },
  // medkit: {
  //   alignItems: 'center',
  //   marginBottom: 20,
  // },
  // medkitText: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   color: '#2d368d',
  // },
  searchBarContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fafafa',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
    position: 'relative', // Add position relative to allow absolute positioning of pill
  },
  pillContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pill: {
    backgroundColor: '#b3ccfc',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  pillText: {
    color: '#28397a',
    fontWeight: 'bold',
  },
  medicationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // To evenly space the medication cards
  },
  medicationCard: {
    backgroundColor: '#fafafa',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    flex: 1,
    height: 100, // Adjust height as needed
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  doctor: {
    backgroundColor: '#fafafa',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    marginLeft: 10, // Add margin to create space between cards
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 60, // Adjust the width as needed
    height: 60,
  },
});

export default HomeScreen;
