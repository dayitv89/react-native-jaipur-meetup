import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class SceneB extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 30,
          backgroundColor: 'blue',
        }}
      >
        <Text>Scene B</Text>
        <Text>Sub-Title</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigator.pop();
          }}
        >
          <Text> Previous </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigator.push({
              title: 'SceneA',
              config: 'modal',
            });
          }}
        >
          <Text> Next </Text>
        </TouchableOpacity>

      </View>
    );
  }
}
