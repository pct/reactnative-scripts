import React, { Component } from 'react'
import { BottomNavigation } from 'react-native-paper'

import Home from './home'
import Scan from './scan'

export default class Index extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: '首頁', icon: 'home-outline' },
      { key: 'scan', title: '掃描', icon: 'barcode-scan' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    scan: Scan,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    )
  }
}

