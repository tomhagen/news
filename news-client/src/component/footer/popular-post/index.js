import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class PopularPost extends Component {
  render() {
    let { _id, title, images } = this.props.news;
    return (
      <Fragment>
        <div className="popular-item">
          <div className="item-logo">
            <Link to={`/detail/${_id}`}>
              <img alt="popular" src={`http://localhost:5000/api/open?name=${images}`} />
            </Link>
          </div>
          <Link to={`/detail/${_id}`} className="item-content">
            {title}
          </Link>
        </div>
      </Fragment>
    );
  }
}
export default PopularPost;