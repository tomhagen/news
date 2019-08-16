import "./index.scss";
import React, { Component, Fragment } from "react";
import { Badge } from "antd";
import {Link} from 'react-router-dom';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCategoryFixed: false
    };
  }
  handleScrollCategory = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 880 && currentScroll < 1400) {
      this.setState({
        isCategoryFixed: true
      });
    } else {
      this.setState({
        isCategoryFixed: false
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollCategory);
  }
  render() {
    return (
      <Fragment>
        {/* CATEGORIES */}
        <div
          className={`categories-container ${
            this.state.isCategoryFixed ? "sticky" : ""
          }`}
        >
          <h3 className="categories-title">CATEGORIES</h3>
          <p className="categories-content">
            Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl
            aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis
          </p>

          <ul className="categories-item">
            <li>
              <Link to="/category/BUSINESS">Business</Link>
              <div className="badge">
                <Badge
                  count={9}
                  style={{
                    backgroundColor: "#08A100",
                    color: "#ffffff"
                  }}
                />
              </div>
            </li>
            <li>
              <Link to="/category/COMPUTING">Computing</Link>
              <div className="badge">
                <Badge
                  count={5}
                  style={{
                    backgroundColor: "#08A100",
                    color: "#ffffff"
                  }}
                />
              </div>
            </li>
            <li>
              <Link to="/category/ENERGY">Energy</Link>
              <div className="badge">
                <Badge
                  count={7}
                  style={{
                    backgroundColor: "#08A100",
                    color: "#ffffff"
                  }}
                />
              </div>
            </li>
            <li>
              <Link to="/category/GADGETS">Gadgets</Link>
              <div className="badge">
                <Badge
                  count={2}
                  style={{
                    backgroundColor: "#08A100",
                    color: "#ffffff"
                  }}
                />
              </div>
            </li>
            <li>
              <Link to="/category/MOBILE">Mobile</Link>
              <div className="badge">
                <Badge
                  count={5}
                  style={{
                    backgroundColor: "#08A100",
                    color: "#ffffff"
                  }}
                />
              </div>
            </li>
            <li>
              <Link to="/category/ROBOTIC">Robotic</Link>
              <div className="badge">
                <Badge
                  count={6}
                  style={{
                    backgroundColor: "#08A100",
                    color: "#ffffff"
                  }}
                />
              </div>
            </li>
            <li>
              <Link to="/category/STARTUP">Start Up</Link>
              <div className="badge">
                <Badge
                  count={6}
                  style={{
                    backgroundColor: "#08A100",
                    color: "#ffffff"
                  }}
                />
              </div>
            </li>
            <li>
              <Link to="/category/TOPNEWS">Top News</Link>
              <div className="badge">
                <Badge
                  count={4}
                  style={{
                    backgroundColor: "#08A100",
                    color: "#ffffff"
                  }}
                />
              </div>
            </li>
          </ul>
          <div className="categories-ads">
            <p> - Advertisement - </p>
            <img alt="category" src="/img/300x250ads.png" />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Category;
