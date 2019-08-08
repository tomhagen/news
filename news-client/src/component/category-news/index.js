import "./index.scss";
import React, { Component, Fragment } from "react";
import Category from "../category";
import { Breadcrumb, Icon } from "antd";
import CategoryNewsItem from "./category-news-item";

class CategoryNews extends Component {
  render() {
    return (
      <Fragment>
        <section className="category-news">
          <div className="container">
            <div className="news-container">
              <CategoryNewsItem/>
              <CategoryNewsItem/>
              <CategoryNewsItem/>
              <CategoryNewsItem/>
            </div>
            <Category />
          </div>
        </section>
      </Fragment>
    );
  }
}
export default CategoryNews;
