import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// import Home from '../screens/Home';
// import ViewRadio from '../screens/ViewChannel';

import Home from '../../navigation/RadBottom';

// import HomeStacknavigator from '../HomeStackNavigator/HomeStackNavigator';

function MyStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="HomeStackTab">
      {/* <Stack.Screen name="ViewRadio" component={ViewRadio} /> */}
      <Stack.Screen name="HomeStackTab" component={Home} />
      {/* <Stack.Screen name="WebView2" component={HomeStacknavigator} /> */}
    </Stack.Navigator>
  );
}

export default MyStack;
