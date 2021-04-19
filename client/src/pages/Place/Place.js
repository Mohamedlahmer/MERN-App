import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Feedback from "../../Components/Feedback/Feedback";
import { getFeedbacks, postFeedback } from "../../JS/actions/feedback";
import { getPlace } from "../../JS/actions/place";
import "./Place.css";
import { Carousel } from "react-bootstrap";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Place = (props) => {
  const placeSelected = props.location.state.place;

  const feedbabckPlaceList = useSelector(
    (state) => state.feedbackReducer.feedbackList
  );

  const placefeedback = useSelector(
    (state) => state.placeReducer.placeEdit._id
  );

  const loadFeedback = useSelector(
    (state) => state.feedbackReducer.loadFeedback
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeedbacks());
    dispatch(getPlace(placeSelected._id));
  }, []);

  const currentUser = useSelector((state) => state.userReducer.user);

  const [feedbackAdd, setFeedbackAdd] = useState({});

  const handleFeedback = (e) => {
    setFeedbackAdd({
      ...feedbackAdd,
      iduser: currentUser._id,
      idplace: placeSelected._id,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(postFeedback(feedbackAdd));
    setFeedbackAdd({ ...feedbackAdd, text: "" });
  };

  return (
    <div className="placepage">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={placeSelected.placeImage[1]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>LOVE TUNISIA</h3>
            <p>It's always a good time for a road trip</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={placeSelected.placeImage[2]}
            alt="Second slide"
            className="d-block w-100"
          />

          <Carousel.Caption>
            <h3>BEAUTIFUL</h3>
            <p>let's have a ride</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={placeSelected.placeImage[3]}
            alt="Third slide"
            className="d-block w-100"
          />

          <Carousel.Caption>
            <h3>WOW</h3>
            <p>Never seen such a beauty</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="fdb">Feedbaacks 😎</div>

      <div>
        {loadFeedback ? (
          <h3>Spinner</h3>
        ) : (
          feedbabckPlaceList
            .filter((el) => el.idplace === placefeedback)
            .map((el) => <Feedback feedback={el} key={el._id} />)
        )}
      </div>

      <div className="feedbackadd">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Feedback posting"
            name="text"
            value={feedbackAdd.text}
            onChange={handleFeedback}
          />
          <InputGroup.Append>
            {feedbackAdd.text ? (
              <Button
                variant="outline-secondary"
                onClick={(e) => {
                  handleChange(e);
                }}
              >
                Post feedback
              </Button>
            ) : null}
          </InputGroup.Append>
        </InputGroup>
      </div>

      <Button
        variant="success"
        className="btnback"
        onClick={() => {
          props.history.push("/profile");
        }}
      >
        Back to main page
      </Button>
    </div>
  );
};

export default Place;
