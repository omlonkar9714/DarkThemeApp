import React, {Component} from 'react';
import {View, Text, Image, ToastAndroid, Keyboard} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import ProgressWebView from 'react-native-progress-webview';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchUrl: '',
      searchPressed: false,
      url: 'https://facebook.github.io/react-native/',
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ccc',
        }}>
        <View
          style={{
            backgroundColor: 'black',
            borderRadius: 10,
            margin: 5,
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            containerStyle={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <Icon
                onPress={() => {
                  ToastAndroid.show(
                    'Searching for your url',
                    ToastAndroid.SHORT,
                  );
                  Keyboard.dismiss();
                  this.setState({searchPressed: true});
                }}
                name="search"
                color="white"
                size={20}></Icon>
            </View>
          </TouchableOpacity>

          <View style={{flex: 1}}>
            <TextInput
              style={{padding: 10, color: 'white'}}
              placeholder="Search here"
              value={this.state.searchUrl}
              selectionColor="#ccc"
              onChangeText={(text) => {
                this.setState({searchUrl: text});
              }}
              placeholderTextColor="white"></TextInput>
          </View>
          <TouchableOpacity
            containerStyle={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                onPress={() => {
                  ToastAndroid.show(
                    'Searching for your url',
                    ToastAndroid.SHORT,
                  );
                  Keyboard.dismiss();
                  this.setState({searchPressed: true});
                  this.props.navigation.navigate('WebView', {
                    url: this.state.searchUrl,
                  });
                }}
                name="microphone"
                color="white"
                size={20}></Icon>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.setState({url: 'https://facebook.com'});
          }}>
          <View
            style={{
              height: 70,
              width: 70,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'black',
              margin: 10,
              borderRadius: 5,
            }}>
            <Icon name="facebook" size={50} color="white"></Icon>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            height: 300,
            marginHorizontal: 10,
            widht: '100%',
            backgroundColor: 'powderblue',
          }}>
          <ProgressWebView source={{uri: this.state.url}} />
        </View>
      </View>
    );
  }
}

export default Home;
