import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePlace, getPlace } from "../../JS/actions/place";
import { toggleEdit } from "../../JS/actions/editPlace";
import "./Place.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const Place = ({ place }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.user);

  const handleEdit = (id) => {
    dispatch(toggleEdit());
    dispatch(getPlace(id));
  };

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <div className="containerplace">
        <div className="overlay">
          <p className="text">{place.name}</p>
        </div>
        <Link
          to={{
            pathname: "/uploads",
            state: { place: place },
          }}
        >
          <img src={place.placeImage[0]} alt="city" className="image" />
        </Link>

        <p className="date"> Added: {place.date.substring(0, 10)}</p>
      </div>

      <div>
        {currentUser.role === "admin" ? (
          <h6 className="btns">
            <Link to="/profile/edit">
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.margin}
                onClick={() => handleEdit(place._id)}
              >
                Edit
              </Button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={classes.margin}
              onClick={() => dispatch(deletePlace(place._id))}
            >
              Delete
            </Button>
          </h6>
        ) : null}
      </div>
    </div>
  );
};

export default Place;
