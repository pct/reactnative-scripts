import { Navigation } from 'react-native-navigation';

import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

// register all screens of the app (including internal ones)
export function registerViews() {
  Navigation.registerComponent('tabs.tab1', () => Tab1);
  Navigation.registerComponent('tabs.tab2', () => Tab2);
  Navigation.registerComponent('tabs.tab3', () => Tab3);
}
