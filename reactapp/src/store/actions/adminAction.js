import actionTypes from "./actionTypes";
import { getAllCodeService, getUser } from "../../services/userService";
import { createUserService } from "../../services/userService";
// import {}
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });
      let res = await getAllCodeService("GENDER");
      if (res) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (e) {
      fetchGenderFailed();
      console.log(e);
    }
  };
};
export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});
export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});
export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});
export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
});

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});
export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});
export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("POSITION");
      if (res) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (e) {
      fetchPositionFailed();
      console.log(e);
    }
  };
};
export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      if (res) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (e) {
      fetchRoleFailed();
      console.log(e);
    }
  };
};

export const createUserAction = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createUserService(data);
      if (res) {
        dispatch(saveUserSuccess());
        dispatch(fetchAllUserStart());//specical dispatch after create new user
      } else {
        dispatch(saveUserFailed());
      }
    } catch (e) {
      saveUserFailed();
      console.log(e);
    }
  };
};

export const fetchAllUserStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getUser("ALL");
      if (res) {
        dispatch(fetchAllUserSuccess(res.data.users));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (e) {
      fetchRoleFailed();
      console.log(e);
    }
  };
};
export const fetchAllUserSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USER_SUCCESS,
  users: data,
});
export const fetchAllUserFailed = () => ({
  type: actionTypes.FETCH_ALL_USER_FAILED,
});

export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const saveUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAILED,
});
