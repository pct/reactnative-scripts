import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import IndexScreen from './screens/index'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Index"
    >
      <Stack.Screen name="Index" component={IndexScreen} />
    </Stack.Navigator>
  )
}

export default function Router() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
