import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../screens/Home';
import ViewRadio from '../screens/ViewChannel';

function MyStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Radio">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ViewRadio" component={ViewRadio} />
      />
    </Stack.Navigator>
  );
}

export default MyStack;
