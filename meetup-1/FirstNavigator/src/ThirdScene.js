import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class ThirdScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the ThirdScene component</Text>
        <Text>{this.props.data}</Text>
        <Button
          onPress={() => this.props.navigator.pop()}
          title='back to second scene'
          color='green'
        />
        <Button
          onPress={() => this.props.navigator.popN(2)}
          title='back to first scene'
          color='green'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
