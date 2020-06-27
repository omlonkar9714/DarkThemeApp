import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

class ShowData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{id:Math.random()}],
    };
  }

  renderItem = () => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          margin: 20,
          borderColor: 'red',
          borderWidth: 2,
          borderRadius: 20,
          padding: 10,
        }}>
        <FlatList
          data={this.state.data}
          keyExtractor={() => {
            Math.random() + '';
          }}
          renderItem={(item) => {
            this.renderItem(item);
          }}></FlatList>
      </View>
    );
  }
}

export default ShowData;
