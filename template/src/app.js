import { Navigation } from 'react-native-navigation';

import { registerViews } from './views';

registerViews();

const _tabs = [
  {
    label: 'Tab1',
    screen: 'tabs.tab1', // this is a registered name for a tab
    icon: require('./assets/images/ios7-home-outline.png'),
    selectedIcon: require('./assets/images/ios7-home.png'),
    title: 'Tab1'
  },
  {
    label: 'Tab2',
    screen: 'tabs.tab2',
    icon: require('./assets/images/social-apple-outline.png'),
    selectedIcon: require('./assets/images/social-apple.png'),
    title: 'Tab2'
  },
  {
    label: 'Tab3',
    screen: 'tabs.tab3',
    icon: require('./assets/images/social-android-outline.png'),
    selectedIcon: require('./assets/images/social-android.png'),
    title: 'Tab3'
  }
]
// start the app
Navigation.startTabBasedApp({
  tabs: _tabs
});
