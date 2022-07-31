import actionTypes from "./actionTypes";
import { getAllCodeService } from "../../services/userService";
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("GENDER");
      // console.log(">>>>>>>>>>>>>FROM ADMINACTION", res);
      if (res) {
        // console.log("hoidanit check getState", getState);
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
