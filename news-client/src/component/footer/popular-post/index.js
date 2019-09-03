import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class PopularPost extends Component {
  render() {
    let { _id, title, images, slug } = this.props.news;
    return (
      <Fragment>
        <div className="popular-item">
          <div className="item-logo">
            <Link to={`/${slug}`}>
              <img
                alt="popular"
                src={`http://localhost:5000/api/open?name=${images}`}
              />
            </Link>
          </div>
          <Link to={`/${slug}`} className="item-content">
            {title}
          </Link>
        </div>
      </Fragment>
    );
  }
}
export default PopularPost;
