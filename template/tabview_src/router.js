import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import IndexScreen from './screens/index'
import WebScreen from './screens/web'

const Stack = createStackNavigator()

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Index"
    >
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen name="Web" component={WebScreen} />
    </Stack.Navigator>
  )
}

export default function Router() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}
