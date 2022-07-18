import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  useGetTodosIdQuery,
  useGetTodosQuery,
} from "../../store/apis/TodosApi";

export function TodoApp() {
  // const { data: todos, isLoading } = useGetTodosQuery();
  const [page, setPage] = useState(0);
  const { data: todos = [], isLoading } = useGetTodosQuery();

  function nextPage() {
    setPage(page + 1);
  }
  function prevPage() {
    setPage(page - 1);
  }

  return (
    <>
      <View style={styles.container}>
        <Text>jsonplaceholder.typicode.com</Text>
        {isLoading && <ActivityIndicator />}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            padding: 10,
          }}
        >
          <Button title="prev" onPress={prevPage} disabled={page === 0} />
          <Button title="next" onPress={nextPage} />
        </View>
        <FlatList
          data={todos.slice(page, page + 1 * 20)}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <View style={{ padding: 10 }}>
              <Button title={item.item.title} />
            </View>
          )}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // height: "50%",
    flex: 1,
    padding: 50,
  },
});
