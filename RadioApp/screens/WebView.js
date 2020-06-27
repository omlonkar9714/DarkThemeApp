import React, {Component} from 'react';
import {View, Text, Image, ToastAndroid, Keyboard} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import ProgressWebView from 'react-native-progress-webview';

class WebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: '',
    };
  }

  componentDidMount = () => {
    const params = this.props.route.params;
    ToastAndroid.show(
      'Here in second tab navigator in WebView page' +
        JSON.stringify(params.name),
      ToastAndroid.SHORT,
    );

    console.log('Params ' + JSON.stringify(params));
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            // marginHorizontal: 10,
            widht: '100%',
            backgroundColor: 'powderblue',
          }}>
          <Text
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
            style={{fontSize: 30}}>
            Params ::::{this.state.params}
          </Text>
          <ProgressWebView
            color="red"
            source={{
              uri: 'https://www.facebook.com/omkar.lonkar.946?ref=bookmarks',
            }}
          />
        </View>
      </View>
    );
  }
}

export default WebView;
