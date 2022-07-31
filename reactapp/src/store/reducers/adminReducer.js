import actionTypes from "../actions/actionTypes";

const initContentOfConfirmModal = {};

const initialState = {
  isLoadingGender: false,
  genders: [],
  roles: [],
  positions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      let cpState = { ...state };
      cpState.isLoadingGender = true;
      return {
        ...state,
      };

    case actionTypes.FETCH_GENDER_SUCCESS:
      let cpState1 = { ...state };
      cpState1.isLoadingGender = false;
      cpState1.genders = action.data;
      return {
        ...cpState1,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      let cpState2 = { ...state };
      cpState2.isLoadingGender = false;
      return {
        ...cpState2,
      };

    case actionTypes.FETCH_POSITION_SUCCESS:
      state.positions = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_FAILED:
      state.positions = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roles = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_FAILED:
      state.roles = [];
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
