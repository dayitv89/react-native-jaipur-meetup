import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class FirstScene extends Component {

  btnTapped() {
    this.props.navigator.push({name: 'SecondScene', data: 'I am from FirstScene' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the FirstScene component</Text>
          <Button
            onPress={this.btnTapped.bind(this)}
            title='Move To Second Scene'
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
