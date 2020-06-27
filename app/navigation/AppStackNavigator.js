import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Home from '../screens/Home';
import Login from '../screens/Login';
import Animation from '../screens/Animation';
import Animation2 from '../screens/Animation2';
import Otp from '../screens/Otp';
import Counter from '../screens/Counter';
import EnterData from '../screens/EnterData';
import ShowData from '../screens/ShowData';
import PhotoSwipe from '../screens/PhotoSwipe';
import Animation3 from '../screens/Animation3';
import Animation4 from '../screens/Animation4';
import MCQ from '../screens/Mcq';

import Cards from '../screens/CardsAnimation';

import Radio from '../screens/Radio';
import PDF from '../screens/PdfRead';

function MyStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Radio">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Animation" component={Animation} />
      <Stack.Screen name="Animation2" component={Animation2} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Counter" component={Counter} />
      <Stack.Screen name="EnterData" component={EnterData} />
      <Stack.Screen name="ShowData" component={ShowData} />
      <Stack.Screen name="PhotoSwipe" component={PhotoSwipe} />
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen name="Animation3" component={Animation3} />
      <Stack.Screen name="Animation4" component={Animation4} />
      <Stack.Screen name="MCQ" component={MCQ} />
      <Stack.Screen name="Radio" component={Radio} />
      <Stack.Screen name="PDF" component={PDF} />
    </Stack.Navigator>
  );
}

export default MyStack;
