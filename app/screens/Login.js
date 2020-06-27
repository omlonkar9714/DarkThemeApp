import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          onPress={() => {
            this.props.navigation.openDrawer();
          }}>
          Login
        </Text>
      </View>
    );
  }
}

export default Login;
