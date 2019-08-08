import "./index.scss";
import { Breadcrumb } from "antd";

import React, { Component, Fragment } from "react";

const background = {
  width: '100%',
  backgroundImage: 'url("./img/technology-computer-chips-gigabyte.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  height: '400px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // zIndex: '100'
}
class PagesCaption extends Component {
  
  render() {
    return (
      <Fragment>
        <section className="pages-caption" style={background}>
          <div className="overlay" />
          <div className="container">
            <Breadcrumb style={{color: 'white'}} >
              <Breadcrumb.Item>HOME</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">BUSINESS</a>
              </Breadcrumb.Item>
             
            </Breadcrumb>
            <div className="title">
              Spring 2015 Runway Arrivals Talk Trends and Supporting Labels
            </div>
            <div className="box-info">
              <img src="./img/author-img1.jpeg" className="info-author" />
              <h5 className="info-name">John Phillipe</h5>
              <span className="info-date">March 23, 2016</span>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default PagesCaption;
