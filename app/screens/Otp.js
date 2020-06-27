import React, {Component} from 'react';
import {View, Text, TextInput, Button, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
});

class Otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      confirm: null,
      mobile: '',
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{resizeMode: 'contain', height: 100, width: '100%'}}
          source={{
            uri:
              'https://yaobin.me/static/259daa3fefdfe7f677819dd23f1d8288/a111b/banner.jpg',
          }}></Image>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  image: {
    height: '5rem',
    width: '100%',
  },
  style12: {
    fontSize: '8.4rem',
  },
});

export default Otp;
