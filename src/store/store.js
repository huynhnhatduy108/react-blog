import createSagaMiddleware from "@redux-saga/core";
import reducer from "./reducer";
import rootSaga from "./saga";
import { createLogger } from "redux-logger";
import { configureStore, Middleware } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer,
  middleware: (gd) => gd().concat(...middlewares)
});

sagaMiddleware.run(rootSaga);

export default store;