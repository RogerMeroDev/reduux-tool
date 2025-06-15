import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';

const PokemonInfoScreen = () => {
  const { pokemon } = useSelector(state => state.pokemon);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos del Pokémon Global</Text>
      {pokemon ? (
        <View style={styles.pokemonBox}>
          <Text>ID: {pokemon.id}</Text>
          <Text>Nombre: {pokemon.name}</Text>
            <Text>Experiencia Base: {pokemon.base_experience}</Text>
          <Text>Altura: {pokemon.height}</Text>
          <Text>Peso: {pokemon.weight}</Text>
          <Image source={{ uri: pokemon.sprite }} style={styles.image} />
        </View>
      ) : (
        <Text>No hay Pokémon seleccionado.</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pokemonBox: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default PokemonInfoScreen;
