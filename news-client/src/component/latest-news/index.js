import "./index.scss";
import React, { Component, Fragment } from "react";
import Category from "../category";
import LatestNewsItem from "../latest-new-item";
import {connect} from 'react-redux';

class LatestNews extends Component {

  renderLatestNewsList = () => {
    let latestNewsList = this.props.latestNewsList.slice(0,8);
    // console.log(this.props.latestNewsList.slice(0,1))
    return latestNewsList.map((item,index) => {
      return <LatestNewsItem item={item} key={index}/>
    })
  }

  render() {
    return (
      <Fragment>
        <section className="latest-news">
          <div className="container">
            <div className="latest-container">
              <h3 className="latest-news-title">ALL THE LATEST NEWS</h3>
              {this.renderLatestNewsList()}
              {/* <LatestNewsItem />
              <LatestNewsItem />
              <LatestNewsItem />
              <LatestNewsItem />
              <LatestNewsItem />
              <LatestNewsItem /> */}
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
    latestNewsList: state.newsList
  }
}
export default connect(mapStateToProps, null) (LatestNews);
