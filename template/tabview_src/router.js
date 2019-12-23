import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import IndexScreen from './screens/index'

RouterStack = createStackNavigator({
  Index: {
    screen: IndexScreen
  },
}, {
  navigationOptions: {
  }
}, {
  initialRouteName: 'Index',
    header: null,
    headerMode: 'none'
})

exports.Router = createAppContainer(RouterStack)
