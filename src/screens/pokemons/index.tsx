import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Linking,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  startLoadingPokemons,
  stopLoadingPokemons,
  getPokemons,
  getBackPagePokemons,
} from "../../store/slices/pokemon/";

export function Pokemons() {
  const { isLoading, page, pokemons } = useSelector(
    (state: RootState) => state.pokemon
  );

  const dispatch = useDispatch();

  function handlePokemon(link: string) {
    Linking.openURL(link);
  }

  useEffect(() => {
    dispatch(getPokemons() as any);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Pokemons</Text>
      <Text>{`Página: ${page}`}</Text>
      <Text>{"\r"}</Text>
      <View />
      <FlatList
        data={pokemons}
        keyExtractor={(item) => String(item.name)}
        renderItem={(item) => (
          <View style={{ marginBottom: 10 }}>
            <Button
              title={item.item.name}
              onPress={() => handlePokemon(item.item.url)}
            />
          </View>
        )}
        style={{
          maxHeight: 200,
          width: "80%",
          // backgroundColor: "blue",
        }}
      ></FlatList>
      {isLoading && <ActivityIndicator />}
      <View
        style={{
          width: "100%",
          paddingTop: 10,
          flexDirection: "row",
          marginRight: 5,
          justifyContent: "space-evenly",
        }}
      >
        <Button
          title="start load"
          onPress={() => dispatch(startLoadingPokemons())}
        />
        <Button
          title="stop load"
          onPress={() => dispatch(stopLoadingPokemons())}
        />
        <Button
          disabled={page === 1}
          title="Back"
          onPress={() => dispatch(getBackPagePokemons(page) as any)}
        />
        <Button title="Next" onPress={() => dispatch(getPokemons(page) as any)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    // backgroundColor: "red",
  },
});
