import {
  GET_FEEDBACKS,
  LOAD_FEEDBACK,
  FAIL_FEEDBACK,
  GET_FEEDBACK,
  HIDE_FEEDBACK,
} from "../actionTypes/feedback";
import axios from "axios";

export const getFeedbacks = () => async (dispatch) => {
  dispatch({ type: LOAD_FEEDBACK });
  try {
    let result = await axios.get("/api/feedback");
    dispatch({ type: GET_FEEDBACKS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_FEEDBACK, payload: error.response.data });
  }
};

export const postFeedback = (newFeedback) => async (dispatch) => {
  try {
    await axios.post("/api/feedback", newFeedback);
    dispatch(getFeedbacks());
  } catch (error) {
    dispatch({ type: FAIL_FEEDBACK, payload: error.response.data });
  }
};

export const deleteFeedback = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/feedback/${id}`);
    dispatch(getFeedbacks());
  } catch (error) {
    dispatch({ type: FAIL_FEEDBACK, payload: error.response.data });
  }
};

export const getFeedback = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/feedback/${id}`);
    dispatch({ type: GET_FEEDBACK, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_FEEDBACK, payload: error.response });
  }
};

export const hideFeedback = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/feedback/${id}`);
    dispatch({ type: HIDE_FEEDBACK, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_FEEDBACK, payload: error.response });
  }
};
