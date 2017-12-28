import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { StyleProvider } from "native-base";

import { ActivityIndicator } from "react-native";
import App from "../App";
import configureStore from "./configureStore";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

const { persistor, store } = configureStore();

const onBeforeLift = () => {
  // take some action before the gate lifts
};

class Setup extends Component {
  // class Root extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={store}>
          <PersistGate
            loading={<ActivityIndicator />}
            onBeforeLift={onBeforeLift}
            persistor={persistor}
          >
            <App />
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}

// return Root;

export default Setup;
