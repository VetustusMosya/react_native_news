import { Navigation } from './screens/Navigation';
import {
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <><Navigation />
      <StatusBar
        backgroundColor="#567b95"
      />
    </>
  );
}
