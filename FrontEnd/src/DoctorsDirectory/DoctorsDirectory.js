import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import Sidebar from '../Sidebar/Sidebar';

const DoctorsDirectory = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Inside DoctorsDirectory component
  const doctors = [
    {
      name: "Dr. Lucas",
      id: "1",
      profilePicture: require("./template_0.jpg"), // Local image path
      type: "Cardiologist",
      location: "New York",
      clinic: "Heart Center",
      description:
        "Dr. Lucas is a highly experienced cardiologist with over 20 years of practice. He specializes in heart disease management and prevention.",
    },
    {
      name: "Dr. Matthew",
      id: "2",
      profilePicture: require("./template_0.jpg"), // Local image path
      type: "Neurologist",
      location: "Los Angeles",
      clinic: "Brain Center",
      description:
        "Dr. Matthew is a renowned neurologist with a focus on neurodegenerative diseases and brain health.",
    },
    {
      name: "Dr. Oreg",
      id: "3",
      profilePicture: require("./template_0.jpg"), // Local image path
      type: "Dermatologist",
      location: "Chicago",
      clinic: "Skin Care Center",
      description:
        "Dr. Oreg is a board-certified dermatologist with expertise in skin care, cosmetic procedures, and dermatological conditions.",
    },
    {
      name: "Dr. Eva",
      id: "4",
      profilePicture: require("./template_0.jpg"), // Local image path
      type: "Pediatrician",
      location: "Houston",
      clinic: "Kids Health Center",
      description:
        "Dr. Eva is a dedicated pediatrician with a focus on child health, development, and wellness.",
    },
    // Add other doctors similarly...
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.clinic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderDoctor = ({ item }) => (
    <TouchableOpacity
      style={styles.doctorContainer}
      onPress={() => navigation.navigate("DoctorDetails", { doctor: item })}
      activeOpacity={0.7}
    >
      <Image source={item.profilePicture} style={styles.profilePicture} />
      <Text style={styles.doctorName}>{item.name}</Text>
      <Text style={styles.doctorType}>{item.type}</Text>
      <Text style={styles.doctorLocation}>{item.location}</Text>
      <Text style={styles.doctorClinic}>{item.clinic}</Text>
    </TouchableOpacity>
  );

  // Screen dimensions
  const { width, height } = Dimensions.get("window");

  return (
    
    <View style={styles.container}>
      {/* Main Content */}
        
        <ScrollView style={styles.body}>
        <Sidebar navigation={navigation} />

          <View style={styles.header}>

            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.backButton}
            >
              
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

          </View>

          <Text style={styles.title}>Doctors Directory</Text>
          <TextInput
            style={styles.searchBar}
            placeholder="Search doctors..."
            onChangeText={(text) => setSearchQuery(text)}
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
    backgroundColor: "#F5F5F5",
  },

  body: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: "#333",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Dark grey text
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  doctorContainer: {
    paddingVertical: 15, // Increased padding for better spacing
    paddingHorizontal: 20, // Added horizontal padding
    marginBottom: 10, // Space between cards
    backgroundColor: "#FFF", // White background for cards
    borderRadius: 10, // Rounded corners
    shadowColor: "#000", // Shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
  },
  Sidebarbutton: {
    backgroundColor: "#fff",
    height: 0,
    zIndex: 2,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  doctorName: {
    fontSize: 16,
    color: "#333",
  },
  doctorType: {
    fontSize: 14,
    color: "#666",
  },
  doctorLocation: {
    fontSize: 14,
    color: "#666",
  },
  doctorClinic: {
    fontSize: 14,
    color: "#666",
  },
});

export default DoctorsDirectory;
