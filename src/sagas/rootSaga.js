import { takeEvery, takeLatest } from "redux-saga/effects";
// import { GET_USER, DELETE_USER } from "../reducers/userReducers";
import {
  handleGetUser,
  handleDeleteUser,
  handleUpdateUser,
} from "./handler/user";
import {
  TASK_LIST_REQUEST,
  TASK_LIST_DELETE_REQUEST,
  TASK_LIST_UPDATE_REQUEST,
} from "../redux/Constants";
export function* watcherSaga() {
  yield takeLatest(TASK_LIST_REQUEST, handleGetUser);
}

export function* watcherDeleteSaga() {
  yield takeLatest(TASK_LIST_DELETE_REQUEST, handleDeleteUser);
}

export function* watcherUpdateSaga() {
  yield takeLatest(TASK_LIST_UPDATE_REQUEST, handleUpdateUser);
}
