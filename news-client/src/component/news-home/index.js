import React, { Component, Fragment } from "react";
import "./index.scss";
import { connect } from "react-redux";

class NewsHome extends Component {
  render() {
    return (
      <Fragment>
        <section className="news-home">
          <div className="container">
            <div className="main-news">
              <div className="container">
                <div className="box-info">
                  <img src="./img/author-img1.jpeg" className="info-author" />
                  <h5 className="info-name">John Phillipe</h5>
                  <span className="info-date">March 23, 2016</span>
                </div>
                <div className="title">
                  <a href="#">
                    Spring 2015 Runway Arrivals Talk Trends and Supporting
                    Labels
                  </a>
                </div>
              </div>
            </div>
            <div className="sub-news">
              <div className="sub-news-item">
                <div className="item-img">
                  <a href="#">
                    <img src="./img/pexels-photo-700x466.jpg" />
                  </a>
                </div>
                <div className="item-content">
                  <h5 className="title">
                    <a href="#">
                      Whistleblower wins $51 million in kickback and bribery
                      case
                    </a>
                  </h5>
                  <span>July 22, 2015</span>
                </div>
              </div>
              <div className="sub-news-item item-child">
                <div className="item-img">
                  <a href="#">
                    <img src="./img/pexels-photo-700x466.jpg" />
                  </a>
                </div>
                <div className="item-content">
                  <h5 className="title">
                    <a href="#">
                      Whistleblower wins $51 million in kickback and bribery
                      case
                    </a>
                  </h5>
                  <span>July 22, 2015</span>
                </div>
              </div>
              <div className="sub-news-item item-child">
                <div className="item-img">
                  <a href="#">
                    <img src="./img/pexels-photo-700x466.jpg" />
                  </a>
                </div>
                <div className="item-content">
                  <h5 className="title">
                    <a href="#">
                      Whistleblower wins $51 million in kickback and bribery
                      case
                    </a>
                  </h5>
                  <span>July 22, 2015</span>
                </div>
              </div>
              <div className="sub-news-item item-child">
                <div className="item-img">
                  <a href="#">
                    <img src="./img/pexels-photo-700x466.jpg" />
                  </a>
                </div>
                <div className="item-content">
                  <h5 className="title">
                    <a href="#">
                      Whistleblower wins $51 million in kickback and bribery
                      case
                    </a>
                  </h5>
                  <span>July 22, 2015</span>
                </div>
              </div>
              <div className="sub-news-item item-child">
                <div className="item-img">
                  <a href="#">
                    <img src="./img/pexels-photo-700x466.jpg" />
                  </a>
                </div>
                <div className="item-content">
                  <h5 className="title">
                    <a href="#">
                      Whistleblower wins $51 million in kickback and bribery
                      case
                    </a>
                  </h5>
                  <span>July 22, 2015</span>
                </div>
              </div>
              <div className="sub-news-item item-child">
                <div className="item-img">
                  <a href="#">
                    <img src="./img/pexels-photo-700x466.jpg" />
                  </a>
                </div>
                <div className="item-content">
                  <h5 className="title">
                    <a href="#">
                      Whistleblower wins $51 million in kickback and bribery
                      case
                    </a>
                  </h5>
                  <span>July 22, 2015</span>
                </div>
              </div>
              <div className="sub-news-item item-child">
                <div className="item-img">
                  <a href="#">
                    <img src="./img/pexels-photo-700x466.jpg" />
                  </a>
                </div>
                <div className="item-content">
                  <h5 className="title">
                    <a href="#">
                      Whistleblower wins $51 million in kickback and bribery
                      case
                    </a>
                  </h5>
                  <span>July 22, 2015</span>
                </div>
              </div>
              <div className="sub-news-item item-child">
                <div className="item-img">
                  <a href="#">
                    <img src="./img/pexels-photo-700x466.jpg" />
                  </a>
                </div>
                <div className="item-content">
                  <h5 className="title">
                    <a href="#">
                      Whistleblower wins $51 million in kickback and bribery
                      case
                    </a>
                  </h5>
                  <span>July 22, 2015</span>
                </div>
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
    newsList: state.newsList
  };
};
export default connect(
  mapStateToProps,
  null
)(NewsHome);
