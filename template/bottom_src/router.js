import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import IndexScreen from './screens/index'

RouterStack = createStackNavigator({
  Index: {
    screen: IndexScreen
  },
}, {
  navigationOptions: {
    header: null
  }
}, {
  initialRouteName: 'Index'
})

exports.Router = createAppContainer(RouterStack)
