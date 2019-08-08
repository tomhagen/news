import "./index.scss";
import { Breadcrumb } from "antd";
import {Link} from 'react-router-dom';
import React, { Component, Fragment } from "react";

class BreadcrumbTags extends Component {
  render() {
    return (
      <Fragment>
        <section className="breadcrumb">
          <div className="container">
            <h1>BUSINESS</h1>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Business</Breadcrumb.Item>
            </Breadcrumb>
          </div>    
        </section>
      </Fragment>
    );
  }
}
export default BreadcrumbTags;
