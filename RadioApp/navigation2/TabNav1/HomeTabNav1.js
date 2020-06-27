import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';

import Home from '../../screens/Home';
import Fav from '../../screens/Fav';
import Downalod from '../../screens/Download';
import Tabs from '../../screens/Tabs';

import WebHome from '../../screens/WebView';

const tabData = [
  {icon: 'home', backColor: '#CCCCFF'},
  {icon: 'heart', backColor: 'pink'},
  {icon: 'tasks', backColor: 'powderblue'},
  {icon: 'download', backColor: '#CCCCFF'},
];

let bg = '#CCCCFF';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        // padding: 20,
        backgroundColor: bg,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        // elevation: 10,
        // shadowOffset: {width: 1, height: 1},
        // shadowOpacity: 0.6,
        // shadowRadius: 3,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          // options.tabBarLabel !== undefined
          //   ? options.tabBarLabel
          //   : options.title !== undefined
          //   ? options.title
          //   :
          route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
            // alert(
            //   'State' +
            //     JSON.stringify(state) +
            //     '\n' +
            //     'Route' +
            //     JSON.stringify(route),
            // );
            bg = tabData[index].backColor;
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',

                // height: 50,
                margin: 10,
                padding: 10,
                // width: 50,
                borderRadius: 25,
                // backgroundColor: 'orange',
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon
                  name={tabData[index].icon}
                  size={20}
                  color={isFocused ? 'black' : 'white'}></Icon>
                {/* <Text style={{color: isFocused ? '#e75480' : 'black'}}>
                  {tabData[index].date}
                </Text> */}
              </View>
              {/* <View>
                <Text style={{color: isFocused ? '#e75480' : 'black'}}>
                  {label}
                </Text>
              </View> */}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const getTabBarVisibility = (route) => {
  console.log('Here');
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

  if (routeName === 'WebView') {
    console.log('Here Firt');
    return false;
  }

  return true;
};

function MyStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="WebView" component={WebHome} />
      {/* <Stack.Screen name="WebView" component={WebHome} />
      <Stack.Screen name="WebView" component={WebHome} /> */}
    </Stack.Navigator>
  );
}

function App1() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      swipeEnabled={false}
      tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={MyStack} />
      <Tab.Screen name="Fav" component={Fav} />
      <Tab.Screen name="About" component={Tabs} />
      <Tab.Screen name="Download" component={Downalod} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <App1></App1>
    </View>
  );
}
