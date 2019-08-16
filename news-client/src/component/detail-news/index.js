import "./index.scss";
import React, { Component, Fragment } from "react";
import Category from "../category";
import Social from "../social";
import Author from "../author";
import ItemNews from "../item-news";
import TrendingItem from "../trending-item";
import { Form, Input, Button, Row, Col } from "antd";
const { TextArea } = Input;

class DetailNews extends Component {
  render() {
    let { description, images } = this.props.detailNews;
    return (
      <Fragment>
        <section className="detail-news">
          <div className="container">
            <div className="news-container">
              <Social />
              <div className="main-content">
                <p>{description}</p>

                {/* <img src="./img/technology-computer-chips-gigabyte.jpg" /> */}
                <img src={`http://localhost:5000/api/open?name=${images}`} />
              </div>
              <Social />
              <div className="item-divider">
                <hr className="post_divider" />
                <hr className="post_divider double" />
              </div>
              <Author detailNews={this.props.detailNews}/>
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