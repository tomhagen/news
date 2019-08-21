import React, { Component, Fragment } from "react";
import { Button } from "antd";
import "./index.scss";
import {Link} from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <img
          alt="not-found"
          style={{ width: "100%" }}
          src="https://cdn.dribbble.com/users/408665/screenshots/2421479/attachments/469603/day24_404-fv.png"
        />
        <div className="img-overlay">
          <div className="btn-container">
            <Link to="/">
              <Button type="primary" className="back-btn">
                Back to Home Page
              </Button>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default NotFound;
