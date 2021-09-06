import { call, put } from "redux-saga/effects";
// import { setUser } from "../../reducers/userReducers";
import {
  requestGetUser,
  requestDeleteUser,
  requestUpdateUser,
} from "../requests/user";
import {
  taskListRequestSuccess,
  taskListRequestFail,
  taskListDeleteRequestSuccess,
  taskListDeleteRequestFail,
  taskListUpdateRequestSuccess,
  taskListUpdateRequestFail,
} from "../../redux/actions/userActions";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);

    yield put(taskListRequestSuccess(response));
    yield console.log(response);
  } catch (error) {
    yield put(taskListRequestFail(error));
  }
}
export function* handleDeleteUser({ id }) {
  console.log(id);
  try {
    const response = yield call(requestDeleteUser, id);
    yield console.log(response);
    if (response.status === 200) {
      yield call(handleGetUser);
    }
    const { data } = response;
    yield put(taskListDeleteRequestSuccess(data));
  } catch (error) {
    yield put(taskListDeleteRequestFail(error));
  }
}

export function* handleUpdateUser({ id, formData }) {
  try {
    const response = yield call(requestUpdateUser, id, formData);
    yield console.log(response);
    if (response.status === 200) {
      yield call(handleGetUser);
    }
    const { data } = response;
    yield put(taskListUpdateRequestSuccess(data));
  } catch (error) {
    yield put(taskListUpdateRequestFail(error));
  }
}
