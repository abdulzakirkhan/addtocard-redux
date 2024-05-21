import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import {} from "react-redux"
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers  from "./components/Services/Reducers/rootReducers.js"

const store=createStore(rootReducers);


// console.log(store)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
