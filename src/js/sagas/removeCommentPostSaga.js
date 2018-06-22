import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* removeCommentPostSaga(action) {
  const { id, commentId } = action.payload;
  if (confirm("Are you sure to permanent delete comment")) {
    yield put(actions.removeCommentPostAttempt());
    try {
      yield call(api.removeCommentPostApi, id, commentId);
      yield put(actions.removeCommentPostSuccess());
    } catch (e) {
      yield put(actions.removeCommentPostError(e.response.data));
    }
  }
}
