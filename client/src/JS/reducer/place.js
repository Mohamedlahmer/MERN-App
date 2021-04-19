import {
  GET_PLACES,
  LOAD_PLACE,
  FAIL_PLACE,
  GET_PLACE,
} from "../actionTypes/place";

const intialState = {
  placeList: [],
  loadPlace: false,
  errors: null,
  placeEdit: {},
};

const placeReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOAD_PLACE:
      return { ...state, loadPlace: true };
    case GET_PLACES:
      return { ...state, placeList: payload.response, loadPlace: false };
    case FAIL_PLACE:
      return {
        ...state,
        loadPlace: false,
        errors: payload,
      };
    case GET_PLACE:
      return {
        ...state,
        placeEdit: payload.response,
      };

    default:
      return state;
  }
};

export default placeReducer;
