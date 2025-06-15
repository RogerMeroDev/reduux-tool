import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon } from '../store/pokemonSlice';

const PokemonComponent = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { pokemon, status, error } = useSelector(state => state.pokemon);

  const handleSearch = () => {
    if (input) dispatch(fetchPokemon(input.toLowerCase()));
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Nombre de Pokémon"
        style={styles.input}
      />
      <Button title="Buscar" onPress={handleSearch} />
      {status === 'loading' && <Text>Cargando...</Text>}
      {status === 'failed' && <Text>Error: {error}</Text>}
      {pokemon && (
        <View style={styles.pokemonBox}>
          <Text>ID: {pokemon.id}</Text>
          <Text>Nombre: {pokemon.name}</Text>
          <Text>Altura: {pokemon.height}</Text>
          <Text>Peso: {pokemon.weight}</Text>
          <Image source={{ uri: pokemon.sprite }} style={styles.image} />
        </View>
      )}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    width: '80%',
    marginBottom: 12,
  },
  pokemonBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default PokemonComponent;