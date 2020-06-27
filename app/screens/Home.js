import React, {Component} from 'react';
import {View, Text, FlatList, CheckBox, ToastAndroid} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      contacts: [
        {name: 'Omkar', id: Math.random(), ischecked: false},
        {name: 'Omdya', id: Math.random(), ischecked: false},
        {name: 'Omkya', id: Math.random(), ischecked: false},
        {name: 'Omku', id: Math.random(), ischecked: false},
        {name: 'Omi', id: Math.random(), ischecked: false},
        {name: 'Om', id: Math.random(), ischecked: false},
      ],
    };
  }

  onChecked = (item) => {
    let updatedContacts = this.state.contacts;
    for (let i = 0; i < updatedContacts.length; i++) {
      if (item.id == updatedContacts[i].id) {
        if (updatedContacts[i].ischecked) {
          ToastAndroid.show(
            item.name + ' removed from list !!!',
            ToastAndroid.SHORT,
          );
        } else {
          ToastAndroid.show(
            item.name + ' added to list !!!',
            ToastAndroid.SHORT,
          );
        }
        updatedContacts[i].ischecked = !updatedContacts[i].ischecked;
      }
    }
    this.setState({contacts: updatedContacts});
  };

  getCount = () => {
    let count = 0;
    for (let i = 0; i < this.state.contacts.length; i++) {
      if (this.state.contacts[i].ischecked) {
        count = count + 1;
      }
    }
    return count;
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ccc',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: '100%'}}>
          <FlatList
            data={this.state.contacts}
            renderItem={({item}) => (
              <View
                style={{
                  borderColor: 'red',
                  borderWidth: 1,
                  borderRadius: 20,
                  marginTop: 20,
                  marginHorizontal: 10,
                  backgroundColor: '#f50',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>
                  <View>
                    <CheckBox
                      value={item.ischecked}
                      onValueChange={() => this.onChecked(item)}
                      style={{color: 'red', borderColor: 'red'}}
                    />
                  </View>
                  <View>
                    <Text>{item.name} </Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id + 'a'}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text>Selected Contacts :: {this.getCount()}</Text>
        </View>
      </View>
    );
  }
}

export default Home;
