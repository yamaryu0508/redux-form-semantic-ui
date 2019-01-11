import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Store";
import showResults from "./showResults";
import ValidationForm from "./ValidationForm";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Validation Form with Redux Form & Semantic UI</h2>
      <ValidationForm onSubmit={showResults} />
    </div>
  </Provider>,
  rootEl
);
