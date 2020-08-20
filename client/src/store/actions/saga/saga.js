import { delay } from "redux-saga/effects";
import { put, takeEvery } from "redux-saga/effects";

import actions from "./index";
import types from "./types";

function* watchAddTodoWithNotification() {
  yield takeEvery(
    types.TODO_ADD_WITH_NOTIFICATION,
    handleAddTodoWithNotification
  );
}

function* handleAddTodoWithNotification(action) {
  const { name, id } = action.payload;
  yield put(actions.doAddTodo(id, name));
  yield delay(3000);
  yield put(actions.doHideNotification(id));
}

export default watchAddTodoWithNotification;
