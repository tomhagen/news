import "./index.scss";
import React, { Component, Fragment } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

class Business extends Component {
  renderBusinessItem = () => {
    return this.props.newsByCategory.slice(0,1).map((news, index) => {
      return (
        <div className="container" key={index}>
          <div
            className="main-news"
            style={{
              width: "100%",
              height: "400px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "relative",
              backgroundPosition: "center",
              backgroundImage: `url(http://localhost:5000/api/open?name=${news.images}`
            }}
          >
            <div className="container">
              <div className="business-tag">
                <Link to={`/category/${news.category}`}>{news.category}</Link>
              </div>
              <div className="box-info">
                <img
                  alt="business"
                  src="./img/author-img1.jpeg"
                  className="info-author"
                />
                <h5 className="info-name">{news.author}</h5>
                <span className="info-date">
                  {moment(news.createdOn).format("MMM Do YYYY")}
                </span>
              </div>
              <div className="title">
                <Link to={`/${news.slug}`}>{news.title}</Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <Fragment>
        <section className="business">{this.renderBusinessItem()}</section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    newsByCategory: state.newsByCategory
  }
}
export default connect(mapStateToProps,null) (Business);
