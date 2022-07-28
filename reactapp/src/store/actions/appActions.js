import { languages } from "../../utils";
import actionTypes from "./actionTypes";

export const appStartUpComplete = () => ({
  type: actionTypes.APP_START_UP_COMPLETE,
});

export const setContentOfConfirmModal = (contentOfConfirmModal) => ({
  type: actionTypes.SET_CONTENT_OF_CONFIRM_MODAL,
  contentOfConfirmModal: contentOfConfirmModal,
});

//changeLanguageAction la mot function (la 2 arrow function)
//return 1obj : key la type(required)
export const changeLanguageAction = (language) => ({
  type: actionTypes.CHANGE_LANGUAGE,
  language: language,
});
