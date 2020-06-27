// Imports: Dependencies
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
// Imports: Screens
import Counter from '../screens/Counter';
// Imports: Redux Persist Persister
import {store, persistor} from '../../Redux/Store/store';

import {} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from '../navigation/AppStackNavigator';
// React Native: App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Counter /> */}
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>

    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
  );
}
