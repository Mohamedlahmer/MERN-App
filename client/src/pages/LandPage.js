import React from "react";
import "./LandPage.css";
import place1 from "../../src/assets/Hamamet2.jpg";
import place2 from "../../src/assets/Douz.jpg";
import place3 from "../../src/assets/Galit_Bizert1.jpg";
import place4 from "../../src/assets/Toujen1.jpg";
import place5 from "../../src/assets/Galit_Bizert2.jpg";
import place6 from "../../src/assets/Chenini1.jpg";
import logo from "../../src/assets/logo.jpg";

const LandPage = () => {
  return (
    <div className="titlelandpage">
      <div className="container">
        <div className="textlandpage">
          <img src={logo} alt="logo" width="80px" height="60px" />
          <p className="textlandpage1">
            {" "}
            Planning a road trip never been this easy{" "}
          </p>
          <p className="ourservices">Our services :</p>
          <div className="textlandpage2">
            <p className="service"> ✓ Places to visit</p>
            <p className="service"> ✓ Car rental 🚗</p>
            <p className="service"> ✓ Events calender</p>
            <p className="service"> ✓ Join tour groups</p>
          </div>
        </div>
        <div className="content">
          <div className="wrapper">
            <div className="box vintage">
              <img src={place1} alt="EMMYLOU" />
              <h2>BEACH</h2>
              <p>summer vibes</p>
            </div>
          </div>
          <div className="wrapper">
            <div className="box w-content">
              <img src={place2} alt="Jenny of Oldstones" />
              <div className="frame">
                <h2>DUNE</h2>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="box postcard">
              <img src={place6} alt="BOX" />
              <h2>
                The Pursuit of <p className="hide">HISTORY</p>
              </h2>
            </div>
          </div>
          <div className="wrapper">
            <div className="box zoom-in">
              <img src={place3} alt="Postcards From Italy" />
              <h2>Postcards From Bizert</h2>
              <p>And I will love to see that day</p>
            </div>
          </div>
          <div className="wrapper">
            <div className="box blury-card">
              <img src={place4} alt="Blue Ridge Mountains" />
              <div className="frame">
                <h2>Road trips</h2>
                <p>MOUNTAINS</p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="box zoom-out">
              <img src={place5} alt="Melody Noir" />
              <div className="frame">
                <h2>
                  Rocky <span>Beachs</span>
                </h2>
                <p>
                  Tell me where the wind is blowing 'cause that's where the
                  music's going
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
