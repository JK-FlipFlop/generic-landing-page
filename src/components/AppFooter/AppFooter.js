import React from "react";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import logo from "../../static/logo.svg";
import playstore from "../../static/playstore.svg";
import appstore from "../../static/appstore.svg";

import "./AppFooter.css";

const AppFooter = () => {
  return (
    <section className="appfooter">
      <div className="grid">
        {/* Subscribe */}
        <div className="appfooter__subscribe">
          <img src={logo} alt="App Logo"></img>
          <Typography variant="h2">
            Would you like to have your MS Word and be able to collaborate on
            contracts too?
          </Typography>
          <Typography variant="subtitle2">
            Join Ironclad CEO Jason Boehmig and our special guests on 9/24 for
            State of Digital Contracting: Deep Collaboration & the Uncertain
            Future of MS Word.
          </Typography>
          <form className="subscribe__form">
            <input
              type="text"
              placeholder="Your Email"
              className="subscribe__input"
            />
            <button className="subscribe__btn">Subscribe</button>
          </form>
        </div>
        {/* Links */}
        <div className="appfooter__links">
          <div className="grid">
            <ul className="appfooter__list">
              <li className="appfooter__item">
                <Typography variant="h6">Ironclad</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">Product</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">Integrations</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">Resources</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">Sign-in</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">Request Demo</Typography>
              </li>
            </ul>

            <ul className="appfooter__list">
              <li className="appfooter__item">
                <Typography variant="h6">Company</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">About Us</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">Careers</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">Community</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">Blogs</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">Press</Typography>
              </li>
            </ul>

            <ul className="appfooter__list">
              <li className="appfooter__item">
                <Typography variant="h6">Legal</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">Terms of Service</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">Privacy Policy</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">Resources</Typography>
              </li>
              <li className="appfooter__item">
                <Typography variant="subtitle2">Scand DPA</Typography>
              </li>
            </ul>
          </div>

          <div className="appfooter__social">
            <Typography variant="h6">Download Our App</Typography>
            <div className="store__btns">
              <img src={appstore} alt="AppStore Button"></img>
              <img src={playstore} alt="PlayStore Button"></img>
            </div>
            <Typography variant="h6">Follow Us On</Typography>
            <FacebookIcon className="social__icons" />
            <InstagramIcon className="social__icons" />
            <TwitterIcon className="social__icons" />
          </div>
          <div className="appfooter__text">
            <Typography variant="subtitle2">
              Ironclad provides self-help services at your specific direction.
              We are not a law firm or a substitute for an attorney or law firm.
              Communications between you and Ironclad are protected by our{" "}
              <a href="#"> Privacy Policy </a>, but not by the attorney-client
              privilege or as work product. We cannot provide any kind of
              advice, explanation, opinion, or recommendation about possible
              legal rights, remedies, defenses, options, selection of forms, or
              strategies. Your access to our website is subject to our{" "}
              <a href="#">Terms of Service.</a>
            </Typography>
          </div>
          <div className="copyright">
            <Typography variant="subtitle2">
              &copy; {new Date().getFullYear()} Ironclad, Inc. All rights
              reserved.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFooter;
