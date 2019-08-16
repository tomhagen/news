import "./index.scss";
import React, { Component, Fragment } from "react";
import Category from "../category";
import CategoryNewsItem from "./category-news-item";
import {connect} from 'react-redux';

class CategoryNews extends Component {

  renderNewsByCategory = () => {
    return this.props.newsByCategory.map((news,index) => {
      return <CategoryNewsItem key={index} news={news}/>
    })
  }
  render() {
    return (
      <Fragment>
        <section className="category-news">
          <div className="container">
            <div className="news-container">
              {this.renderNewsByCategory()}
              {/* <CategoryNewsItem/>
              <CategoryNewsItem/>
              <CategoryNewsItem/>
              <CategoryNewsItem/> */}
            </div>
            <Category />
          </div>
        </section>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    newsByCategory: state.newsByCategory
  }
}
export default connect(mapStateToProps,null) (CategoryNews);
