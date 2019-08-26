import "./index.scss";
import React, { Component, Fragment } from "react";
import { Breadcrumb, Icon } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

class CategoryNewsItem extends Component {
  render() {
    let {
      _id,
      title,
      author,
      category,
      createdOn,
      description,
      images
    } = this.props.news;
    return (
      <Fragment>
        <div className="category-news-item">
          <div className="item-box-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">HOME</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{category.toUpperCase()}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="item-box-title">
            <h5 className="content-title">
              <Link to={`/detail/${_id}`}>{title}</Link>
            </h5>
            <div className="content-info">
              <h5 className="info-name">{author}</h5>
              <span className="info-date">
                POSTED ON {moment(createdOn).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          <div className="item-box-img">
            <Link to={`/detail/${_id}`}>
              <img
                alt="detail"
                src={`http://localhost:5000/api/open?name=${images}`}
                className="item-img"
              />
            </Link>
          </div>
          <div className="item-box-content">
            <p className="content">
              <div
                dangerouslySetInnerHTML={{
                  __html: description.substr(0, 1000) + "...."
                }}
              />
            </p>
          </div>
          <div className="item-box-view">
            <p className="view-continue">
              <Link to={`/detail/${_id}`}>CONTINUE READING</Link>
            </p>
            <div className="view-count">
              <Icon type="eye" className="view-icon" />
              <p>3.3K View</p>
              <i class="fa fa-comments" />
              <p>0</p>
            </div>
          </div>
          <div className="item-divider">
            <hr className="post_divider" />
            <hr className="post_divider double" />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default CategoryNewsItem;
