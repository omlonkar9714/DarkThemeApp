import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// import Home from '../../screens/HomeStackScreens/InitialHome';
// import WebView from '../../screens/HomeStackScreens/WebView';

import StartHomeTab from '../HomeStackTabNav/HomeStackTab';
function HomeStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={StartHomeTab} />
      {/* <Stack.Screen name="WebView" component={WebView} /> */}
    </Stack.Navigator>
  );
}

export default HomeStack;
