import "./index.scss";

import React, { Component, Fragment } from "react";

class Advertising extends Component {
  render() {
    return (
      <Fragment>
        <section className="advertising">
          <div className="container">
            <p className="title"> - Advertisement - </p>
            <div className="ads">
              <img alt="ads" src="./img/728x90ads.png" />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default Advertising;
