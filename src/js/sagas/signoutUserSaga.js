import { push } from "react-router-redux";
import { put } from "redux-saga/effects";
export default function*() {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("avatar");
  yield put(push("/"));
}
