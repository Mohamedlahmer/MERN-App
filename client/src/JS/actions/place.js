import {
  FAIL_PLACE,
  GET_PLACE,
  GET_PLACES,
  LOAD_PLACE,
} from "../actionTypes/place";
import axios from "axios";

export const getPlaces = () => async (dispatch) => {
  dispatch({ type: LOAD_PLACE });
  try {
    let result = await axios.get("/api/place");
    dispatch({ type: GET_PLACES, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PLACE, payload: error.response.data });
  }
};

export const postPlace = (newPlace) => async (dispatch) => {
  try {
    await axios.post("/api/place", newPlace);
    dispatch(getPlaces());
  } catch (error) {
    dispatch({ type: FAIL_PLACE, payload: error.response.data });
  }
};

export const deletePlace = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/place/${id}`);
    dispatch(getPlaces());
  } catch (error) {
    dispatch({ type: FAIL_PLACE, payload: error.response.data });
  }
};

export const editPlace = (id, newPlace) => async (dispatch) => {
  try {
    await axios.put(`/api/place/${id}`, newPlace);
    dispatch(getPlaces());
  } catch (error) {
    dispatch({ type: FAIL_PLACE, payload: error.response.data });
  }
};

export const getPlace = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/place/${id}`);
    dispatch({ type: GET_PLACE, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PLACE, payload: error.response });
  }
};
