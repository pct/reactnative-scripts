import React, { Component } from 'react';

import {Scene, Router} from 'react-native-router-flux';

// views
import Index from '../views/index';
import Item from '../views/item';

export default class Route extends Component {
  render() {
    return(
      <Router>
        <Scene key="root">
          <Scene key="index" component={Index} title="Index" />
          <Scene key="item" component={Item} title="Item" />
        </Scene>
      </Router>
    )
  }
}
