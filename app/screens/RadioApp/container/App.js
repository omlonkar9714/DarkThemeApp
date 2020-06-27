import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from '../../../../Redux/Store/store';

import {NavigationContainer} from '@react-navigation/native';

import RadioAppStackNavigator from '../navigation/RadioStackNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RadioAppStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
