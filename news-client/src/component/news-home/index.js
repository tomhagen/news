import React, { Component, Fragment } from "react";
import "./index.scss";
import { connect } from "react-redux";
import SubNewsItem from "./sub-news-item";
import moment from "moment";
import { Link } from "react-router-dom";
import { requestGetTrendingNews } from "../../actions/newsAction";
import { Button } from "antd";

class NewsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 11
    };
  }
  loadMore = () => {
    this.setState({ limit: this.state.limit + 3 }, () => {
      console.log(this.state.limit);
    this.props.onGetTrendingNews(this.state.limit);
    });
    
  };

  componentDidMount() {
    this.props.onGetTrendingNews(this.state.limit);
    // console.log(this.props.trendingNewsList);
  }

  renderLatestNews = () => {
    // console.log(this.props.trendingNewsList);
    return this.props.trendingNewsList.slice(0, 1).map((news, index) => {
      return (
        <div
          key={index}
          className="main-news"
          style={{
            width: "67%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            marginRight: "3%",
            backgroundPosition: "center",
            backgroundImage: `url(http://localhost:5000/api/open?name=${news.images}`
          }}
        >
          <div className="container">
            <div className="box-info">
              <img
                alt="author"
                src="./img/author-img1.jpeg"
                className="info-author"
              />
              <h5 className="info-name">{news.author}</h5>
              <span className="info-date">
                {moment(news.createdOn).format("MMM DD YYYY")}
              </span>
            </div>
            <div className="title">
              <Link to={`/${news.slug}`}>{news.title}</Link>
            </div>
          </div>
        </div>
      );
    });
  };

  renderSubNews = () => {
    // console.log(this.props.trendingNewsList);
    return this.props.trendingNewsList.slice(1, 100).map((news, index) => {
      return <SubNewsItem key={index} news={news} />;
    });
  };
  // showButton = () => {
  //   if (this.state.limit === this.props.trendingNewsList.length) {
  //     return (
  //       <Button type="primary" onClick={this.loadMore}>
  //         Load More...
  //       </Button>
  //     );
  //   } else if(this.state.limit > this.props.trendingNewsList.length) {
  //     return (
  //       <Button type="primary" onClick={this.loadMore} style={{display:'none'}}>
  //         Load More...
  //       </Button>
  //     );
  //   }
  // };
  render() {
    // console.log(this.props.trendingNewsList);
    return (
      <Fragment>
        <section className="news-home">
          <div className="container">
            {this.renderLatestNews()}

            <div className="sub-news">
              {this.renderSubNews()}
              <div className="sub-load-more">
                {/* {this.showButton()} */}
                <Button type="primary" onClick={this.loadMore}>
                  Load More...
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    trendingNewsList: state.trendingNews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetTrendingNews: limit => {
      dispatch(requestGetTrendingNews(limit));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsHome);
