import "./index.scss";
import React, { Component, Fragment } from "react";
import Category from "../category";
import Social from "../social";
import Author from "../author";
import TrendingItem from "../trending-item";
import { Form, Input, Button, Row, Col } from "antd";
import moment from "moment-timezone";
import { connect } from "react-redux";
import {
  requestGetTrendingNews,
  requestGetNewsByCategory
} from "../../actions/newsAction";
import YouMayLikeItem from "../you-may-like-item";

const { TextArea } = Input;

class DetailNews extends Component {
  componentDidMount() {
    this.props.onGetYouMayLikeNews(this.props.detailNews.category, 6);
  }

  renderTrendingItem = () => {
    let newsListFilter = this.props.trendingNewsList.filter(
      news => news._id !== this.props.detailNews._id
    );
    console.log(newsListFilter);
    return newsListFilter.slice(0, 4).map((news, i) => {
      return <TrendingItem news={news} key={i} />;
    });
  };

  renderYouMayLikeItem = () => {
    console.log(this.props.newsByCategoryList);
    let categoryListFilter = this.props.newsByCategoryList.filter(
      news => news._id !== this.props.detailNews._id
    );
    console.log(categoryListFilter);
    return categoryListFilter.slice(0, 4).map((news, i) => {
      return <YouMayLikeItem news={news} key={i} />;
    });
  };
  render() {
    console.log("item news");
    let {
      description,
      images,
      author,
      createdOn,
      mainContent
    } = this.props.detailNews;

    return (
      <Fragment>
        <section className="detail-news">
          <div className="container">
            <div className="news-container">
              <Social />
              <div className="description-container">
                <div className="summary">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${description ? description : ""}`
                    }}
                  />
                </div>
                <div className="description-detail">
                  By
                  <span className="author-name">{author}</span>
                  <span className="date">
                    {" "}
                    Posts on:{" "}
                    <strong>
                      {" "}
                      {moment(createdOn)
                        .tz("Etc/GMT-7")
                        .format("LLLL")}
                    </strong>
                  </span>
                </div>
                <div className="item-divider">
                  <hr className="post_divider" />
                  <hr className="post_divider double" />
                </div>
              </div>
              <div className="main-content">
                <div dangerouslySetInnerHTML={{ __html: mainContent }} />

                <img
                  alt="item"
                  src={`http://localhost:5000/api/open?name=${images}`}
                />
              </div>
              <Social />
              <div className="item-divider">
                <hr className="post_divider" />
                <hr className="post_divider double" />
              </div>
              <Author detailNews={this.props.detailNews} />
              <div className="trending__now">
                <h2>TRENDING NOW</h2>
              </div>
              <div className="trending__box">{this.renderTrendingItem()}</div>

              <div className="you__may__like">
                <h2>YOU MAY ALSO LIKE</h2>
              </div>
              <div className="you__may__like__box">
                {this.renderYouMayLikeItem()}
              </div>
              <div className="post__comment">
                <div className="post__comment__container">
                  <h3 className="title">LEAVE A REPLY</h3>
                  <p className="subtitle">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  <Form>
                    <TextArea rows={4} />
                    <Form.Item>
                      <Row gutter={24}>
                        <Col span={8}>
                          <Input placeholder="Name*" />
                        </Col>
                        <Col span={8}>
                          <Input placeholder="Email*" />
                        </Col>
                        <Col span={8}>
                          <Input placeholder="Website" />
                        </Col>
                      </Row>
                    </Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="input-btn"
                    >
                      POST COMMENT
                    </Button>
                  </Form>
                </div>
              </div>
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
    trendingNewsList: state.trendingNews,
    newsByCategoryList: state.newsByCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onGetTrendingNews: limit => {
    //   dispatch(requestGetTrendingNews(limit));
    // },
    onGetYouMayLikeNews: (type, limit) => {
      dispatch(requestGetNewsByCategory(type, limit));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailNews);
