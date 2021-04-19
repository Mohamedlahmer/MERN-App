import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaces } from "../../JS/actions/place";
import Place from "../../Components/Place/Place";
import { toggleAdd } from "../../JS/actions/editPlace";
import "./Placelist.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const Placelist = () => {
  const placeList = useSelector((state) => state.placeReducer.placeList);
  const loadPlace = useSelector((state) => state.placeReducer.loadPlace);
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(getPlaces());
  }, []);

  const [rating, setRating] = useState("");
  const [open, setOpen] = useState(false);

  const handleChangeRate = (event) => {
    setRating(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

  const classes = useStyles();
  const [currency, setCurrency] = useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleallplaces = (e) => {
    e.preventDefault();
    setCurrency("");
  };

  return (
    <div>
      <div className="filters">
        <div className="filter1">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              value={currency}
              onChange={handleChange}
              helperText="Please select gouvernorate"
            >
              {placeList.map((option) => (
                <MenuItem key={option._id} value={option.gouvernorate}>
                  {option.gouvernorate}
                </MenuItem>
              ))}
            </TextField>
            <button className="btnundo" onClick={(e) => handleallplaces(e)}>
              X
            </button>
          </form>
        </div>

        <div className="filter2">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Rating
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={rating}
              onChange={handleChangeRate}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={3}>3 +</MenuItem>
              <MenuItem value={4}>4 +</MenuItem>
              <MenuItem value={5}>5 +</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {currency || rating ? (
        <h1 className="boxplaceList">
          {loadPlace ? (
            <p>Spinner</p>
          ) : (
            placeList
              .filter(
                (el) =>
                  el.gouvernorate.includes(currency) && el.rating >= rating
              )
              .map((el) => <Place place={el} key={el._id} />)
          )}
        </h1>
      ) : (
        <h1 className="boxplaceList">
          {loadPlace ? (
            <p>Spinner</p>
          ) : (
            placeList.map((el) => <Place place={el} key={el._id} />)
          )}
        </h1>
      )}

      <div className="btnadd">
        {currentUser.role === "admin" ? (
          <Link to="/profile/add">
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => dispatch(toggleAdd())}
            >
              [+] Add Place
            </Button>{" "}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Placelist;
