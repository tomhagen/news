import React, { Component, Fragment } from "react";
import Header from "../component/header";
import NewsHome from "../component/news-home";
import Trending from "../component/trending";
import LatestNews from "../component/latest-news";
import EditorChoice from "../component/editor-choice";
import Advertising from "../component/advertising";
import Business from "../component/business";
import LatestInCategory from "../component/latest-in-category";
import StayUpdated from "../component/stay-updated";
import Footer from "../component/footer";
import Copyright from "../component/copyright";
import { BackTop } from "antd";
import { requestGetAllNewsList } from "../actions/newsAction";

import { connect } from "react-redux";
import Axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessList: [],
      computingList: []
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.onGetAllNewsList();

    Axios({
      method: "GET",
      url: "http://localhost:5000/api/posts/category?type=BUSINESS&limit=1"
    })
      .then(res => {
        // console.log(res.data);
        this.setState({ businessList: res.data });
      })
      .catch(err => {
        console.log(err);
      });

    Axios({
      method: "GET",
      url: "http://localhost:5000/api/posts/category?type=COMPUTING&limit=8"
    })
      .then(res => {
        console.log(res.data);
        this.setState({ computingList: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <Fragment>
        <Header />
        <BackTop />
        <Trending />
        <NewsHome computingList={this.state.computingList}/>
        <LatestNews />
        <EditorChoice />
        <Advertising />
        <Business businessList={this.state.businessList} />
        <LatestInCategory />
        <StayUpdated />
        <Footer />
        <Copyright />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetAllNewsList: () => {
      dispatch(requestGetAllNewsList());
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Home);
