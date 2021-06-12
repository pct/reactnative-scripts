import React, { Component, useState } from 'react'
import { BottomNavigation } from 'react-native-paper'

import { Home, Tags, Follow, Search, Login } from './pages'

export default function Index (navigation) {
  const [navIndex, setNavIndex] = useState(0)

  const routes = [
    { key: 'home', title: '發現', color: '#3F51B5' },
    { key: 'search', title: '搜尋', color: '#009688'  },
    { key: 'tags', title: '標籤', color: '#795548'  },
    { key: 'follow', title: '追蹤', color: '#607D8B' },
    { key: 'login', title: '登入', color: '#3F51B5' },
  ]

  const navigationState = {
    index: navIndex,
    routes
  }

  const handleIndexChange = (index) => setNavIndex(index)

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    search: Search,
    tags: Tags,
    follow: Follow,
    login: Login,
  })

  return (
    <BottomNavigation
      navigationState={navigationState}
      onIndexChange={handleIndexChange}
      renderScene={renderScene}
    />
  )
}

