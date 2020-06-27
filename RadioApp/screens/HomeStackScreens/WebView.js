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

    // const params = JSON.stringify(
    //   this.props.navigation.getParam('url', 'nourl'),
    // );
    // this.setState({params: params});
    // ToastAndroid.show('Params :' + JSON.stringify(params));
    // const {navigation} = this.props;
    // const url = navigation.getParams('url', 'NO-URL');
    //  const {navigation} = this.props;
    //  const user_info = navigation.getParam('info', 'NO-User');
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
          <Text>Params ::::{this.state.params}</Text>
          <ProgressWebView
            source={{uri: 'https://facebook.github.io/react-native/'}}
          />
        </View>
      </View>
    );
  }
}

export default WebView;
