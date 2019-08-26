import "./index.scss";

import React, { Component, Fragment } from "react";
import RecentPost from "./recent-post";
import PopularPost from "./popular-post";
import { connect } from "react-redux";

class Footer extends Component {
  renderRecentPost = () => {
    console.log('render 1')
    return this.props.newsList.splice(0, 3).map((news, index) => {
      return <RecentPost key={index} news={news} />;
    });
  };
  renderPopularPost = () => {
    console.log('render2')
    return this.props.newsList.splice(3, 3).map((news, index) => {
      return <PopularPost key={index} news={news} />;
    });
  };
  render() {
    return (
      <Fragment>
        <section className="footer">
          <div className="container">
            <div className="footer-box">
              <div className="social-box">
                <img alt="logo" src="/img/footer_logo.png" />
                <p>
                  Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl
                  aliquam. Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                  ipsum dolor sit amet, consectetur Nulla fringilla
                </p>
                <div className="icon-box">
                  <a
                    href="https://www.facebook.com/mrsvietnam1/"
                    alt="facebook"
                    className="icon"
                  >
                    <i className="fa fa-facebook-f" />
                  </a>
                  <a
                    href="https://twitter.com/mrsvietnam1"
                    alt="twitter"
                    className="icon"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/material-resource-solutions"
                    alt="linkedin"
                    className="icon"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                  <a
                    href="https://www.google.com/"
                    alt="google"
                    className="icon"
                  >
                    <i className="fa fa-google-plus" />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    alt="youtube"
                    className="icon"
                  >
                    <i className="fa fa-vimeo" />
                  </a>
                  <a
                    href="https://www.pinterest.com/mrsvietnam/"
                    alt="pinterest"
                    className="icon"
                  >
                    <i className="fa fa-pinterest-p" />
                  </a>
                  <a
                    href="https://www.instagram.com/mrsvietnam/"
                    alt="instagram"
                    className="icon"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="news-box">
                <div className="news-box-container">
                  <div className="recent-post-box">
                    <p className="recent-title">RECENT POSTS</p>

                    {this.renderRecentPost()}
                    {/* <RecentPost />
                    <RecentPost />
                    <RecentPost /> */}
                  </div>
                  <div className="popular-post-box">
                    <p className="popular-title">POPULAR POSTS</p>
                    {this.renderPopularPost()}
                    {/* <PopularPost />
                    <PopularPost />
                    <PopularPost /> */}
                  </div>
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
)(Footer);
