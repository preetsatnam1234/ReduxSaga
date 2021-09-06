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

export const taskListReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case TASK_LIST_REQUEST:
      return { tasks: [] };
    case TASK_LIST_REQUEST_SUCCESS:
      return { tasks: action.payload };
    case TASK_LIST_REQUEST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
export const taskListDeleteReducer = (state = { task: {} }, action) => {
  switch (action.type) {
    case TASK_LIST_DELETE_REQUEST:
      return { task: {} };
    case TASK_LIST_DELETE_SUCCESS:
      return { tasks: action.payload };
    case TASK_LIST_DELETE_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
export const taskListUpdateReducer = (state = { task: {} }, action) => {
  switch (action.type) {
    case TASK_LIST_UPDATE_REQUEST:
      return { task: {} };
    case TASK_LIST_UPDATE_SUCCESS:
      return { tasks: action.payload };
    case TASK_LIST_UPDATE_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
