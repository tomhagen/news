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
    return (
      <Fragment>
        <section className="detail-news">
          <div className="container">
            <div className="news-container">
              <Social />
              <div className="main-content">
                <p>
                  Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                  dolor sit amet, consectetur Nulla fringilla purus at leo
                  dignissim congue. Mauris elementum accumsan leo vel tempor.
                  Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus
                  viverra quis at felis. Sed do.Lorem ipsum dolor sit amet,
                  consectetur Nulla fringilla purus Lorem ipsum dosectetur
                  adipisicing elit at leo dignissim congue. Mauris elementum
                  accumsan leo vel tempor Elit bespoke vinyl art party Pitchfork
                  selfies master cleanse Kickstarter retro. Drinking vinegar
                  stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel
                  Neutra Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit, sed diam nonummy nibh euismod tincidunt ut laore.et
                  dolore magna aliquam erat volutpat.
                </p>
                <h2>
                  The road to success and the road to failure are almost exactly
                  the same
                </h2>
                <p>
                  Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl
                  aliquam. Aliquam et elit eu nunc rhoncus viverra quis at
                  felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla
                  fringilla purus Lorem ipsum dosectetur adipisicing elit at leo
                </p>
                <img src="./img/technology-computer-chips-gigabyte.jpg" />
                <h2>
                  The road to success and the road to failure are almost exactly
                  the same
                </h2>
                <p>
                  Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl
                  aliquam. Aliquam et elit eu nunc rhoncus viverra quis at
                  felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla
                  fringilla purus Lorem ipsum dosectetur adipisicing elit at leo
                </p>
                <h2>
                  The road to success and the road to failure are almost exactly
                  the same
                </h2>
                <p>
                  Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl
                  aliquam. Aliquam et elit eu nunc rhoncus viverra quis at
                  felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla
                  fringilla purus Lorem ipsum dosectetur adipisicing elit at leo
                </p>
              </div>
              <Social />
              <div className="item-divider">
                <hr className="post_divider" />
                <hr className="post_divider double" />
              </div>
              <Author />
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
                          <Input placeholder="Name*"/>
                        </Col>
                        <Col span={8}>
                          <Input placeholder="Email*"/>
                        </Col>
                        <Col span={8}>
                          <Input placeholder="Website"/>
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
