import "./index.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class YouMayLikeItem extends Component {
  render() {
    // let { images, title, author, createdOn, slug } = this.props.news;

    return (
      <div className="you__may__like-item">
        <div className="you__may__like-item-box-img">
        <a href="#">
            <img
              src="./img/latest-news-item1.jpg"
              className="news-item-img"
            />
          </a>
          {/* <Link to={`/${slug}`}>
            <img
              src={`http://localhost:5000/api/open?name=${images}`}
              className="news-item-img"
            />
          </Link> */}
        </div>
        <div className="you__may__like-item-box-content">
          <h5 className="box-content-title">
            {/* <Link to={`/${slug}`}>{title}</Link> */}
            <a href="#">News Website</a>
          </h5>

          <div className="you__may__like-box-content-info">
            <h5 className="info-name">Tuyen Tran</h5>
            <span className="info-date">
              {/* {moment(createdOn).format("MMM DD YYYY")} */}
              July 13, 2019
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default YouMayLikeItem;
