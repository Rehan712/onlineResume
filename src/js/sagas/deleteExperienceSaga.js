import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* deleteExperienceSaga(action) {
  const id = action.payload;
  yield put(actions.deleteExperienceAttempt());
  try {
    yield call(api.deleteExperienceApi, id);
    yield put(actions.deleteExperienceSuccess());
    yield put(push("/dashboard"));
  } catch (e) {
    yield put(actions.deleteExperienceError(e.response.data));
  }
}
