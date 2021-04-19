import {
  GET_FEEDBACK,
  GET_FEEDBACKS,
  LOAD_FEEDBACK,
  FAIL_FEEDBACK,
  HIDE_FEEDBACK,
} from "../actionTypes/feedback";

const intialState = {
  feedbackList: [],
  loadFeedback: false,
  errors: null,
  FeedbackEdit: [],
};

const feedbackReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOAD_FEEDBACK:
      return { ...state, loadFeedback: true };
    case GET_FEEDBACKS:
      return { ...state, feedbackList: payload.response, loadFeedback: false };
    case FAIL_FEEDBACK:
      return {
        ...state,
        loadFeedback: false,
        errors: payload,
      };
    case GET_FEEDBACK:
      return {
        ...state,
        FeedbackEdit: payload.response,
      };
    case HIDE_FEEDBACK:
      return {
        ...state,
        FeedbackEdit: {},
      };

    default:
      return state;
  }
};

export default feedbackReducer;
