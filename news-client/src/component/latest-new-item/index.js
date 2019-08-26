import "./index.scss";
import React, { Component, Fragment } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

class LatestNewsItem extends Component {
  render() {
    const {
      images,
      _id,
      title,
      description,
      createdOn,
      author
    } = this.props.item;

    return (
      <Fragment>
        <div className="latest-news-item fade-in">
          <div className="item-box-img">
            <Link to={`detail/${_id}`}>
              <img
                alt="latest-news"
                src={`http://localhost:5000/api/open?name=${images}`}
                className="item-img"
              />
            </Link>
          </div>
          <div className="item-box-content">
            <h5 className="content-title">
              <Link to={`/detail/${_id}`}>{title}</Link>
            </h5>

            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: description.substr(0, 100) + "...."
              }}
            />

            <div className="content-info">
              <h5 className="info-name">{author}</h5>
              <span className="info-date">
                POSTED ON
                {moment(createdOn).format("kk:mmA  MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default LatestNewsItem;
