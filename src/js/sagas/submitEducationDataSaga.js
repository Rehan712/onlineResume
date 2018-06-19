import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* submitEducationDataSaga(action) {
  const data = action.payload;

  yield put(actions.submitEducationDataAttempt());
  try {
    yield call(api.submitEducationApi, data);
    yield put(actions.submitEducationDataSuccess());
    yield put(actions.resetEducation());
    yield put(push("/dashboard"));
  } catch (e) {
    yield put(actions.submitEducationDataError(e.response.data));
  }
}
