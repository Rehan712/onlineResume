import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* submitExperienceDataSaga(action) {
  const data = action.payload;
  yield put(actions.submitExperienceDataAttempt());
  try {
    yield call(api.submitExperienceApi, data);
    yield put(actions.submitExperienceDataSuccess());
    yield put(actions.resetExperience());
    yield put(push("/dashboard"));
  } catch (e) {
    yield put(actions.submitExperienceDataError(e.response.data));
  }
}
