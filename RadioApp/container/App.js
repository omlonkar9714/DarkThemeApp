import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from '../../Redux/Store/store';

// import {NavigationContainer} from '@react-navigation/native';

// import RadioAppStackNavigator from '../navigation/RadioStackNavigator';
// import RadioBottomTabNavigator from '../navigation/RadBottom';

import MainStackNavigator from '../navigation2/MainAppNavigator_Stack/MainAppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <NavigationContainer> */}
          <MainStackNavigator></MainStackNavigator>
        {/* </NavigationContainer> */}
      </PersistGate>
    </Provider>
  );
}
