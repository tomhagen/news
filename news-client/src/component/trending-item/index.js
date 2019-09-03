import "./index.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class TrendingItem extends Component {
  render() {
    let { images, title, author, createdOn, slug } = this.props.news;

    return (
      <div className="trending-item">
        <div className="trending-item-box-img">
          <Link to={`/${slug}`}>
            <img
              src={`http://localhost:5000/api/open?name=${images}`}
              className="news-item-img"
            />
          </Link>
        </div>
        <div className="trending-item-box-content">
          <h5 className="box-content-title">
            <Link to={`/${slug}`}>{title}</Link>
          </h5>

          <div className="trending-box-content-info">
            <h5 className="info-name">{author}</h5>
            <span className="info-date">
              {moment(createdOn).format("MMM DD YYYY")}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default TrendingItem;
