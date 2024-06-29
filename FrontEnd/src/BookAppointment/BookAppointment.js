import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BookAppointment = ({ route, navigation }) => {
  const { doctor } = route.params;

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const bookedTimes = ['10:00 AM', '01:00 PM', '03:00 PM']; // Example booked times

  const formatTime = (hour) => {
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    return `${formattedHour}:00`;
  };

  const availableTimes = Array.from({ length: 13 }, (_, i) => formatTime(9 + i));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const isTimeInPast = (time) => {
    const [hours, minutes] = time.split(':');
    const selectedDateTime = new Date(date);
    selectedDateTime.setHours(parseInt(hours, 10));
    selectedDateTime.setMinutes(parseInt(minutes, 10));
    return selectedDateTime < new Date();
  };

  const renderTimeSlot = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.timeSlot,
        (bookedTimes.includes(item) || isTimeInPast(item)) && styles.bookedTimeSlot,
        selectedTime === item && styles.selectedTimeSlot
      ]}
      onPress={() => !bookedTimes.includes(item) && !isTimeInPast(item) && handleTimeSelect(item)}
      disabled={bookedTimes.includes(item) || isTimeInPast(item)}
    >
      <Text style={styles.timeText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Image source={doctor.profilePicture} style={styles.doctorPicture} />
      <Text style={styles.title}>Book Appointment with {doctor.name}</Text>
      
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Select Date:</Text>
        <TouchableOpacity style={styles.datePicker} onPress={showDatepicker}>
          <Text style={styles.pickerText}>{date.toDateString()}</Text>
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
          minimumDate={new Date()} // Prevents selecting previous dates
        />
      )}

      <Text style={styles.label}>Select Time:</Text>
      <FlatList
        data={availableTimes}
        renderItem={renderTimeSlot}
        keyExtractor={(item) => item}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.timeSlotsContainer}
      />

      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => navigation.navigate('ConfirmAppointment')}
      >
        <Text style={styles.bookButtonText}>Confirm Appointment</Text>
      </TouchableOpacity>
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
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  pickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  datePicker: {
    borderWidth: 1,
    borderColor: '#d2eded',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  pickerText: {
    fontSize: 16,
    color: '#343a40',
  },
  timeSlotsContainer: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  timeSlot: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
    marginBottom: 10,
    marginHorizontal: 5,
  },
  bookedTimeSlot: {
    backgroundColor: '#d9534f',
  },
  selectedTimeSlot: {
    borderColor: '#000',
    borderWidth: 2,
  },
  timeText: {
    color: '#fff',
    textAlign: 'center',
  },
  bookButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookAppointment;
