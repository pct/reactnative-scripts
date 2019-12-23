import React, { Component } from 'react'
import {
  TabView,
  TabBar,
  SceneMap,
} from 'react-native-tab-view'

import Web from './web'
import { SafeAreaView } from 'react-navigation';

export default class Index extends Component {

  state = {
    index: 0,
    routes: global.Config.tabs
  }

  handleIndexChange = (index) =>
    this.setState({
      index,
    });

  renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled
      style={{ backgroundColor: '#453AA4'}}
    />
  )

  renderSceneMap = () => {
    let tabs = {}
    global.Config.tabs.forEach(element => {
      tabs[element.key] = Web
    })

    return tabs
  }

  renderScene = SceneMap(this.renderSceneMap())

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.handleIndexChange}
      />
    )
  }
}
