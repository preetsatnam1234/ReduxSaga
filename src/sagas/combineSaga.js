import { all } from "redux-saga/effects";
import { watcherDeleteSaga, watcherSaga, watcherUpdateSaga } from "./rootSaga";
export default function* combineSaga() {
  yield all([watcherSaga(), watcherDeleteSaga(), watcherUpdateSaga()]);
}
