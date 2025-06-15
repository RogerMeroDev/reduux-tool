//app json

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import HomeScreen from './src/screens/HomeScreen';
import PokemonComponent from './src/screens/PokemonComponent';
import PokemonInfoScreen from './src/screens/PokemonInfoScreen';
import ChuckNorris from './src/screens/ChuckNorris';
export default function App() {
  return (
   <Provider store={store}>
    <PokemonComponent />
   
    <ChuckNorris />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
