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

// function* getCurrentUser() {
//   const response = yield call(requestGetCurrentUser)
//   const {data, status} = response
//   if(status === STATUS_CODE.SUCCESS) {
//     yield put({
//       type: 'GET_CURRENT_USER_SUCCESS',
//       payload: {
//         data
//       }
//     })
//   }
//   else {
//     yield put({
//       type: 'GET_CURRENT_USER_FAIL',
//       payload: {
//         error: data
//       }
//     })
//   }
// }

export default watchAddTodoWithNotification;
