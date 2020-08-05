import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import manageUsers from "./reducers/manageUsers";

// In src/index.js, use the createStore method from redux, passing in the provided reducer,
// manageUsers, to create a store.

//Use Provider from react-redux to wrap <App />, passing store as a prop to the Provider. T
//his will give your components access to the store.

// add imports and code
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

ReactDOM.render(
  // add imports and code
  <Provider store={store}>
    <App />
  </Provider>,
  // add imports and code
  document.getElementById("root")
);
