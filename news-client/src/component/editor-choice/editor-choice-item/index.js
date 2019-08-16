import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditorChoiceItem extends Component {
  render() {
    let { _id, title, images } = this.props.news;

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
            <Link to={`/detail/${_id}`}>
              {title}
              {/* 3 Delicious Post-Holiday Detox Recipes, Courtesy of Personal Chef */}
            </Link>
          </h5>
        </div>
      </div>
    );
  }
}
export default EditorChoiceItem;
