import "./index.scss";
import React, { Component, Fragment } from "react";
import {Icon} from 'antd';

class trending extends Component {
  render() {
    return (
      <Fragment>
        <section className="trending">
          <div className="container">
            <div className="trending-tag">
              <Icon type="thunderbolt" className="trending-icon"/>
              <span>TRENDING</span>
            </div>
            
            <ul className="trending-content">
              <li>The 23 Best Beauty Moments From the Fall 2016 Runways</li>
              <li>Spring 2015 Runway Arrivals Talk Trends and Supporting Labels</li>
              <li>Runway Scorecard: The 10 Most In-Demand Models of Fashion</li>
              <li>21 Questions with… Fashion Photographer Emma Summerton</li>
            </ul>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default trending;
