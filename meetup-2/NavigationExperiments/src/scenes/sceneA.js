import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 30,
          backgroundColor: 'blue',
        }}
      >
        <Text>Scene A1</Text>
        <Text>Sub-Title</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              counter: this.state.counter + 1
            });
          }}
        >
          <Text> Counter: {this.state.counter} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigator.push({
              title: 'SceneB',

            });
          }}
        >
          <Text> Next </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigator.pop();
          }}
        >
          <Text> Previous </Text>
        </TouchableOpacity>

      </View>
    );
  }
}
