import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./styles/styles.scss";
import store from "./store";
import AppRouter from "./AppRouter";

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
