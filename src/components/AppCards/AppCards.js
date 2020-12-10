import React from "react";
import Typography from "@material-ui/core/Typography";

import star from "../../static/star.svg";
import chat from "../../static/chat.svg";
import slider from "../../static/slider.svg";

import "./AppCards.css";

const AppCards = () => {
  return (
    <section className="appcards">
      <ul className="appcards__list grid">
        <li className="appcards__item">
          <div className="appcards__title">
            <div className="appcards__img">
              <img src={chat} alt="Star"></img>
            </div>
            <Typography variant="h4">
              Cover yourself against the unexpected
            </Typography>
          </div>
          <div className="appcards__desc">
            <Typography variant="subtitle2">
              Get the insuranace coverage that sets you free. Tailor it to your
              needs, know that you've got it covered - go out and live. Life
              happens anyway.
            </Typography>
          </div>
        </li>
        <li className="appcards__item">
          <div className="appcards__title">
            <img src={chat} alt="Star"></img>
            <Typography variant="h4">
              Cover yourself against the unexpected
            </Typography>
          </div>
          <div className="appcards__desc">
            <Typography variant="subtitle2">
              Get the insuranace coverage that sets you free. Tailor it to your
              needs, know that you've got it covered - go out and live. Life
              happens anyway.
            </Typography>
          </div>
        </li>
        <li className="appcards__item">
          <div className="appcards__title">
            <img src={slider} alt="Star"></img>
            <Typography variant="h4">
              Cover yourself against the unexpected
            </Typography>
          </div>
          <div className="appcards__desc">
            <Typography variant="subtitle2">
              Get the insuranace coverage that sets you free. Tailor it to your
              needs, know that you've got it covered - go out and live. Life
              happens anyway.
            </Typography>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AppCards;
