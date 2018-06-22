import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";

export default function* addCommentPostSaga(action) {
  const { id, data } = action.payload;
  yield put(actions.addCommentPostAttempt());
  try {
    yield call(api.addCommentPostApi, id, data);
    yield put(actions.addCommentPostSuccess());
  } catch (e) {
    yield put(actions.addCommentPostError(e.response.data));
  }
}
