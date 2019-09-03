import "./index.scss";
import React, { Component, Fragment } from "react";
import { Icon } from "antd";

class trending extends Component {
  render() {
    return (
      <Fragment>
        <section className="trending">
          <div className="container">
            <div className="trending-tag">
              <Icon type="thunderbolt" className="trending-icon" />
              <span>TRENDING</span>
            </div>

            <ul className="trending-content">
              <li>
                <a href="#">
                  The 23 Best Beauty Moments From the Fall 2016 Runways
                </a>
              </li>
              <li>
                <a href="#">
                  Spring 2015 Runway Arrivals Talk Trends and Supporting Labels
                </a>
              </li>
              <li>
                <a href="#">
                  Runway Scorecard: The 10 Most In-Demand Models of Fashion
                </a>
              </li>
              <li>
                <a href="#">
                  21 Questions with… Fashion Photographer Emma Summerton
                </a>
              </li>
              <li>
                <a href="#">
                Rodecaster Pro review: a podcast studio you can carry on your back
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default trending;
