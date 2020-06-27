import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import Home from '../screens/Home';
import Fav from '../screens/Fav';
import About from '../screens/About';

const tabData = [
  {icon: 'home', backColor: '#CCCCFF', date: '26'},
  {icon: 'heart', backColor: 'pink', date: '27'},
  {icon: 'music', backColor: 'powderblue', date: '28'},
  {icon: 'home', backColor: '#CCCCFF', date: '29'},
  {icon: 'heart', backColor: 'pink', date: '30'},
  {icon: 'music', backColor: 'powderblue', date: '31'},
];

let bg = '';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
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
        const label = route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
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

                height: 50,
                margin: 10,
                // width: 50,
                borderRadius: 25,
                // backgroundColor: 'orange',
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: isFocused ? '#e75480' : 'black'}}>
                  {tabData[index].date}
                </Text>
              </View>
              <View>
                <Text style={{color: isFocused ? '#e75480' : 'black'}}>
                  {label}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function App1() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        swipeEnabled={false}
        tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen
          name="Mon"
          component={Fav}
          icon="heart"
          backColor="powderblue"
        />
        <Tab.Screen
          name="Tue"
          component={About}
          icon="heart"
          backColor="powderblue"
        />
        <Tab.Screen
          name="Wed"
          component={Home}
          icon="heart"
          backColor="powderblue"
        />
        <Tab.Screen
          name="Thu"
          component={Fav}
          icon="heart"
          backColor="powderblue"
        />
        <Tab.Screen
          name="Fri"
          component={About}
          icon="heart"
          backColor="powderblue"
        />
        <Tab.Screen
          name="Sat"
          component={About}
          icon="heart"
          backColor="powderblue"
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 50, marginBottom: 10}}>
        <Text style={{textAlign: 'center'}}>Select your slot</Text>
      </View>
      <App1></App1>
    </View>
  );
}
