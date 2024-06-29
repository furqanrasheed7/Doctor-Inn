import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForDevOnly from './ForDevOnly/ForDevOnly';
import FindClinic from './src/FindClinic/FindClinic';
import Signup from './src/Signup/Signup';
import Settings from './src/Settings/Settings';
import Login from './src/LoginPage/LoginPage';
import IntroPage from './src/IntroPage/IntroPage';
import Home from './src/Home/Home';
import BookAppointment from './src/BookAppointment/BookAppointment';
import ChatScreen from './src/ChatScreen/ChatScreen';
import ConfirmAppointment from './src/ConfirmAppointment/ConfirmAppointment';
import DoctorDetails from './src/DoctorDetails/DoctorDetails';
import MedicalProfile from './src/MedicalProfile/MedicalProfile';
import Medication from './src/Medication/Medication';
import MedicationHistory from './src/MedicationHistory/MedicationHistory';
import PersonalProfile from './src/PersonalProfile/PersonalProfile';
import VideoCallScreen from './src/VideoCallScreen/VideoCallScreen';
import AppointmentLog from './src/AppointmentLog/AppointmenLog';
import Sidebar from './src/Sidebar/Sidebar';
import DoctorsDirectory from './src/DoctorsDirectory/DoctorsDirectory';
import AppointmentCounter from './doctorsSrc/AppointmentCounter/AppointmentCounter';
import PatientDetails from './doctorsSrc/PatientDetails/PatientDetails';
import DoctorChatScreen from './doctorsSrc/DoctorChatScreen/DoctorChatScreen';
import DoctorProfile from './doctorsSrc/DoctorProfile/DoctorProfile';
const Stack = createStackNavigator();

export default function Navigation() {
 return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ForDevOnly">
        <Stack.Screen name="ForDevOnly" component={ForDevOnly} />
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="FindClinic" component={FindClinic} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="IntroPage" component={IntroPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ConfirmAppointment" component={ConfirmAppointment} />
        <Stack.Screen name="DoctorDetails" component={DoctorDetails} />
        <Stack.Screen name="MedicalProfile" component={MedicalProfile} />
        <Stack.Screen name="Medication" component={Medication} />
        <Stack.Screen name="MedicationHistory" component={MedicationHistory} />
        <Stack.Screen name="PersonalProfile" component={PersonalProfile} />
        <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} />
        <Stack.Screen name="AppointmentLog" component={AppointmentLog} />
        <Stack.Screen name="Sidebar" component={Sidebar} />
        <Stack.Screen name='DoctorsDirectory' component={DoctorsDirectory}/>
        <Stack.Screen name='AppointmentCounter' component={AppointmentCounter}/>
        <Stack.Screen name='PatientDetails' component={PatientDetails}/>
        <Stack.Screen name='DoctorChatScreen' component={DoctorChatScreen}/>
        <Stack.Screen name='DoctorProfile' component={DoctorProfile}/>


      </Stack.Navigator>
    </NavigationContainer>
 );
}