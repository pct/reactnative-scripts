import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import IndexScreen from './screens/index'
import WebScreen from './screens/web'

RouterStack = createStackNavigator({
  Index: {
    screen: IndexScreen
  },
  Web: {
    screen: WebScreen
  }
}, {
  navigationOptions: {
    header: null
  }
}, {
  initialRouteName: 'Index'
})

exports.Router = createAppContainer(RouterStack)
