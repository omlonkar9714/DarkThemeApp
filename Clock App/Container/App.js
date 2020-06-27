import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigator from '../navigation/MainTabNavigator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <BottomTabNavigator></BottomTabNavigator>
      </NavigationContainer>
    );
  }
}

export default App;
