import "./index.scss";
import { Breadcrumb } from "antd";

import React, { Component, Fragment } from "react";
import moment from "moment";
import {Link} from 'react-router-dom';

// const background = {
//   width: "100%",
//   // backgroundImage: 'url("./img/technology-computer-chips-gigabyte.jpg")',
//   // backgroundImage: `url(http://localhost:5000/api/open?name=${images})`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   position: "relative",
//   height: "400px",
//   backgroundColor: "rgba(0, 0, 0, 0.5)"
//   // zIndex: '100'
// };
class PagesCaption extends Component {
  render() {
    let { title, createdOn, category, author, images } = this.props.detailNews;

    return (
      <Fragment>
        <section
          className="pages-caption"
          style={{
            width: "100%",
            height: "400px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            backgroundPosition:"center",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backgroundImage: `url(http://localhost:5000/api/open?name=${images}`
          }}
        >
          <div className="overlay" />
          <div className="container">
            <Breadcrumb style={{ color: "white" }}>
              <Breadcrumb.Item><Link to="/">HOME</Link></Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/category/${category}`}>{category}</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="title">
              {title}
              {/* Spring 2015 Runway Arrivals Talk Trends and Supporting Labels */}
            </div>
            <div className="box-info">
              <img src="/img/author-img1.jpeg" className="info-author" />
              <h5 className="info-name">{author}</h5>
              <span className="info-date">
                {moment(createdOn).format("  MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default PagesCaption;
