import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, Dimensions, ScrollView, TextInput, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const FindClinic = ({ navigation }) => {
 const [showNav, setShowNav] = useState(false); // State to control visibility of side navbar
 const [animation] = useState(new Animated.Value(0)); // Animation value for sidebar
 const [searchQuery, setSearchQuery] = useState('');

 const doctors = [
   {
     name: 'Dr. Lucas',
     id: '1',
     profilePicture: require('./template_0.jpg'), // Local image path
     type: 'Cardiologist',
     location: 'New York',
     clinic: 'Heart Center',
   },
   {
     name: 'Dr. Matthew',
     id: '2',
     profilePicture: require('./template_0.jpg'), // Local image path
     type: 'Neurologist',
     location: 'Los Angeles',
     clinic: 'Brain Center',
   },
   {
     name: 'Dr. Oreg',
     id: '3',
     profilePicture: require('./template_0.jpg'), // Local image path
     type: 'Dermatologist',
     location: 'Chicago',
     clinic: 'Skin Care Center',
   },
   {
     name: 'Dr. Eva',
     id: '4',
     profilePicture: require('./template_0.jpg'), // Local image path
     type: 'Pediatrician',
     location: 'Houston',
     clinic: 'Kids Health Center',
   },
    // Add other doctors similarly...
];

 const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.clinic.toLowerCase().includes(searchQuery.toLowerCase())
 );

 const renderDoctor = ({ item }) => (
    <TouchableOpacity
      style={styles.doctorContainer}
      onPress={() => navigation.navigate('DoctorDetails', { doctor: item })}
      activeOpacity={0.7}
    >
      <Image source={item.profilePicture} style={styles.profilePicture} />
      <Text style={styles.doctorName}>{item.name}</Text>
      <Text style={styles.doctorType}>{item.type}</Text>
      <Text style={styles.doctorLocation}>{item.location}</Text>
      <Text style={styles.doctorClinic}>{item.clinic}</Text>
    </TouchableOpacity>
 );

 // Function to toggle visibility of side navbar and start animation
 const toggleNav = () => {
    setShowNav(!showNav);
    Animated.timing(animation, {
      toValue: showNav ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
 };

 // Function to handle tapping anywhere on the screen to close the side navbar
 const handleTap = () => {
    if (showNav) {
      toggleNav();
    }
 };

 // Screen dimensions
 const { width, height } = Dimensions.get('window');

 return (
    <View style={styles.container} onTouchStart={handleTap}>
      {/* Side Navbar */}
      <Animated.View style={[styles.sideNavbar, { right: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 0],
      }) }]}>
        <TouchableOpacity style={styles.navItemButton}>
          <Text style={styles.navItem}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("BookAppointment")} style={styles.navItemButton}>
          <Text style={styles.navItem}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemButton}>
          <Text style={styles.navItem}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={styles.navItemButton}>
          <Text style={styles.navItem}>Settings</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Main Content */}
      <ScrollView style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleNav} style={styles.profileButton}>
            <FontAwesomeIcon icon={faBars} size={24} color="#333" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Doctors Directory</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search doctors..."
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
        />
        <FlatList
          data={filteredDoctors}
          renderItem={renderDoctor}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
 },
 sideNavbar: {
   backgroundColor: '#fff',
   width: '50%',
   height: '100%',
   paddingTop: 50,
   paddingLeft: 20,
   position: 'absolute',
   zIndex: 2,
 },
 navItemButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
 },
 navItem: {
    fontSize: 16,
    color: '#333',
 },
 body: {
    flex: 1,
    padding: 20,
 },
 header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
 },
 backButton: {
    padding: 10,
 },
 backButtonText: {
    fontSize: 18,
    color: '#333',
 },
 profileButton: {
    padding: 10,
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Dark grey text
 },
 searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
 },
 doctorContainer: {
    paddingVertical: 15, // Increased padding for better spacing
    paddingHorizontal: 20, // Added horizontal padding
    marginBottom: 10, // Space between cards
    backgroundColor: '#FFF', // White background for cards
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
 },
 profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
 },
 doctorName: {
    fontSize: 16,
    color: '#333',
 },
 doctorType: {
    fontSize: 14,
    color: '#666',
 },
 doctorLocation: {
    fontSize: 14,
    color: '#666',
 },
 doctorClinic: {
    fontSize: 14,
    color: '#666',
 },
});

export default FindClinic;
