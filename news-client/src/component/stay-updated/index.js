import "./index.scss";
import { Input, Button } from "antd";

import React, { Component, Fragment } from "react";

class StayUpdated extends Component {
  render() {
    return (
      <Fragment>
        <section className="stay-updated">
          <div className="container">
            <h2 className="stay-updated-title">Stay Updated</h2>

            <form className="subscribe-form">
              <p className="stay-updated-content">
                Get the recent popular stories straight into your inbox
              </p>
              <Input placeholder="Email" className="input-form" />
              <Button type="primary" htmlType="submit" className="input-btn">
                SIGN UP
              </Button>
            </form>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default StayUpdated;
