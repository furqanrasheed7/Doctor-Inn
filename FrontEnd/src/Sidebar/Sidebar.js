import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Sidebar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItemButton} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.navItem}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItemButton} onPress={() => navigation.navigate("BookAppointment")}>
        <Text style={styles.navItem}>Appointments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItemButton} onPress={() => navigation.navigate("Notifications")}>
        <Text style={styles.navItem}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItemButton} onPress={() => navigation.navigate("Settings")}>
        <Text style={styles.navItem}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default Sidebar;
