import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeedback,
  deleteFeedback,
  hideFeedback,
} from "../../JS/actions/feedback";
import "./Feedback.css";
import { ListGroup, Button } from "react-bootstrap";

const Feedback = ({ feedback }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.user);
  const findFeedback = useSelector(
    (state) => state.feedbackReducer.FeedbackEdit
  );

  const iduser = useSelector(
    (state) => state.feedbackReducer.FeedbackEdit.iduser
  );

  const handleFeedbackInfo = (e) => {
    e.preventDefault();
    dispatch(getFeedback(feedback._id));
  };

  const hideFeedbackInfo = (e) => {
    e.preventDefault();
    dispatch(hideFeedback(feedback._id));
  };

  return (
    <div className="cmnt">
      <div>
        <ListGroup variant="flush">
          <ListGroup.Item className="itemfeedback">
            <div>{feedback.text}</div>
            <div>
              {feedback._id === findFeedback._id ? (
                <p className="writer">
                  {iduser ? (
                    <p>
                      Written by : {iduser.name} {iduser.lastName}
                    </p>
                  ) : null}
                </p>
              ) : null}
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>

      {/* <h6>{feedback.text}</h6> */}
      <div>
        <Button
          variant="outline-secondary"
          onClick={(e) => {
            handleFeedbackInfo(e);
          }}
        >
          Show writer info
        </Button>

        <Button
          variant="light"
          onClick={(e) => {
            hideFeedbackInfo(e);
          }}
        >
          X
        </Button>
        {currentUser.role === "admin" ? (
          <Button
            variant="outline-danger"
            onClick={() => {
              dispatch(deleteFeedback(feedback._id));
            }}
          >
            Delete feedback
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Feedback;
