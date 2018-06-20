import * as types from "../constants";
const initial = {
  isLoading: false,
  error: null,
  data: {}
};
export default function(state = initial, action) {
  switch (action.type) {
    case types.GET_PROFILE_HANDLE_ATTEMPT:
      return { ...state, isLoading: true };
    case types.GET_PROFILE_HANDLE_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.GET_PROFILE_HANDLE_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
