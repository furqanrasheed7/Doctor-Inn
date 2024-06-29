import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const Sidebar = ({ navigation }) => {
  const [showNav, setShowNav] = useState(false); // State to control visibility of side navbar
  const animation = useState(new Animated.Value(0))[0]; // Corrected initialization of animation

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

  return (
    <View style={styles.containers} onStartShouldSetResponder={handleTap}>
      {/* Side Navbar */}
      <Animated.View
        style={[
          styles.sideNavbar,
          {
            right: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [-200, 0],
            }),
          },
        ]}
      >
        <TouchableOpacity style={styles.navItemButton}>
          <Text style={styles.navItem}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("BookAppointment")}
          style={styles.navItemButton}
        >
          <Text style={styles.navItem}>Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItemButton}>
          <Text style={styles.navItem}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={styles.navItemButton}
        >
          <Text style={styles.navItem}>Settings</Text>
        </TouchableOpacity>
        
      </Animated.View>    

      <TouchableOpacity onPress={toggleNav} style={styles.profileButton}>
        <FontAwesomeIcon icon={faBars} size={24} color="#333" />
      </TouchableOpacity>

    </View>
  );
};
const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: "#fff",
    zIndex: 2,
  },

  sideNavbar: {
    backgroundColor: "#fff",
    top: 0,
    right: 0,
    width: "50%",
    height: "100%",
    paddingTop: 50,
    paddingLeft: 20,
    zIndex: 2,
    position: "absolute",
    height: windowHeight, // Dynamically set the height
  },

  navItemButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    zIndex: 2,
  },

  navItem: {
    fontSize: 16,
    color: "#333",
    zIndex: 2,
  },

  profileButton: {
    padding: 10,
    zIndex: 2,
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default Sidebar;
