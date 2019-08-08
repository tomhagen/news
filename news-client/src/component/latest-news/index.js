import "./index.scss";
import React, { Component, Fragment } from "react";
import Category from "../category";
import LatestNewsItem from "../latest-new-item";

class LatestNews extends Component {
  render() {
    return (
      <Fragment>
        <section className="latest-news">
          <div className="container">
            <div className="latest-container">
              <h3 className="latest-news-title">ALL THE LATEST NEWS</h3>
              <LatestNewsItem />
              <LatestNewsItem />
              <LatestNewsItem />
              <LatestNewsItem />
              <LatestNewsItem />
              <LatestNewsItem />
            </div>
            <Category />
          </div>
        </section>
      </Fragment>
    );
  }
}
export default LatestNews;
