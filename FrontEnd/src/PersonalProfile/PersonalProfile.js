import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Sidebar from '../Sidebar/Sidebar';

const PersonalProfile = ({navigation}) => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const sidebarAnimation = React.useRef(new Animated.Value(-300)).current; // Initial position off-screen

 const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    Animated.timing(sidebarAnimation, {
      toValue: isSidebarOpen ? -300 : 0, // Animate to 0 if opening, -300 if closing
      duration: 250,
      useNativeDriver: true,
    }).start();
 };

 return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={toggleSidebar} style={styles.hamburgerIcon}>
        {/* Replace with your hamburger icon */}
        <Text>Menu</Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.sidebarContainer,
          {
            transform: [{ translateX: sidebarAnimation }],
          },
        ]}
      >
        <Sidebar />
      </Animated.View>
      <Text>Welcome to the Personal Profile screen!</Text>
    </View>
 );
};

const styles = StyleSheet.create({
 hamburgerIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 3, // Ensure it's above the sidebar
 },
 sidebarContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%', // Adjust as needed
    height: '100%',
    backgroundColor: '#fff',
    zIndex: 2,
 },
});

export default PersonalProfile;