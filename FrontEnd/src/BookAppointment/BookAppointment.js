import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Define the Card, ImageComponent, and TextComponent outside of BookAppointment
const Card = ({ children }) => {
 return (
    <View style={styles.card}>
      {children}
    </View>
 );
};

const ImageComponent = ({ image }) => {
 return (
    <Image
      source={{ uri: image }}
      style={styles.image}
    />
 );
};

ImageComponent.defaultProps = {
 image: 'https://assets.api.uizard.io/api/cdn/stream/cae5c331-9270-4838-b06f-39f7ec188ed4.png',
};

const TextComponent = ({ text }) => {
 return (
    <Text style={styles.text}>
      {text}
    </Text>
 );
};

TextComponent.defaultProps = {
 text: 'Swipe to Get Started',
};

const styles = StyleSheet.create({
 card: {
    marginTop: 640,
    marginLeft: 42,
    width: 291,
    height: 54,
    backgroundColor: '#ffffff',
    borderRadius: 51,
    borderWidth: 1,
    borderColor: '#d2eded',
 },
 image: {
    marginTop: 645,
    marginLeft: 42,
    width: 64,
    height: 46,
    resizeMode: 'cover',
 },
 text: {
    color: '#070707',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 17,
 },
});

// Define the BookAppointment component
const BookAppointment = () => {
 return (
    <Card>
      <ImageComponent />
      <TextComponent />
    </Card>
 );
};

// Export the BookAppointment component
export default BookAppointment;
