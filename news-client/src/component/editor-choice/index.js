import "./index.scss";
import React, { Component, Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class EditorChoice extends Component {
  render() {
    const settings = {

      speed: 500,
      // autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          
          }
        },
        {
          breakpoint: 782,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          
          }
        },
      ]
    };

    return (
      <Fragment>
        <section className="editor-choice">
          <div className="container">
            <h3 className="editor-choice-title">EDITOR'S CHOICES</h3>

            <div className="editor-choice-item">
              <Slider {...settings}>
                <div className="item">
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
                  </div>
                </div>
                <div className="item">
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
                  </div>
                </div>
                <div className="item">
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
                  </div>
                </div>
                <div className="item">
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
                  </div>
                </div>
                <div className="item">
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
                  </div>
                </div>
                <div className="item">
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
                  </div>
                </div>
                <div className="item">
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
                  </div>
                </div>
                <div className="item">
                  <div className="item-box-img">
                    <a href="#">
                      <img
                        src="./img/latest-news-item2.jpg"
                        className="item-img"
                      />
                    </a>
                  </div>
                  <div className="item-box-content">
                    <h5 className="content-title">
                      <a href="#">
                      Whistleblower wins $51 million in kickback and bribery case
                      </a>
                    </h5>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default EditorChoice;
