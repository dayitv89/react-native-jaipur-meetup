/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MainNavigator from './src/MainNavigator';

export default class FirstNavigator extends Component {
  render() {
    return <MainNavigator />;
  }
}

AppRegistry.registerComponent('FirstNavigator', () => FirstNavigator);
