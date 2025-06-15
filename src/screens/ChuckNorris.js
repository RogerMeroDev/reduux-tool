import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChuckNorrisJoke } from '../store/chuckNorrisSlice';

const ChuckNorris = () => {
  const dispatch = useDispatch();
  const { joke, icon_url, status, error } = useSelector(state => state.chuckNorris);

  const handleFetchJoke = () => {
    dispatch(fetchChuckNorrisJoke());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chuck Norris Joke</Text>
      <Button title="Get a Joke" onPress={handleFetchJoke} />
      {status === 'loading' && <Text>Loading...</Text>}
      {status === 'failed' && <Text>Error: {error}</Text>}
      {joke ? <Text style={styles.joke}>{joke}</Text> : null}
      {icon_url ? <Image source={{ uri: icon_url }} style={{ width: 50, height: 50, marginTop: 10 }} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  joke: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});
export default ChuckNorris;