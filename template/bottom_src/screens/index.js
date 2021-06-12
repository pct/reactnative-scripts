import React, { Component, useState } from 'react'
import { BottomNavigation } from 'react-native-paper'

import Home from './home'
import Scan from './scan'

export default function Index (navigation) {
  const [navIndex, setNavIndex] = useState(0)

  const navigationState = {
    index: navIndex,
    routes: [
      { key: 'home', title: '首頁' },
      { key: 'scan', title: '掃描' },
    ],
  };

  const handleIndexChange = (index) => setNavIndex(index)

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    scan: Scan,
  })

  return (
    <BottomNavigation
      navigationState={navigationState}
      onIndexChange={handleIndexChange}
      renderScene={renderScene}
    />
  )
}

