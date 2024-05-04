import {
  FETCH_JOB_BOARD_REQUEST,
  FETCH_JOB_BOARD_SUCCESS,
  FETCH_JOB_BOARD_FAILURE,
  SET_FILTER,
} from "./actionTypes";

export const fetchJobBoardRequest = () => ({
  type: FETCH_JOB_BOARD_REQUEST,
});

export const fetchJobBoardSuccess = (data: any) => ({
  type: FETCH_JOB_BOARD_SUCCESS,
  payload: data,
});

export const fetchJobBoardFailure = (error: any) => ({
  type: FETCH_JOB_BOARD_FAILURE,
  payload: error,
});


export const setFilter = (filter: any) => ({
  type: SET_FILTER,
  payload: filter,
});
