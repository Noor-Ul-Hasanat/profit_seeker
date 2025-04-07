
import React from 'react';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';


const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[]);
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Welcome" component={Welcome} />
         <Stack.Screen name="SignIn" component={SignIn} />
         <Stack.Screen name="SignUp" component={SignUp} />
       </Stack.Navigator>
    </NavigationContainer>


  );
};

export default App;
