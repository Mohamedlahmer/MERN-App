import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/user";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../../../src/assets/avatar.jpg";
import avatar1 from "../../../src/assets/avatar1.jpg";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

  const classes = useStyles();

  return (
    <header className="header sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link to="/">
            <a className="navbar-brand" href="#">
              <strong className="h6 mb-0 font-weight-bold text-uppercase">
                EL_KHARJA.TN
              </strong>
            </a>
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/profile">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              {isAuth ? (
                <ul className="navbar-nav ml-auto">
                  <Link to="/" onClick={() => dispatch(logout())}>
                    {" "}
                    <a href="#" className="nav-link">
                      Logout
                    </a>
                  </Link>

                  {user.gender === "female" ? (
                    <div className={classes.root}>
                      <Avatar
                        alt="Remy Sharp"
                        src={avatar1}
                        className={classes.small}
                      />
                      <h5 className="nameAvatar">
                        {user.name} {user.lastName}
                      </h5>
                    </div>
                  ) : (
                    <div className={classes.root}>
                      <Avatar
                        alt="Remy Sharp"
                        src={avatar}
                        className={classes.small}
                      />
                      <h5 className="nameAvatar">
                        {user.name} {user.lastName}
                      </h5>
                    </div>
                  )}
                </ul>
              ) : (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/signin">
                      <a className="nav-link" href="#">
                        Sign In
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup">
                      <a className="nav-link " href="#">
                        Sign Up
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
