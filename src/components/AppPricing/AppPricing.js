import React from "react";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import line from "../../static/line.svg";

import "./AppPricing.css";

const AppPricing = () => {
  return (
    <section className="pricing">
      <Typography variant="h2">Get more out of your documents</Typography>
      <Typography variant="subtitle2">
        Just like everything else in Scand, our plans are straightforward too.
      </Typography>
      <div className="pricing__container grid">
        <div className="pricing__box__wrapper">
          <div className="price__box highlighted">
            <Typography variant="h5">Yes, it's free forever</Typography>
            <div className="wrapper">
              <Typography variant="h3">Free</Typography>
              <Typography variant="subtitle2">
                For teams that need simple bug reporting solution.
              </Typography>
              <div className="price">
                <Typography variant="h3">$0</Typography>
                <Typography variant="caption">
                  per active app, per month
                </Typography>
              </div>
              <div className="line">
                <img src={line} alt="Pricing table line" />
              </div>
              <ul>
                <li>
                  <div className="checkmark">
                    <CheckCircleIcon />
                  </div>
                  <span>
                    <Typography variant="subtitle2">
                      One attachment per bug
                    </Typography>
                  </span>
                </li>
                <li>
                  <div className="checkmark">
                    <CheckCircleIcon />
                  </div>
                  <span>
                    <Typography variant="subtitle2">
                      One attachment per bug
                    </Typography>
                  </span>
                </li>
                <li>
                  <div className="checkmark">
                    <CheckCircleIcon />
                  </div>
                  <span>
                    <Typography variant="subtitle2">
                      One attachment per bug
                    </Typography>
                  </span>
                </li>
                <li>
                  <div className="checkmark">
                    <CheckCircleIcon />
                  </div>
                  <span>
                    <Typography variant="subtitle2">
                      One attachment per bug
                    </Typography>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="price__box">
            <div className="wrapper">
              <Typography variant="h3">Premium</Typography>
              <Typography variant="subtitle2">
                For teams that need simple bug reporting solution.
              </Typography>
              <div className="price">
                <Typography variant="h3">$50</Typography>
                <Typography variant="caption">
                  per active app, per month
                </Typography>
              </div>
              <div className="line">
                <img src={line} alt="Pricing table line" />
              </div>
              <ul>
                <li>
                  <div className="checkmark">
                    <CheckCircleIcon />
                  </div>
                  <span>
                    <Typography variant="subtitle2">
                      One attachment per bug
                    </Typography>
                  </span>
                </li>
                <li>
                  <div className="checkmark">
                    <CheckCircleIcon />
                  </div>
                  <span>
                    <Typography variant="subtitle2">
                      One attachment per bug
                    </Typography>
                  </span>
                </li>
                <li>
                  <div className="checkmark">
                    <CheckCircleIcon />
                  </div>
                  <span>
                    <Typography variant="subtitle2">
                      One attachment per bug
                    </Typography>
                  </span>
                </li>
                <li>
                  <div className="checkmark">
                    <CheckCircleIcon />
                  </div>
                  <span>
                    <Typography variant="subtitle2">
                      One attachment per bug
                    </Typography>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPricing;
