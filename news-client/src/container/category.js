import React, { Component, Fragment } from "react";
import Header from "../component/header";

import Footer from "../component/footer";
import Copyright from "../component/copyright";
import BreadcrumbTags from "../component/breadcrumb";
import CategoryNews from "../component/category-news";
import StayUpdated from "../component/stay-updated";
import { BackTop } from "antd";

import { connect } from "react-redux";
import { requestGetNewsByCategory } from "../actions/newsAction";

class Category extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
    const type = this.props.match.params.id
    this.props.onGetNewsByCategory(type,5);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <BackTop />
        <BreadcrumbTags />
        <CategoryNews />
        <StayUpdated />
        <Footer />
        <Copyright />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetNewsByCategory: (type,limit) => {
      dispatch(requestGetNewsByCategory(type,limit));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Category);
