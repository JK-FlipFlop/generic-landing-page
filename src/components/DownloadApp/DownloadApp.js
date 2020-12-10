import React from "react";
import Typography from "@material-ui/core/Typography";

import logo from '../../static/logo.svg'
import playstore from "../../static/playstore.svg";
import appstore from "../../static/appstore.svg";

import "./DownloadApp.css";

const DownloadApp = () => {
  return (
    <section className="downloadapp">
      <div className="grid">
        <div className="downloadapp__text">
          <Typography variant="h2">Download the Scand App Now</Typography>
          <Typography variant="subtitle2">
            Join the community of young lads trying to get assignments done by
            copying the scanned ones from the toppers!
          </Typography>
          <div className="store__btns">
            <img src={appstore} alt="AppStore Button"></img>
            <img src={playstore} alt="PlayStore Button"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
