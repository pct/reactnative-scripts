import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import IndexScreen from './screens/index'
import HomeScreen from './screens/home'
import ScanScreen from './screens/scan'

const Drawer = createDrawerNavigator()

function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Index">
      <Drawer.Screen name="Index" component={IndexScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Scan" component={ScanScreen} />
    </Drawer.Navigator>
  )
}

export default function Router() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  )
}
