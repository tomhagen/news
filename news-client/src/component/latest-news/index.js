import "./index.scss";
import React, { Component, Fragment } from "react";
import Category from "../category";
import LatestNewsItem from "../latest-new-item";
import { connect } from "react-redux";
import { Button, message } from "antd";

class LatestNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 5
    };
  }
  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 3 };
    });
  };
  renderLatestNewsList = () => {
    let latestNewsList = this.props.latestNewsList.slice(0, this.state.visible);

    return latestNewsList.map((item, index) => {
      return <LatestNewsItem item={item} key={index} />;
    });
  };

  render() {
    return (
      <Fragment>
        <section className="latest-news">
          <div className="container">
            <div className="latest-container">
              <h3 className="latest-news-title">ALL THE LATEST NEWS</h3>
              {this.renderLatestNewsList()}
              <Button
                type="primary"
                className="loadmore-btn"
                onClick={this.loadMore}
              >
                LOAD MORE NEWS...
              </Button>
            </div>
            <Category />
          </div>
        </section>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    latestNewsList: state.newsList
  };
};
export default connect(
  mapStateToProps,
  null
)(LatestNews);
