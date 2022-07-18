import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "../../store/slices/GerenciarState";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export function GerenciarState() {
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
        </View>
      </View>
    </>
  );
}
