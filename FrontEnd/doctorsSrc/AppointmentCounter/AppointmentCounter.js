import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const appointments = [
  { id: '1', name: 'John Doe', date: '2024-06-01', time: '10:00 AM', photo: require('../../assets/profilepic.jpg') },
  { id: '2', name: 'Jane Smith', date: '2024-06-03', time: '11:30 AM', photo: require('../../assets/profilepic.jpg') },
  { id: '3', name: 'Alex Johnson', date: '2024-06-02', time: '09:45 AM', photo: require('../../assets/profilepic.jpg') },
  { id: '4', name: 'Emily Davis', date: '2024-06-04', time: '02:15 PM', photo: require('../../assets/profilepic.jpg') },
  { id: '5', name: 'Michael Brown', date: '2024-06-05', time: '01:00 PM', photo: require('../../assets/profilepic.jpg') },
  { id: '6', name: 'Sarah Wilson', date: '2024-06-06', time: '03:30 PM', photo: require('../../assets/profilepic.jpg') },
  { id: '7', name: 'David Miller', date: '2024-06-07', time: '10:45 AM', photo: require('../../assets/profilepic.jpg') },
];

// Sort appointments by date in ascending order
appointments.sort((a, b) => new Date(a.date) - new Date(b.date));

const AppointmentCounter = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request or any data fetching logic here
    setTimeout(() => {
      setRefreshing(false);
      // Update the appointments list if needed
    }, 2000);
  };

  // Calculate the number of appointments for today
  const today = new Date().toISOString().split('T')[0];
  const appointmentsForToday = appointments.filter(appointment => appointment.date === today);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Appointments</Text>
        <Text style={styles.subtitle}>{appointmentsForToday.length} today, {appointments.length} total</Text>
      </View>
      <FlatList
        data={appointments}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('PatientDetails', { appointmentId: item.id })}
          >
            <Image source={item.photo} style={styles.profilePhoto} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.dateTime}>{new Date(item.date).toDateString()} - {item.time}</Text>
              <TouchableOpacity style={styles.dismissButton}>
                <Text style={styles.dismissText}>Dismiss</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateTime: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  dismissButton: {
    backgroundColor: '#b3ccfc',
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  dismissText: {
    color: '#28397a',
    fontWeight: 'bold',
  },
});

export default AppointmentCounter;
