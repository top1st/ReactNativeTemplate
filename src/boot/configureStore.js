import { AsyncStorage } from "react-native";
import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistCombineReducers  } from "redux-persist";
import rootReducers  from "../reducers";
import promise from "./promise";

const config = {
  key: 'root',
  storage: AsyncStorage
};

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk, promise),
    devTools({
      name: "Refier",
      realtime: true
    })
  );
  const reducers = persistCombineReducers(config, rootReducers);
  const store = createStore(reducers , undefined, enhancer);
  const persistor = persistStore(store);

  return {persistor, store};

}
