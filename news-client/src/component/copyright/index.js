import "./index.scss";

import React, { Component, Fragment } from "react";

class Copyright extends Component {
  render() {
    return (
      <Fragment>
        <section className="copyright">
          <div className="container">
            <p>
              © Copyright 2019 by{" "}
              <a
                href="https://www.facebook.com/tuyen.tran.9847"
                target="_blank"
                rel="noopener noreferrer"
                alt="tuyentran"
              >
                Tuyen Tran
              </a>{" "}
              - Theme by ThemeForest
            </p>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default Copyright;
