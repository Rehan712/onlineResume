import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* deleteProfileDataSaga() {
  yield put(actions.deleteProfileDataAttempt());
  try {
    yield call(api.deleteProfileApi);
    yield put(actions.deleteProfileDataSuccess());
    yield put(push("/"));
  } catch (e) {
    yield put(actions.deleteProfileDataError(e.response.data));
  }
}
