import "./index.scss";
import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

class ItemNews extends Component {
  render() {
    let { _id, title, author, createdOn, images, slug } = this.props.news;
    return (
      <div className="news-item item">
        <div className="news-item-box-img">
          <div className="img-box">
            <Link to={`/${slug}`}>
              <img
                alt="item"
                src={`http://localhost:5000/api/open?name=${images}`}
                className="news-item-img"
              />
            </Link>
          </div>
        </div>
        <div className="news-item-box-content">
          <h5 className="box-content-title">
            <Link to={`/${slug}`}>
              {title}
              {/* Magnificent Image Of The New Hoover Dam Bridge Taking Shape */}
            </Link>
          </h5>

          <div className="box-content-info">
            <h5 className="info-name">{author}</h5>
            <span className="info-date">
              POSTED ON {moment(createdOn).format("MMM DD YYYY")}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemNews;
