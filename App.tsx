import React from "react";
import { store } from "./src/store";
import { Provider } from "react-redux";
import Application from "./src/Application";
export default function App() {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
}
