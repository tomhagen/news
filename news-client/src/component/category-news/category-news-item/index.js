import "./index.scss";
import React, { Component, Fragment } from "react";
import { Breadcrumb, Icon } from "antd";

class CategoryNewsItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="category-news-item">
          <div className="item-box-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>BUSINESS</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">START UP</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="item-box-title">
            <h5 className="content-title">
              <a href="#">
                3 Delicious Post-Holiday Detox Recipes, Courtesy of Personal
                Chef
              </a>
            </h5>
            <div className="content-info">
              <h5 className="info-name">John Phillipe</h5>
              <span className="info-date">POSTED ON MARCH 24, 2016</span>
            </div>
          </div>
          <div className="item-box-img">
            <a href="#">
              <img src="./img/latest-news-item1.jpg" className="item-img" />
            </a>
          </div>
          <div className="item-box-content">
            <p className="content">
              Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor
              sit amet, consectetur Nulla fringilla purus at leo dignissim
              congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus
              nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at
              felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla
              fringilla purus Lorem ipsum dosectetur adipisicing elit at leo
              dignissim congue. Mauris elementum accumsan leo vel tempor
            </p>
            <p className="content">
              Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et
              malesuada fames ac turpis egestas. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes
            </p>
          </div>
          <div className="item-box-view">
            <p className="view-continue">
              <a href="#">CONTINUE READING</a>
            </p>
            <div className="view-count">
              <Icon type="eye" className="view-icon" />
              <p>3.3K View</p>
              <i class="fa fa-comments" />
              <p>0</p>
            </div>
          </div>
          <div className="item-divider">
            <hr className="post_divider" />
            <hr className="post_divider double" />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default CategoryNewsItem;
