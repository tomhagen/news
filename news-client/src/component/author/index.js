import "./index.scss";
import React, { Component, Fragment } from "react";

class Author extends Component {
  render() {
    return (
      <Fragment>
        <div className="author__container">
          <div className="container">
            <div className="author__img">
              <img src="./img/author.jpeg" />
            </div>
            <div className="author__info">
              <h3 className="author__title">AUTHOR</h3>
              <h2 className="author__name">John Philippe</h2>
              <p className="author__description">
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetur Nulla fringilla purus at leo
                dignissim congue. Mauris elementum accumsan leo vel tempor
              </p>
              <div className="author__social">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Author;
