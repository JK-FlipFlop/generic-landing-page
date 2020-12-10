import React from "react";
import Typography from "@material-ui/core/Typography";

import mockup from "../../static/Mockup.webp";
import playstore from "../../static/playstore.svg";
import appstore from "../../static/appstore.svg";

import "./AppFeatures.css";

const AppFeatures = () => {
  return (
    <section className="appfeatures">
      {/* App features 1 */}
      <div className="appfeatures-1 grid">
        <div className="appmockup">
          <img src={mockup} alt="AppFeatures Mockup"></img>
        </div>
        <div className="appfeatures__text">
          <Typography variant="h2">
            We won't let a crisis bring you down
          </Typography>
          <Typography variant="subtitle2">
            Sometimes, life takes an unexpected turn. In these moments, you need
            to be able to count on your insurance.
            <br></br>
            <br></br>
            That’s why we offer an insurance app that is always at your side.
            File a claim right when something happens, no matter where you are.
            Let our chatbot guide you through the process. And when you need to
            talk to someone, call us for support.
          </Typography>
          <div className="store__btns">
            <img src={appstore} alt="AppStore Button"></img>
            <img src={playstore} alt="PlayStore Button"></img>
          </div>
        </div>
      </div>

      {/* App features 2 */}
      <div className="appfeatures-2 grid">
        <div className="appfeatures__text">
          <Typography variant="h2">Safe Place</Typography>
          <Typography variant="subtitle2">
            What’s your Safe Place? Whether it’s a location, a person or a
            hobby, a Safe Place conveys a sense of security, comfort and
            tranquillity.
            <br></br>
            <br></br>
            As an insurance company, this is exactly what we want to offer you.
            That’s why you’ll find a content hub in the Safe Place tab of our
            Getsafe App with helpful, exciting and interesting content for all
            situations in life.
          </Typography>
        </div>
        <div className="appmockup">
          <img src={mockup} alt="AppFeatures Mockup"></img>
        </div>
      </div>

      {/* App features 3 */}
      <div className="appfeatures-3 grid">
        <div className="appmockup">
          <img src={mockup} alt="AppFeatures Mockup"></img>
        </div>
        <div className="appfeatures__text">
          <Typography variant="h2">Safe Place</Typography>
          <Typography variant="subtitle2">
            What’s your Safe Place? Whether it’s a location, a person or a
            hobby, a Safe Place conveys a sense of security, comfort and
            tranquillity.
            <br></br>
            <br></br>
            As an insurance company, this is exactly what we want to offer you.
            That’s why you’ll find a content hub in the Safe Place tab of our
            Getsafe App with helpful, exciting and interesting content for all
            situations in life.
          </Typography>
        </div>
      </div>

      {/* App features 4 */}
      <div className="appfeatures-4 grid">
        <div className="appfeatures__text">
          <Typography variant="h2">Safe Place</Typography>
          <Typography variant="subtitle2">
            What’s your Safe Place? Whether it’s a location, a person or a
            hobby, a Safe Place conveys a sense of security, comfort and
            tranquillity.
            <br></br>
            <br></br>
            As an insurance company, this is exactly what we want to offer you.
            That’s why you’ll find a content hub in the Safe Place tab of our
            Getsafe App with helpful, exciting and interesting content for all
            situations in life.
          </Typography>
        </div>
        <div className="appmockup">
          <img src={mockup} alt="AppFeatures Mockup"></img>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
