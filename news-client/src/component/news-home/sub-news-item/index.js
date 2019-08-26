import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

class SubNewsItem extends Component {
  render() {
    let { _id, title, createdOn, images } = this.props.news;
    return (
      <div className="sub-news-item item-child">
        <div className="item-img">
          <Link to={`/detail/${_id}`}>
            <img
              alt="detail"
              src={`http://localhost:5000/api/open?name=${images}`}
            />
          </Link>
        </div>
        <div className="item-content">
          <h5 className="title">
            <Link to={`/detail/${_id}`}>{title}</Link>
          </h5>
          <span>{moment(createdOn).format("MMM DD YYYY")}</span>
        </div>
      </div>
    );
  }
}
export default SubNewsItem;
