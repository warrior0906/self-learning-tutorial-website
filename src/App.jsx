import React from "react";
import Router from "./screens/router";
import { Provider } from "react-redux";

import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
