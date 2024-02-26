import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForDevOnly from './src/ForDevOnly/ForDevOnly'; // Adjust the path as necessary
import FindClinic from './src/FindClinic/FindClinic'; // Adjust the path as necessary
import Signup from './src/Signup/Signup'; // Adjust the path as necessary
import Settings from './src/Settings/Settings'; // Adjust the path as necessary
import Login from './src/Login/Login'; // Adjust the path as necessary
import IntroPage from './src/IntroPage/IntroPage'; // Adjust the path as necessary
import Home from './src/Home/Home';
import BookAppointment from './src/BookAppointment/BookAppointment';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ForDevOnly">
        <Stack.Screen name="ForDevOnly" component={ForDevOnly} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="FindClinic" component={FindClinic} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="IntroPage" component={IntroPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}