import React, { Component, Fragment } from "react";

class ResultItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="result__item">
          <div className="item-box-img">
            <a href="#">
              <img
                alt="latest-news"
                src="./img/latest-news-item1.jpg"
                className="item-img"
              />
            </a>
          </div>
          <div className="item-box-content">
            <h5 className="content-title">
              <a href="#">
                How a wildly ambitious crowdfunded phone collapsed into a
                $700,000 fraud
              </a>
            </h5>

            <div className="content">
              A group of Caviar employees has banded together to request a good
              faith renegotiation from DoorDash ....
            </div>

            <div className="content-info">
              <h5 className="info-name">PHILIPPE XI</h5>
              <span className="info-date">POSTED ON 13:57PM Aug 15, 2019</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ResultItem;
