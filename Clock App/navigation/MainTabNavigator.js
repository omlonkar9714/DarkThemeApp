import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

import Home from '../screens/ClockHome';
import Stopwatch from '../screens/Stopwatch';

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Clock"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Clock"
        component={Home}
        options={{
          tabBarLabel: 'Clock',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="clock" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Stopwatch"
        component={Stopwatch}
        options={{
          tabBarLabel: 'Stopwatch',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="timer" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
