import React, { Component, Fragment } from "react";
import Header from "../component/header";

import Footer from "../component/footer";
import Copyright from "../component/copyright";
import BreadcrumbTags from "../component/breadcrumb";
import CategoryNews from "../component/category-news";
import StayUpdated from "../component/stay-updated";
import { BackTop } from "antd";

class Category extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BackTop/>
        <BreadcrumbTags />
        <CategoryNews/>
        <StayUpdated/>
        <Footer />
        <Copyright />
      </Fragment>
    );
  }
}
export default Category;
