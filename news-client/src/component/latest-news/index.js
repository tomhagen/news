import "./index.scss";
import React, { Component, Fragment } from "react";
import { Badge } from "antd";
import Axios from 'axios';

class LatestNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCategoryFixed: false
    };
  }
  handleScrollCategory = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 880 && currentScroll < 1400) {
      this.setState({
        isCategoryFixed: true
      });
    } 
    else {
      this.setState({
        isCategoryFixed: false
      });
    }
  };
  componentDidMount() {
      window.addEventListener("scroll", this.handleScrollCategory)

      // Axios({
      //   method: "GET",
      //   url: "http://localhost:5000/api/posts"
      // })
      // .then(res => console.log(res.data))
      // .catch(err => console.log(err))
  }
  render() {
    return (
      <Fragment>
        <section className="latest-news">
          <div className="container">
            <div className="latest-container">
              <h3 className="latest-news-title">ALL THE LATEST NEWS</h3>
              <div className="latest-news-item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-news-item1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      3 Delicious Post-Holiday Detox Recipes, Courtesy of
                      Personal Chef
                    </a>
                  </h5>
                  <p className="content">
                    Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                    dolor sit amet, consectetur Nulla fringilla purus at leo […]
                  </p>
                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-news-item1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      3 Delicious Post-Holiday Detox Recipes, Courtesy of
                      Personal Chef
                    </a>
                  </h5>
                  <p className="content">
                    Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                    dolor sit amet, consectetur Nulla fringilla purus at leo […]
                  </p>
                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-news-item1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      3 Delicious Post-Holiday Detox Recipes, Courtesy of
                      Personal Chef
                    </a>
                  </h5>
                  <p className="content">
                    Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                    dolor sit amet, consectetur Nulla fringilla purus at leo […]
                  </p>
                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-news-item1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      3 Delicious Post-Holiday Detox Recipes, Courtesy of
                      Personal Chef
                    </a>
                  </h5>
                  <p className="content">
                    Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                    dolor sit amet, consectetur Nulla fringilla purus at leo […]
                  </p>
                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-news-item1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      3 Delicious Post-Holiday Detox Recipes, Courtesy of
                      Personal Chef
                    </a>
                  </h5>
                  <p className="content">
                    Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                    dolor sit amet, consectetur Nulla fringilla purus at leo […]
                  </p>
                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-news-item1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      3 Delicious Post-Holiday Detox Recipes, Courtesy of
                      Personal Chef
                    </a>
                  </h5>
                  <p className="content">
                    Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                    dolor sit amet, consectetur Nulla fringilla purus at leo […]
                  </p>
                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CATEGORIES */}
            <div className={`categories-container ${this.state.isCategoryFixed ? "sticky": ""}`}>
              <h3 className="categories-title">CATEGORIES</h3>
              <p className="categories-content">
                Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl
                aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis
              </p>

              <ul className="categories-item">
                <li>
                  <a href="#">Business</a>
                  <div className="badge">
                    <Badge
                      count={9}
                      style={{
                        backgroundColor: "#08A100",
                        color: "#ffffff"
                      }}
                    />
                  </div>
                </li>
                <li>
                  <a href="#">Computing</a>
                  <div className="badge">
                    <Badge
                      count={5}
                      style={{
                        backgroundColor: "#08A100",
                        color: "#ffffff"
                      }}
                    />
                  </div>
                </li>
                <li>
                  <a href="#">Energy</a>
                  <div className="badge">
                    <Badge
                      count={7}
                      style={{
                        backgroundColor: "#08A100",
                        color: "#ffffff"
                      }}
                    />
                  </div>
                </li>
                <li>
                  <a href="#">Gadgets</a>
                  <div className="badge">
                    <Badge
                      count={2}
                      style={{
                        backgroundColor: "#08A100",
                        color: "#ffffff"
                      }}
                    />
                  </div>
                </li>
                <li>
                  <a href="#">Mobile</a>
                  <div className="badge">
                    <Badge
                      count={5}
                      style={{
                        backgroundColor: "#08A100",
                        color: "#ffffff"
                      }}
                    />
                  </div>
                </li>
                <li>
                  <a href="#">Robotic</a>
                  <div className="badge">
                    <Badge
                      count={6}
                      style={{
                        backgroundColor: "#08A100",
                        color: "#ffffff"
                      }}
                    />
                  </div>
                </li>
                <li>
                  <a href="#">Start Up</a>
                  <div className="badge">
                    <Badge
                      count={6}
                      style={{
                        backgroundColor: "#08A100",
                        color: "#ffffff"
                      }}
                    />
                  </div>
                </li>
                <li>
                  <a href="#">Top News</a>
                  <div className="badge">
                    <Badge
                      count={4}
                      style={{
                        backgroundColor: "#08A100",
                        color: "#ffffff"
                      }}
                    />
                  </div>
                </li>
              </ul>
              <div className="categories-ads">
                <p> - Advertisement - </p>
                <img src="./img/300x250ads.png" />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default LatestNews;
