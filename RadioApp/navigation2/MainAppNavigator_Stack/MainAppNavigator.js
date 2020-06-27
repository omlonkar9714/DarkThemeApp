import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeTab1 from '../TabNav1/HomeTabNav1';
import WebTab2 from '../TabNav2/WebTabNav2';

// import Home from '../../screens/Home';
// import Fav from '../../screens/Fav';

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomeTab1">
        <Stack.Screen name="HomeTab1" component={HomeTab1} />
        {/* <Stack.Screen name="WebTab2" component={WebTab2} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
