import * as types from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case types.SUBMIT_EDUCATION_DATA_SUCCESS:
      return action.payload;
    case types.SUBMIT_EXPERIENCE_DATA_SUCCESS:
      return action.payload;
    case types.SIGN_OUT_USER:
      return { display: false };
    default:
      return state;
  }
}
