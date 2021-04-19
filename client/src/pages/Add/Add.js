import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Add.css";
import { editPlace, postPlace } from "../../JS/actions/place";
import { Link } from "react-router-dom";

const Add = () => {
  const dispatch = useDispatch();
  const [place, setPlace] = useState({});
  const placeToEdit = useSelector((state) => state.placeReducer.placeEdit);
  const edit = useSelector((state) => state.EditReducer.edit);
  useEffect(() => {
    edit ? setPlace(placeToEdit) : setPlace(place);
  }, [placeToEdit]);

  const handleChange = (e) => {
    e.preventDefault();
    edit ? dispatch(editPlace(placeToEdit._id, place)) : setPlace("");
  };

  const handlePlace = (e) => {
    setPlace({
      ...place,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  return (
    <div className="form">
      <form action="/api/place" encType="multipart/form-data" method="post">
        {/* <label>Name</label>
        <input name="name" value={place.name} onChange={handlePlace} /> */}
        <label>Images</label>
        <div>
          <input
            type="file"
            className="form-control-file"
            name="placeImage"
            multiple
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter place name"
            name="name"
            value={place.name}
            onChange={(e) => handlePlace(e)}
          ></input>
          <input
            type="text"
            className="form-control"
            placeholder="Enter gouvernorate"
            name="gouvernorate"
            value={place.gouvernorate}
            onChange={(e) => handlePlace(e)}
          ></input>
          <input
            type="text"
            className="form-control"
            placeholder="Enter rating"
            name="rating"
            value={place.rating}
            onChange={(e) => handlePlace(e)}
          ></input>
          <input
            type="submit"
            value="Submit place"
            className="btn btn-default"
            formTarget="_blank"
          />
          {/* <button type="submit">submit Images</button> */}
        </div>
      </form>

      <div>
        <button onClick={(e) => handleChange(e)}>
          <Link to="/profile"> {edit ? "Edit" : "back to main page"}</Link>
        </button>
      </div>
    </div>
  );
};

export default Add;
