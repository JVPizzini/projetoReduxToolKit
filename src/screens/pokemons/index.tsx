import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export function Pokemons() {
  return (
    <View style={styles.container}>
      <Text>Pokemons</Text>
      <View />
      <FlatList
        data={[
          { id: 1, name: "pickachu" },
          { id: 2, name: "bubasauro" },
        ]}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <Text>{item.item.name}</Text>}
      >
        <Text></Text>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
