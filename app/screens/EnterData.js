import React, {Component} from 'react';
import {View, Text, Button, ToastAndroid} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import {saveData} from '../../Redux/Actions/userActions';

class ReduxData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      token: '',
    };
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{borderWidth: 1, borderColor: 'color', width: '80%'}}>
          <TextInput
            placeholder="Enter username"
            onChangeText={(text) => {
              this.setState({username: text});
            }}></TextInput>
        </View>
        <View style={{borderWidth: 1, borderColor: 'color', width: '80%'}}>
          <TextInput
            onChangeText={(text) => {
              this.setState({token: text});
            }}
            placeholder="Enter token"></TextInput>
        </View>
        <View
          style={{
            marginTop: 30,
            width: '80%',
          }}>
          <Button
            title="SAVE"
            onPress={() => {
              this.props.saveData(this.state.username, this.state.token);
            }}></Button>
        </View>
        <View
          style={{
            marginTop: 30,
            width: '80%',
          }}>
          <Button
            title="Show"
            onPress={() => {
              ToastAndroid.show(
                'Username :' +
                  this.props.username +
                  '\n' +
                  'Token : ' +
                  this.props.token,
                ToastAndroid.SHORT,
              );
            }}></Button>
        </View>
      </View>
    );
  }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  console.log('STATE' + JSON.stringify(state));
  // Redux Store --> Component
  return {
    username: state.userReducer.username,
    token: state.userReducer.token,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // Increase Counter
    saveData: (username, token) => dispatch(saveData(username, token)),
    // Decrease Counter
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxData);
