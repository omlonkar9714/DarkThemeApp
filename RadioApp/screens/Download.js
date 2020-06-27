import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text
          onPress={() => {
            this.props.navigation.navigate('HomeTab1');
          }}
          style={{fontSize: 30}}>
          Download
        </Text>
      </View>
    );
  }
}

export default Download;
