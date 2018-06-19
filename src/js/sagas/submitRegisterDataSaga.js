import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import axios from "axios";

export default function* submitRegisterDataSaga(action) {
  const data = action.payload;
  yield put(actions.submitRegisterDataAttempt());
  try {
    yield call(api.submitRegisterApi, data);
    yield put(actions.submitRegisterDataSuccess());
    yield put(actions.resetSignUp());
  } catch (e) {
    yield put(actions.submitRegisterDataError(e.response.data));
  }
}
