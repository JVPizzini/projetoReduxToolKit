import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { PokemonList } from "../../store/apis/Pokemon";
import { useGetPokemonQuery } from "../../store/apis/Pokemon";
import { getPokemons, getBackPagePokemons } from "../../store/slices/pokemon/";

export function Pokemons() {
  const { isLoading, page, pokemons } = useSelector(
    (state: RootState) => state.pokemon
  );
  const dispatch = useDispatch();
  function handleLinkPokemon(pokemon: string) {
    Alert.alert("Entrar no link", "Informações no JSON", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Entrar",
        onPress: () =>
          Linking.openURL(`https://pokeapi.co/api/v2/pokemon/${pokemon}`),
      },
    ]);
  }

  useEffect(() => {
    dispatch(getPokemons() as any);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Pokemons {isLoading && <ActivityIndicator />}</Text>
      <Text>{`Página: ${page}`}</Text>
      <Text>{"\r"}</Text>
      <View />
      <View
        style={{
          width: "100%",
          paddingTop: 10,
          paddingBottom: 10,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          disabled={page === 1}
          title="Back"
          onPress={() => dispatch(getBackPagePokemons(page) as any)}
        />
        <Button
          title="Next"
          onPress={() => dispatch(getPokemons(page) as any)}
        />
      </View>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => String(item.name)}
        renderItem={(item) => (
          <View style={{ marginBottom: 10 }}>
            <Button
              title={item.item.name}
              onPress={() => handleLinkPokemon(item.item.name)}
            />
          </View>
        )}
        style={{
          width: "80%",
          marginBottom: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    padding: 20,
    paddingTop: 50,
  },
});
