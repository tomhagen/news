import "./index.scss";
import React, { Component, Fragment } from "react";

class LatestNewsItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="latest-news-item">
          <div className="item-box-img">
            <a href="#">
              <img src="./img/latest-news-item1.jpg" className="item-img" />
            </a>
          </div>
          <div className="item-box-content">
            <h5 className="content-title">
              <a href="#">
                3 Delicious Post-Holiday Detox Recipes, Courtesy of Personal
                Chef
              </a>
            </h5>
            <p className="content">
              Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor
              sit amet, consectetur Nulla fringilla purus at leo […]
            </p>
            <div className="content-info">
              <h5 className="info-name">John Phillipe</h5>
              <span className="info-date">POSTED ON MARCH 24, 2016</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default LatestNewsItem;
