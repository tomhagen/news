import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

class SubNewsItem extends Component {
  render() {
    let { _id, title, createdOn, images, slug } = this.props.news;
    return (
      <div className="sub-news-item item-child fade-in">
        <div className="item-img">
          <Link to={`/${slug}`}>
            <img
              alt="detail"
              src={`http://localhost:5000/api/open?name=${images}`}
            />
          </Link>
        </div>
        <div className="item-content">
          <h5 className="title">
            <Link to={`/${slug}`}>{title}</Link>
          </h5>
          <span>{moment(createdOn).format("MMM DD YYYY")}</span>
        </div>
      </div>
    );
  }
}
export default SubNewsItem;
