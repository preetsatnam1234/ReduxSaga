import {
  TASK_LIST_REQUEST,
  TASK_LIST_REQUEST_SUCCESS,
  TASK_LIST_REQUEST_FAIL,
  TASK_LIST_DELETE_REQUEST,
  TASK_LIST_DELETE_SUCCESS,
  TASK_LIST_DELETE_FAIL,
  TASK_LIST_UPDATE_REQUEST,
  TASK_LIST_UPDATE_SUCCESS,
  TASK_LIST_UPDATE_FAIL,
} from "../Constants";
export const taskListRequest = () => ({
  type: TASK_LIST_REQUEST,
});
export const taskListRequestSuccess = (data) => ({
  type: TASK_LIST_REQUEST_SUCCESS,
  payload: data,
});
export const taskListRequestFail = (error) => ({
  type: TASK_LIST_REQUEST_FAIL,
  payload: error,
});
export const taskListDeleteRequest = (id) => ({
  type: TASK_LIST_DELETE_REQUEST,
  id,
});
export const taskListDeleteRequestSuccess = (data) => ({
  type: TASK_LIST_DELETE_SUCCESS,
  payload: data,
});
export const taskListDeleteRequestFail = (error) => ({
  type: TASK_LIST_DELETE_FAIL,
  payload: error,
});
export const taskListUpdateRequest = (id, formData) => ({
  type: TASK_LIST_UPDATE_REQUEST,
  id,
  formData,
});
export const taskListUpdateRequestSuccess = (data) => ({
  type: TASK_LIST_UPDATE_SUCCESS,
  payload: data,
});
export const taskListUpdateRequestFail = (error) => ({
  type: TASK_LIST_UPDATE_FAIL,
  payload: error,
});
