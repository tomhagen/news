import "./index.scss";
import React, { Component, Fragment } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

class LatestNewsItem extends Component {
  render() {
    let item = this.props.item;
    return (
      <Fragment>
        <div className="latest-news-item fade-in">
          <div className="item-box-img">
            <Link to={`detail/${item._id}`}>
              <img
                alt="latest-news"
                src={`http://localhost:5000/api/open?name=${item.images}`}
                className="item-img"
              />
            </Link>
          </div>
          <div className="item-box-content">
            <h5 className="content-title">
              <Link to={`/detail/${item._id}`}>{item.title}</Link>
            </h5>

            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: item.description.substr(0, 100) + "...."
              }}
            />

            <div className="content-info">
              <h5 className="info-name">{item.author}</h5>
              <span className="info-date">
                POSTED ON{" "}
                {moment(item.createdOn).format("kk:mmA  MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default LatestNewsItem;
