import actionTypes from "./actionTypes";
// import { getAllCodeService, getUser } from "../../services/userService";
// import { createUserService } from "../../services/userService";
// import { deleteUserService } from "../../services/userService";
// import { updateUserService } from "../../services/userService";
// import { getTopDoctorHome } from "../../services/userService";
import {
  getAllCodeService,
  getUser,
  createUserService,
  deleteUserService,
  updateUserService,
  getTopDoctorHome,
  getAllDoctor,
  saveDetailDoctorService
} from "../../services/userService";
// import {}
import { toast } from "react-toastify";
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
      console.log("DATA in action", data);
      let res = await createUserService(data);
      if (res) {
        toast.success("create new user success");
        dispatch(saveUserSuccess());
        dispatch(fetchAllUserStart()); //specical dispatch after create new user
      } else {
        dispatch(saveUserFailed());
      }
    } catch (e) {
      saveUserFailed();
      console.log(e);
    }
  };
};
export const deleteUserAction = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      if (res) {
        toast.success("delete user success");
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUserStart()); //specical dispatch after create new user
      } else {
        dispatch(deleteUserFailed());
      }
    } catch (e) {
      saveUserFailed();
      console.log(e);
    }
  };
};
export const EditUserAction = (user) => {
  console.log("__________________eDITUSERACTION_______________.......");
  return async (dispatch, getState) => {
    try {
      let res = await updateUserService(user);
      if (res) {
        toast.success("update user success");
        dispatch(updateUserSuccess());
        dispatch(fetchAllUserStart()); //specical dispatch after create new user
      } else {
        dispatch(updateUserFailed());
      }
    } catch (e) {
      saveUserFailed();
      console.log(e);
    }
  };
};

export const updateUserSuccess = () => ({
  type: actionTypes.UPDATE_USER_SUCCESS,
});
export const updateUserFailed = () => ({
  type: actionTypes.UPDATE_USER_FAILED,
});

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});
export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
});

export const fetchAllUserStart = () => {
  return async (dispatch, getState) => {
    console.log("A: FETALLUSERSTART ACTION");
    try {
      let res = await getUser("ALL");

      //additional
      // let res1= await getTopDoctorHome("")
      // console.log("*************CHECKRESPONSE", res1)
      if (res) {
        dispatch(fetchAllUserSuccess(res.data.users.reverse()));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (e) {
      fetchRoleFailed();
      console.log(e);
    }
  };
};

//EXAMPLE FUNCTION IN ACTION CAN PASS SOME CURRENT BUG
export const fetchTopDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopDoctorHome("5");

      if (res && res.data.errorCode === 0) {
        console.log("ST1 data to action ", res);
        dispatch({
          type: actionTypes.FETCH_DOCTOR_SUCCESS,
          topDoctors: res.data.topDoctors,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_DOCTOR_FAILED,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
//EXAMPLE FUNCTION IN ACTION CAN PASS SOME CURRENT BUG
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

export const fetchAllDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllDoctor();

      if (res && res.data.errorCode === 0) {
        console.log("Fetch all doctor success", res.data.allDoctor);
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
          allDoctor: res.data.allDoctor,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
export const saveDetailDoctor =  (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await saveDetailDoctorService(data);

      if (res && res.data.errorCode === 0) {
        toast.success("save info detail success");
        dispatch({
          type: actionTypes.CREATE_DETAIL_DOCTOR_SUCCESS,
         
        });
      } else {
        toast.error("save info detail failed");
        dispatch({
          type: actionTypes.CREATE_DETAIL_DOCTOR_FAILED,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchAllDoctorSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
  users: data,
});
export const fetchAllDoctorFailed = () => ({
  type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
});
