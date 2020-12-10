import React from "react";
import Typography from "@material-ui/core/Typography";

import star from "../../static/star.svg";
import chat from "../../static/chat.svg";
import slider from "../../static/slider.svg";

import "./AppExplore.css";

const AppExplore = () => {
  return (
    <section className="appexplore">
      <div className="grid">
        <div className="appexplore__text">
          <Typography variant="h2">Explore Our Coverage</Typography>
          <Typography variant="subtitle2">
            Get the insurance coverage that sets you free. Tailor it to your
            needs, know that you've got covered - go and live life. Life happens
            anyway.
          </Typography>
        </div>
        <div className="appexplore__list-container">
          <ul className="appexplore__list">
            <li className="appexplore__item">
              <div>
                <Typography variant="h5">Liability</Typography>
                <Typography variant="subtitle2">
                  Tailor it to your needs
                </Typography>
              </div>
            </li>
            <li className="appexplore__item">
              <div>
                <Typography variant="h5">Liability</Typography>
                <Typography variant="subtitle2">
                  Tailor it to your needs
                </Typography>
              </div>
            </li>
            <li className="appexplore__item">
              <div>
                <Typography variant="h5">Liability</Typography>
                <Typography variant="subtitle2">
                  Tailor it to your needs
                </Typography>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AppExplore;
