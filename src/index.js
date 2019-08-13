import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import TheGuardianService from "./services/the-guardian-service";
import { TheGuardianServiceProvider } from "./components/the-guardian-service-context";
import ErrorBoundry from "./components/error-boundry";

import store from "./store";

const theGuardianService = new TheGuardianService();

ReactDOM.render(
  <Provider store={store}>
      <TheGuardianServiceProvider value={theGuardianService}>
        <App />
      </TheGuardianServiceProvider>
  </Provider>,
  document.getElementById("root")
);
