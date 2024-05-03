import {
  FETCH_JOB_BOARD_REQUEST,
  FETCH_JOB_BOARD_SUCCESS,
  FETCH_JOB_BOARD_FAILURE,
  SET_FILTER,
} from "./actionTypes";

const initialState = {
  jobBoardData: [],
  loading: false,
  error: null,
  filters: {},
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_JOB_BOARD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_JOB_BOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        jobBoardData: action.payload,
      };
    case FETCH_JOB_BOARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
