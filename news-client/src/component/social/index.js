import "./index.scss";
import React, { Component, Fragment } from "react";

class Social extends Component {
  render() {
    return (
      <Fragment>
        <div className="social-container">
          <div className="social-share-counter-number">
            1.2K
            <div className="social-share-counter-label">Shares</div>
          </div>

          <div className="social-share-button-wrapper">
            <ul>
              <li style={{backgroundColor:"#455fa1"}}>
                <a href="https://www.facebook.com/mrsvietnam1/" >
                  <i class="fa fa-facebook-f" />
                  Share on Facebook
                </a>
              </li>
              <li style={{backgroundColor:"#58abf5"}}>
                <a href="https://twitter.com/mrsvietnam1">
                  <i class="fa fa-twitter" />
                  Tweet it
                </a>
              </li>
              <li style={{backgroundColor:"#cd1d1f"}}> 
                <a href="https://www.pinterest.com/mrsvietnam/">
                  <i class="fa fa-pinterest" />
                </a>
              </li>
              <li style={{backgroundColor:"#eb4026"}}>
                <a href="https://www.google.com/">
                  <i class="fa fa-google-plus" />
                </a>
              </li>
              <li style={{backgroundColor:"#1980be"}}>
                <a href="https://www.linkedin.com/company/material-resource-solutions">
                  <i class="fa fa-envelope" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Social;
