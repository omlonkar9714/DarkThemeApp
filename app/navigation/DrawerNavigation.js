import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

import Home from '../screens/Home';
import Login from '../screens/Login';
import Animation from '../screens/Animation';
import Otp from '../screens/Otp';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Animation" component={Animation} />
        <Drawer.Screen name="Otp" component={Otp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
