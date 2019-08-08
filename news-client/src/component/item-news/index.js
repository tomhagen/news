import "./index.scss";
import React, { Component } from "react";

class ItemNews extends Component {
  render() {
    return (
      <div className="news-item item">
        <div className="news-item-box-img">
          <a href="#">
            <img src="./img/latest-in-category1.jpg" className="news-item-img" />
          </a>
        </div>
        <div className="news-item-box-content">
          <h5 className="box-content-title">
            <a href="#">
              Magnificent Image Of The New Hoover Dam Bridge Taking Shape
            </a>
          </h5>

          <div className="box-content-info">
            <h5 className="info-name">John Phillipe</h5>
            <span className="info-date">POSTED ON MARCH 24, 20167</span>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemNews;
