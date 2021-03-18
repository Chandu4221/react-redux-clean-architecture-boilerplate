import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import middleware from "./middleware";

export const _createStore = (services) => {
  const allMiddlewares = middleware.map((f) => f(services));
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware().concat(allMiddlewares),
  });
};
