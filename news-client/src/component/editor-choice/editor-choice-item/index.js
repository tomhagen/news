import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditorChoiceItem extends Component {
  render() {
    let { _id, title, images, slug } = this.props.news;

    return (
      <div className="item">
        <div className="item-box-img">
          <Link to={`/detail/${_id}`}>
            <img
              alt="editor"
              src={`http://localhost:5000/api/open?name=${images}`}
              className="item-img"
            />
          </Link>
        </div>
        <div className="item-box-content">
          <h5 className="content-title">
            <Link to={`/${slug}`}>{title}</Link>
          </h5>
        </div>
      </div>
    );
  }
}
export default EditorChoiceItem;
