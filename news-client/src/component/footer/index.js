import "./index.scss";
import { Icon } from "antd";

import React, { Component, Fragment } from "react";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <section className="footer">
          <div className="container">
            <div className="footer-box">
              <div className="social-box">
                <img alt="logo" src="./img/footer_logo.png" />
                <p>
                  Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl
                  aliquam. Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                  ipsum dolor sit amet, consectetur Nulla fringilla
                </p>
                <div className="icon-box">
                  <a href="#" className="icon">
                    <i class="fa fa-facebook-f" />
                  </a>
                  <a href="#" className="icon">
                    <i class="fa fa-twitter" />
                  </a>
                  <a href="#" className="icon">
                    <i class="fa fa-linkedin" />
                  </a>
                  <a href="#" className="icon">
                    <i class="fa fa-google-plus" />
                  </a>
                  <a href="#" className="icon">
                    <i class="fa fa-vimeo" />
                  </a>
                  <a href="#" className="icon">
                    <i class="fa fa-pinterest-p" />
                  </a>
                  <a href="#" className="icon">
                    <i class="fa fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="news-box">
                <div className="news-box-container">
                  <div className="recent-post-box">
                    <p className="recent-title">RECENT POSTS</p>
                    <div className="recent-item">
                      <div className="item-logo">
                        <a href="#">
                          <img src="./img/footer-item1.jpg" />
                        </a>
                      </div>
                      <a href="#" className="item-content">
                        3 Delicious Post-Holiday Detox Recipes, Courtesy of
                        Personal Chef
                      </a>
                    </div>
                    <div className="recent-item">
                      <div className="item-logo">
                        <a href="#">
                          <img src="./img/footer-item1.jpg" />
                        </a>
                      </div>
                      <a href="#" className="item-content">
                        3 Delicious Post-Holiday Detox Recipes, Courtesy of
                        Personal Chef
                      </a>
                    </div>
                    <div className="recent-item">
                      <div className="item-logo">
                        <a href="#">
                          <img src="./img/footer-item1.jpg" />
                        </a>
                      </div>
                      <a href="#" className="item-content">
                        3 Delicious Post-Holiday Detox Recipes, Courtesy of
                        Personal Chef
                      </a>
                    </div>
                  </div>
                  <div className="popular-post-box">
                  <p className="popular-title">POPULAR POSTS</p>
                    <div className="popular-item">
                      <div className="item-logo">
                        <a href="#">
                          <img src="./img/footer-item1.jpg" />
                        </a>
                      </div>
                      <a href="#" className="item-content">
                        3 Delicious Post-Holiday Detox Recipes, Courtesy of
                        Personal Chef
                      </a>
                    </div>
                    <div className="popular-item">
                      <div className="item-logo">
                        <a href="#">
                          <img src="./img/footer-item1.jpg" />
                        </a>
                      </div>
                      <a href="#" className="item-content">
                        3 Delicious Post-Holiday Detox Recipes, Courtesy of
                        Personal Chef
                      </a>
                    </div>
                    <div className="popular-item">
                      <div className="item-logo">
                        <a href="#">
                          <img src="./img/footer-item1.jpg" />
                        </a>
                      </div>
                      <a href="#" className="item-content">
                        3 Delicious Post-Holiday Detox Recipes, Courtesy of
                        Personal Chef
                      </a>
                    </div>
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
export default Footer;
