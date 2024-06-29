import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane, faPhone, faCamera, faTrashAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const DoctorChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const [longPressedMessage, setLongPressedMessage] = useState(null);
  const { patientName } = route.params;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const sendMessage = () => {
    if (message.trim() === '') return;
    const now = new Date();
    const messageTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([...messages, { id: Date.now(), text: message, sent: true, time: messageTime }]);
    setMessage('');
  };

  const onPhonePress = () => {
    navigation.navigate("VideoCallScreen");
  };
  

  const deleteMessage = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  const handleLongPress = (id) => {
    setLongPressedMessage(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} size={24} color="#1b2c45" />
        </TouchableOpacity>
        <View style={styles.profile}>
          <Image source={require('./profilephoto.png')} style={styles.profilePhoto} />
          <View>
            <Text style={styles.profileName}>{patientName}</Text>
            <Text style={styles.activityStatus}>Active</Text>
          </View>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={onPhonePress} style={styles.icon}>
            <FontAwesomeIcon icon={faPhone} size={24} color="#1b2c45" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesomeIcon icon={faCamera} size={24} color="#1b2c45" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dateTime}>
        <Text style={styles.dateTimeText}>{currentDate}</Text>
      </View>
      <ScrollView style={styles.messagesContainer} contentContainerStyle={styles.messages}>
        {messages.map((msg) => (
          <TouchableWithoutFeedback key={msg.id} onLongPress={() => handleLongPress(msg.id)}>
            <View style={[styles.messageBubble, msg.sent ? styles.sentMessage : styles.receivedMessage]}>
              <Text style={styles.messageText}>{msg.text}</Text>
              <View style={styles.messageDetails}>
                <Text style={styles.messageTime}>{msg.time}</Text>
                {longPressedMessage === msg.id && (
                  <TouchableOpacity onPress={() => deleteMessage(msg.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} size={18} color="#666" style={styles.deleteIcon} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#666"
          value={message}
          onChangeText={setMessage}
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity onPress={sendMessage}>
          <FontAwesomeIcon icon={faPaperPlane} size={24} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10, // Adjusted gap between profile photo and back button
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    color: '#1b2c45',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityStatus: {
    color: '#1b2c45',
    fontSize: 14,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  dateTime: {
    alignItems: 'center',
    marginTop: 10,
  },
  dateTimeText: {
    color: '#333',
    fontSize: 16,
  },
  messagesContainer: {
    flex: 1,
  },
  messages: {
    padding: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dadbdf',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#dee9ff',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  messageDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  messageTime: {
    fontSize: 12,
    color: '#666',
  },
  deleteIcon: {
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendIcon: {
    color: '#2a358a',
  },
});

export default DoctorChatScreen;

