import actionTypes from "../actions/actionTypes";

const initContentOfConfirmModal = {};

const initialState = {
  genders: [],
  roles: [],
  positions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      // console.log("From reducer start................<><><><><><><>", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      // console.log("From reducer success................<><><><><><><>", action);
      let cpState = { ...state };
      cpState.genders = action.data;
      return {
        ...cpState,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      // console.log("From reducer failed.................<><><><><><><>", action);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
