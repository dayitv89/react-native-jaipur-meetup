import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class SecondScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the SecondScene component</Text>
        <Text>{this.props.data}</Text>
          <Button
            onPress={() => this.props.navigator.pop()}
            title='back to first scene'
            color='green'
          />
          <Button
            onPress={() => {
              this.props.navigator.push({name: 'ThirdScene', data: 'I am from SecondScene' });
            }}
            title='Third Scene'
            color='purple'
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
