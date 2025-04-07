
import React from 'react';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Welcome from './src/screens/Welcome';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src//navigation/AppNavigation';

const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[]);
  return (
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
<Welcome/>

  );
};

export default App;
