import React from "react";
import "./Footer.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import logo1 from "../../src/assets/logo.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="www.facebook.com">
        El_kharja.tn
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
      <p>
        {" "}
        {"Copyright © "} All photos was taken by the photograph Amine mouelhi{" "}
      </p>
    </Typography>
  );
}

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: "auto",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
    },
  }));

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className="footerpart1">
        <div>
          <img src={logo1} alt="logo1" width="80px" height="60px" />
          <div className="footerpart11">
            <Typography variant="body2" color="textSecondary">
              Address : cité les nymphes, 1100 Zaghouan
            </Typography>

            <Typography variant="body2" color="textSecondary">
              Tel : +216 66 666 666
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Fax : +216 66 666 666
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email : mohamed@gmail.com
            </Typography>
          </div>
        </div>
        <div>
          <h6>About us :</h6>
          <div className="footerpart11">
            <Typography variant="body2" color="textSecondary">
              <span>
                <FacebookIcon />
                <a href="https://www.facebook.com/AmineMouelhii" target="blank">
                  {" "}
                  Amine Mouelhi profile{" "}
                </a>
              </span>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <span>
                <InstagramIcon />

                <a
                  href="https://www.instagram.com/discover_tunisia/?hl=fr"
                  target="blank"
                >
                  {" "}
                  Discover tunisia insta page
                </a>
              </span>
            </Typography>
          </div>
        </div>
      </div>
      <hr />
      <Container className="footercontainer" maxWidth="sm">
        <Typography variant="body1">Mohamed lahmer</Typography>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
