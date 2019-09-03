import "./index.scss";
import React, { Component, Fragment } from "react";
import Category from "../category";
import LatestNewsItem from "../latest-new-item";
import { connect } from "react-redux";
import { Button, message } from "antd";
import { requestAllNewsPagniation } from "../../actions/newsAction";
import Axios from "axios";

class LatestNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 5
    };
  }
  loadMore = () => {
    this.setState(
      {
        pageSize: this.state.pageSize + 3
      },
      () => {
        // console.log(this.state.pageSize)
        this.props.onGetNewsPagniation(1, this.state.pageSize);
      }
    );
  };

  componentDidMount() {
    this.props.onGetNewsPagniation(1, this.state.pageSize);
    // console.log(this.props.allNewsPagniation)
  }
  renderLatestNewsList = () => {
    // console.log(this.props.allNewsPagniation);
    if (this.props.allNewsPagniation) {
      return this.props.allNewsPagniation.map((item, index) => {
        return <LatestNewsItem item={item} key={index} />;
      });
    }
  };

  render() {
    // console.log(this.props.allNewsPagniation);
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
    allNewsPagniation: state.allNewsPagniation
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetNewsPagniation: (pageNumber, pageSize) => {
      dispatch(requestAllNewsPagniation(pageNumber, pageSize));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestNews);
