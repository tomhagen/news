import React, { Component, Fragment } from "react";
import Header from "../component/header";

import Footer from "../component/footer";
import Copyright from "../component/copyright";

import StayUpdated from "../component/stay-updated";
import { BackTop } from "antd";
import PagesCaption from "../component/pages-caption";
import DetailNews from "../component/detail-news";

class NewsDetail extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BackTop />
        <PagesCaption />
        <DetailNews />
        <StayUpdated />
        <Footer />
        <Copyright />
      </Fragment>
    );
  }
}
export default NewsDetail;
