import { combineReducers } from "redux";
import inputSignupReducer from "./inputSignupReducer";
import inputLoginDataReducer from "./inputLoginDataReducer";
import getRegisterDataReducer from "./getRegisterDataReducer";
import getCurrentProfileReducer from "./getCurrentProfileReducer";
import inputProfileDataReducer from "./inputProfileDataReducer";
import inputExperienceReducer from "./inputExperienceReducer";
import inputEducationReducer from "./inputEducationReducer";
import getAllProfileReducer from "./getAllProfileReducer";
import getProfileHandleReducer from "./getProfileHandleReducer";

const rootReducer = combineReducers({
  inputSignupData: inputSignupReducer,
  inputLoginData: inputLoginDataReducer,
  registerData: getRegisterDataReducer,
  profileData: getCurrentProfileReducer,
  inputProfileData: inputProfileDataReducer,
  inputExperienceData: inputExperienceReducer,
  inputEducationData: inputEducationReducer,
  allProfilesData: getAllProfileReducer,
  getProfileHandle: getProfileHandleReducer
});

export default rootReducer;
