import React, {Component} from 'react';
import {View, Text} from 'react-native';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text> About </Text>
      </View>
    );
  }
}

export default About;
