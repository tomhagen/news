import React, { Component, Fragment } from "react";
import Header from "../component/header";

import Footer from "../component/footer";
import Copyright from "../component/copyright";

import StayUpdated from "../component/stay-updated";
import { BackTop } from "antd";
import PagesCaption from "../component/pages-caption";
import DetailNews from "../component/detail-news";
import Axios from "axios";

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailNews: {}
    };
  }
  componentDidMount() {
    console.log("didmout");
    window.scrollTo(0, 0);
    const id = this.props.match.params.id;
    Axios({
      method: "GET",
      url: `http://localhost:5000/api/posts/id?id=${id}`
    })
      .then(res => {
        this.setState({
          detailNews: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0);
    const id = nextProps.match.params.id;
    Axios({
      method: "GET",
      url: `http://localhost:5000/api/posts/id?id=${id}`
    })
      .then(res => {
        this.setState({
          detailNews: res.data
        });
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
        <PagesCaption detailNews={this.state.detailNews} />
        <DetailNews detailNews={this.state.detailNews} />
        <StayUpdated />
        <Footer />
        <Copyright />
      </Fragment>
    );
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onGet
//   }
// }
export default NewsDetail;
