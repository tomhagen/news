import "./index.scss";

import React, { Component, Fragment } from "react";
import Loading from "../loading/loading";
import {Spin} from 'antd';


class LatestInCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClass: [true, false, false, false, false, false],
      loading: false
    };
  }

  handleActive = divId => {

    if (divId === "business") {
      this.setState({
        activeClass: [true, false, false, false, false, false]
      });
      
    } else if (divId === "computing") {
      this.setState({
        activeClass: [false, true, false, false, false, false]
      });
    }
    else if (divId === "energy") {
      this.setState({
        activeClass: [false, false, true, false, false, false]
      });
    }
    else if (divId === "mobile") {
      this.setState({
        activeClass: [false, false, false, true, false, false]
      });
    }
    else if (divId === "robotic") {
      this.setState({
        activeClass: [false, false, false, false, true, false]
      });
    }
    else if (divId === "startup") {
      this.setState({
        activeClass: [false, false, false, false, false, true]
      });
    }
  };

  

  render() {
   
    return (
      
      <Fragment>
          {/* <Loading/> */}
          {/* <Spin delay="3000"/> */}
        <section className="latest-in-category">
          <div className="container">
            <div className="latest-header">
              <h3 className="latest-news-title">LATEST IN CATEGORIES</h3>
              <div className="latest-news-menu">
                <ul className="menu-box">
                  <li className={this.state.activeClass[0] ? "addColor":"normal"}>
                    <a onClick={() => this.handleActive("business")}>
                      BUSINESS
                    </a>
                  </li>
                  <li className={this.state.activeClass[1] ? "addColor":"normal"}>
                    <a onClick={() => this.handleActive("computing")}>
                      COMPUTING
                    </a>
                  </li>
                  <li className={this.state.activeClass[2] ? "addColor":"normal"}>
                    <a onClick={() => this.handleActive("energy")}>ENERGY</a>
                  </li>
                  <li className={this.state.activeClass[3] ? "addColor":"normal"}>
                    <a onClick={() => this.handleActive("mobile")}>MOBILE</a>
                  </li>
                  <li className={this.state.activeClass[4] ? "addColor":"normal"}>
                    <a onClick={() => this.handleActive("robotic")}>ROBOTIC</a>
                  </li>
                  <li className={this.state.activeClass[5] ? "addColor":"normal"}>
                    <a onClick={() => this.handleActive("startup")}>STARTUP</a>
                  </li>
                </ul>
              </div>
            </div>
          
            <div
              className={`latest-news-box ${
                this.state.activeClass[0] ? "showClass" : "hideClass"
              }`}
              id="business"
            >
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 20167</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`latest-news-box ${
                this.state.activeClass[1] ? "showClass" : "hideClass"
              }`}
              id="computing"
            >
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category2.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 20168</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`latest-news-box ${this.state.activeClass[2] ? "showClass": "hideClass"}`}
              id="energy"
              
            >
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 20169</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div
              className={`latest-news-box ${this.state.activeClass[3] ? "showClass": "hideClass"}`}
              id="mobile"
             
            >
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 20160</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div
              className={`latest-news-box ${this.state.activeClass[4] ? "showClass": "hideClass"}`}
              id="robotic"
              
            >
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 20161</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div
              className={`latest-news-box ${this.state.activeClass[5] ? "showClass": "hideClass"}`}
              id="startup"
             
            >
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 20162</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
                  </div>
                </div>
              </div>
              <div className="latest-news-item item">
                <div className="item-box-img">
                  <a href="#">
                    <img
                      src="./img/latest-in-category1.jpg"
                      className="item-img"
                    />
                  </a>
                </div>
                <div className="item-box-content">
                  <h5 className="content-title">
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </h5>

                  <div className="content-info">
                    <h5 className="info-name">John Phillipe</h5>
                    <span className="info-date">POSTED ON MARCH 24, 2016</span>
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
export default LatestInCategory;
