import "./index.scss";

import React, { Component, Fragment } from "react";

class Business extends Component {
  render() {
    return (
      <Fragment>
        <section className="business">
          <div className="container">
            <div className="main-news">
              <div className="container">
                <div className="business-tag">
                  <a href="#">BUSINESS</a>
                </div>
                <div className="box-info">
                  <img src="./img/author-img1.jpeg" className="info-author" />
                  <h5 className="info-name">John Phillipe</h5>
                  <span className="info-date">March 23, 2016</span>
                </div>
                <div className="title">
                  <a href="#">
                    Spring 2015 Runway Arrivals Talk Trends and Supporting
                    Labels
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default Business;
