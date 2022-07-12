import React from "react";
import { StatusBar } from "expo-status-bar";
import type { RootState } from "../src/store";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./store/slices/counter";
import { Pokemons } from "./screens/pokemons";

export default function Application() {
  const { value } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text>Open up App.js to start working on your app!</Text>
        <Text>deu bom!</Text>

        <View>
          <Text>{value}</Text>
          <Button title="Increment" onPress={() => dispatch(increment())} />
          <Button title="Decrement" onPress={() => dispatch(decrement())} />
          <Button
            title="incremente by amount"
            onPress={() => dispatch(incrementByAmount(12))}
          />
          <Button
            title="decrement by amount"
            onPress={() => dispatch(decrementByAmount(10))}
          />
          <Button
            title="decrement by amount"
            onPress={() => dispatch(decrementByAmount(10))}
          />
        </View>
      </View>
      <Pokemons />
    </>
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
