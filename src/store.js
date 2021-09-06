import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import {
  taskListReducer,
  taskListDeleteReducer,
  taskListUpdateReducer,
} from "./redux/reducers/userReducer";

import combineSaga from "./sagas/combineSaga";
const rootReducer = combineReducers({
  tasklist: taskListReducer,
  tasklistDelete: taskListDeleteReducer,
  tasklistUpdate: taskListUpdateReducer,
});
const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(combineSaga);

export default store;
