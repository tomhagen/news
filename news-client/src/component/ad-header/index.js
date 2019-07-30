import React, { Component, Fragment } from "react";
import { Icon } from "antd";
import "./index.scss";

class AdminHeader extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="admin-header">
            <div className="admin-container">
              <div className="logo">
                <a href="#">
                  <img src="./img/logo.png" />
                </a>
              </div>
              <div className="admin-info">
                <Icon type="bell" className="admin-icon" />
                <div className="admin-img">
                  <img src="./img/author-img1.jpeg" />
                </div>
                <p className="admin-name">Tuyen Tran</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default AdminHeader;
