import React from "react";
import Typography from "@material-ui/core/Typography";

import Mockup from "../../static/Mockup.webp";
import playstore from "../../static/playstore.svg";
import appstore from "../../static/appstore.svg";

import "./AppIntro.css";

const AppIntro = () => {
  return (
    <header className="appintro">
      <div className="grid">
        <div className="appintro__text">
          <Typography variant="h2">
            Adiue, fear. <br></br>
            Hello, Life
          </Typography>
          <Typography variant="subtitle2">
            Get the insuranace coverage that sets you free. Tailor it to your
            needs, know that you've got it covered - go out and live. Life
            happens anyway.
          </Typography>
        </div>
        <div className="subscribe">
          <Typography variant="h5">Subscribe to the Newsletter </Typography>
          <form className="subscribe__form">
            <input
              type="text"
              placeholder="Your Email"
              className="subscribe__input"
            />
            <button className="subscribe__btn">Subscribe</button>
          </form>
        </div>
        <div className="appmockup">
          <img src={Mockup} alt="Mobile Mockup"></img>
          <div className="store__btns">
            <img
              src={appstore}
              alt="AppStore Button"
              className="appstore"
            ></img>
            <img
              src={playstore}
              alt="PlayStore Button"
              className="playstore"
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppIntro;
