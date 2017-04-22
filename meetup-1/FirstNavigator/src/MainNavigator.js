import React, { Component } from 'react';
import { View, StyleSheet, Navigator } from 'react-native';

import FirstScene from './FirstScene';
import SecondScene from './SecondScene';
import ThirdScene from './ThirdScene';

export default class MainNavigator extends Component {

  sceneConfig(route) {
    switch (route.name) {
      case 'ThirdScene':
        return Navigator.SceneConfigs.FloatFromBottom;
      default:
        return Navigator.SceneConfigs.FloatFromRight;
    }
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case 'FirstScene':
        return <FirstScene navigator={navigator} />;
      case 'SecondScene':
        return <SecondScene navigator={navigator} data={route.data} />;
      case 'ThirdScene':
        return <ThirdScene navigator={navigator} />;
    }
  }

  render() {
    return <Navigator
              initialRoute={{ name: 'FirstScene' }}
              renderScene={this.renderScene.bind(this)}
              configureScene={this.sceneConfig}
            />;
  }

}
