import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  AsyncStorage,
  Animated,
  Easing,
  ToastAndroid,
} from 'react-native';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.handleAnimation();
  }

  handleAnimation = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.bounce,
    }).start(({finished}) => {});
  };

  render() {
    return (
      <View style={styles.maincontainer}>
        <View
          style={[
            {
              justifyContent: 'center',
            },
            styles.container,
          ]}>
          <View
            style={{
              height: 200,
              backgroundColor: '#ccc',
              width: 300,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Animated.Image
              source={{uri: 'https://i.redd.it/2vpqr3i54sy11.jpg'}}
              resizeMode="contain"
              style={{
                flex: 1,
                aspectRatio: 1.5,
                opacity: this.animatedValue,
                transform: [
                  {
                    scaleX: this.animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                  },
                  {
                    scaleY: this.animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                  },
                ],
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },

  container: {
    flex: 8,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
