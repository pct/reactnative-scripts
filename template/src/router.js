import { createAppContainer, createStackNavigator } from 'react-navigation'

import IndexScreen from './screens/index'
import ReduxScreen from './screens/redux-demo'
import WebScreen from './screens/web'

RouterStack = createStackNavigator({
  Index: {
    screen: IndexScreen
  },
  Web: {
    screen: WebScreen
  },
  Redux: {
    screen: ReduxScreen
  }
}, {
  navigationOptions: {
    header: null
  }
}, {
  initialRouteName: 'Index'
})

exports.Router = createAppContainer(RouterStack)
