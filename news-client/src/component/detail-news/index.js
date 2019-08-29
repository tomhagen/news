import "./index.scss";
import React, { Component, Fragment } from "react";
import Category from "../category";
import Social from "../social";
import Author from "../author";
import TrendingItem from "../trending-item";
import { Form, Input, Button, Row, Col } from "antd";
import moment from "moment";

const { TextArea } = Input;

class DetailNews extends Component {
  // createMarkup = () => {
  //   return {_html: this.props.detailNews.description}
  // }
  render() {
    console.log("render");

    let {
      description,
      images,
      author,
      createdOn,
      mainContent
    } = this.props.detailNews;
    console.log(images);
    return (
      <Fragment>
        <section className="detail-news">
          <div className="container">
            <div className="news-container">
              <Social />
              <div className="description-container">
                <p className="summary">
                  <div dangerouslySetInnerHTML={{ __html: `${description ? description : ""}` }} />
                </p>
                <div className="description-detail">
                  By
                  <span className="author-name">{author}</span>
                  <span className="date">
                    {" "}
                    Posts on:{" "}
                    <strong> {moment(createdOn).format("LLLL")}</strong>
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
              <div className="trending__box">
                <TrendingItem />
                <TrendingItem />
              </div>

              <div className="you__may__like">
                <h2>YOU MAY ALSO LIKE</h2>
              </div>
              <div className="you__may__like__box">
                <TrendingItem />
                <TrendingItem />
                <TrendingItem />
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

export default DetailNews;
