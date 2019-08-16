import "./index.scss";
import React, { Component, Fragment } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

class Business extends Component {
  renderBusinessItem = () => {
    return this.props.businessList.map((news, index) => {
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
                <img alt="business" src="./img/author-img1.jpeg" className="info-author" />
                <h5 className="info-name">{news.author}</h5>
                <span className="info-date">
                  {moment(news.createdOn).format("MMM Do YYYY")}
                </span>
              </div>
              <div className="title">
                <Link to={`/detail/${news._id}`}>{news.title}</Link>
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
        <section className="business">
          {/* <div className="container">
            <div
              className="main-news"
              style={{
                width: "100%",
                height: "400px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
                backgroundPosition: "center",
                backgroundImage: `url(http://localhost:5000/api/open?name=${images}`
              }}
            > */}
          {this.renderBusinessItem()}
          {/* <div className="container">
                <div className="business-tag">
                  <a href="#">BUSINESS</a>
                </div>
                <div className="box-info">
                  <img src="./img/author-img1.jpeg" className="info-author" />
                  <h5 className="info-name">{author}</h5>
                  <span className="info-date">March 23, 2016</span>
                </div>
                <div className="title">
                  <a href="#">
                    Spring 2015 Runway Arrivals Talk Trends and Supporting
                    Labels
                  </a>
                </div>
              </div> */}
          {/* </div>
          </div> */}
        </section>
      </Fragment>
    );
  }
}
export default Business;
