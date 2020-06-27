import React, {Component} from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animatable.View
          animation="zoomInUp"
          iterationCount="infinite"
          style={{backgroundColor: 'red'}}>
          <View
            style={{
              height: 100,
              width: 170,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                margin: 20,
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Animation
            </Text>
          </View>
        </Animatable.View>
        <Animatable.View
          iterationCount="infinite"
          animation="bounce"
          style={{backgroundColor: 'green'}}>
          <View
            style={{
              height: 100,
              width: 170,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                margin: 20,
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Animation
            </Text>
          </View>
        </Animatable.View>
        <Animatable.View
          animation="swing"
          style={{backgroundColor: 'orange'}}
          iterationCount="infinite">
          <View
            style={{
              height: 100,
              width: 170,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                margin: 20,
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Animation
            </Text>
          </View>
        </Animatable.View>
        <Animatable.View
          iterationCount="infinite"
          animation="wobble"
          style={{backgroundColor: 'purple'}}>
          <View
            style={{
              height: 100,
              width: 170,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                margin: 20,
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Animation
            </Text>
          </View>
        </Animatable.View>
        <Animatable.View
          iterationCount="infinite"
          animation="lightSpeedIn"
          style={{backgroundColor: 'black'}}>
          <View
            style={{
              height: 100,
              width: 170,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                margin: 20,
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Animation
            </Text>
          </View>
        </Animatable.View>
        <Animatable.View
          iterationCount="infinite"
          animation="zoomInDown"
          style={{backgroundColor: 'blue'}}>
          <View
            style={{
              height: 100,
              width: 170,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                margin: 20,
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Animation
            </Text>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

export default Animation;
