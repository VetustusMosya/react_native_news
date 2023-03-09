import {
  HomeNavigation,
  TabNavigation
} from './screens/Navigation';
import {
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <>
      <HomeNavigation />
      <StatusBar
        backgroundColor="#567b95"
        barStyle='dark-content'
      />
    </>
  );
}
