import React, { Component } from 'react';

import {
  Navigator,
} from 'react-native';

import SceneA from '../scenes/sceneA';
import SceneB from '../scenes/sceneB';

export default class MainNavigator extends Component {

  renderScene(route, navigator) {
    switch (route.title) {
      case 'SceneB':
        return (
          <SceneB
            navigator={navigator}
          />
        );
      break;
      default:
        return (
          <SceneA
            navigator={navigator}
          />
        );
    }
  }

  sceneConfig(router) {
    if (router.config === 'modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Awesome' }}
        renderScene={this.renderScene}
        configureScene={this.sceneConfig}
      />
    );
  }

}
