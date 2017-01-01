import React, { Component } from 'react';

import {Scene, Router} from 'react-native-router-flux';

// components
import Index from '../components/index';
import Item from '../components/item';

export default class Route extends Component {
  render() {
    return(
      <Router hideNavBar>
        <Scene key="root">
          <Scene key="index" component={Index} title="Index" />
          <Scene key="item" component={Item} title="Item" />
        </Scene>
      </Router>
    )
  }
}
