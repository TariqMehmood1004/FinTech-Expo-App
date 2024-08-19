import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import StartPage from '@/app/index';

AppRegistry.registerComponent('main', () => StartPage);
registerRootComponent(StartPage);
