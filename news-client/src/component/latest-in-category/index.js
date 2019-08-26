import "./index.scss";

import React, { Component, Fragment } from "react";
import ItemNews from "../item-news";
import { connect } from "react-redux";
import { requestGetNewsByCategory } from "../../actions/newsAction";

class LatestInCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClass: [true, false, false, false, false, false],
      loading: false
    };
  }
  renderNewsByCategoryList = () => {
    return this.props.newsByCategoryList.slice(0, 6).map((news, index) => {
      return <ItemNews key={index} news={news} />;
    });
  };
  handleActive = divId => {
    if (divId === "business") {
      this.setState({
        activeClass: [true, false, false, false, false, false]
      });
      // const hide = message.loading('Action in progress..', 0);
      // setTimeout(hide, 2500);
      this.props.onGetNewsByCategory("business", 100);
    } else if (divId === "computing") {
      this.setState({
        activeClass: [false, true, false, false, false, false]
      });
      this.props.onGetNewsByCategory("computing", 100);
    } else if (divId === "energy") {
      this.setState({
        activeClass: [false, false, true, false, false, false]
      });
      this.props.onGetNewsByCategory("energy", 100);
    } else if (divId === "mobile") {
      this.setState({
        activeClass: [false, false, false, true, false, false]
      });
      this.props.onGetNewsByCategory("mobile", 100);
    } else if (divId === "robotic") {
      this.setState({
        activeClass: [false, false, false, false, true, false]
      });
      this.props.onGetNewsByCategory("robotic", 100);
    } else if (divId === "startup") {
      this.setState({
        activeClass: [false, false, false, false, false, true]
      });
      this.props.onGetNewsByCategory("startup", 100);
    }
  };
  componentWillMount() {
    this.props.onGetNewsByCategory("business", 100);
  }
  render() {
    return (
      <Fragment>
        {/* <Loading/> */}
        {/* <Spin delay="3000"/> */}
        <section className="latest-in-category">
          <div className="container">
            <div className="latest-header">
              <h3 className="latest-news-title">LATEST IN CATEGORIES</h3>
              <div className="latest-news-menu">
                <ul className="menu-box">
                  <li
                    className={
                      this.state.activeClass[0] ? "addColor" : "normal"
                    }
                  >
                    <a
                      id="business"
                      ref="business"
                      onClick={() => this.handleActive("business")}
                    >
                      BUSINESS
                    </a>
                  </li>
                  <li
                    className={
                      this.state.activeClass[1] ? "addColor" : "normal"
                    }
                  >
                    <a
                      ref="computing"
                      id="computing"
                      onClick={() => this.handleActive("computing")}
                    >
                      COMPUTING
                    </a>
                  </li>
                  <li
                    className={
                      this.state.activeClass[2] ? "addColor" : "normal"
                    }
                  >
                    <a onClick={() => this.handleActive("energy")}>ENERGY</a>
                  </li>
                  <li
                    className={
                      this.state.activeClass[3] ? "addColor" : "normal"
                    }
                  >
                    <a onClick={() => this.handleActive("mobile")}>MOBILE</a>
                  </li>
                  <li
                    className={
                      this.state.activeClass[4] ? "addColor" : "normal"
                    }
                  >
                    <a onClick={() => this.handleActive("robotic")}>ROBOTIC</a>
                  </li>
                  <li
                    className={
                      this.state.activeClass[5] ? "addColor" : "normal"
                    }
                  >
                    <a onClick={() => this.handleActive("startup")}>STARTUP</a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`latest-news-box ${
                this.state.activeClass[0] ? "showClass" : "hideClass"
              }`}
              id="business"
            >
              {this.renderNewsByCategoryList()}
            </div>

            <div
              className={`latest-news-box ${
                this.state.activeClass[1] ? "showClass" : "hideClass"
              }`}
              id="computing"
            >
              {this.renderNewsByCategoryList()}
            </div>

            <div
              className={`latest-news-box ${
                this.state.activeClass[2] ? "showClass" : "hideClass"
              }`}
              id="energy"
            >
              {this.renderNewsByCategoryList()}
            </div>

            <div
              className={`latest-news-box ${
                this.state.activeClass[3] ? "showClass" : "hideClass"
              }`}
              id="mobile"
            >
              {this.renderNewsByCategoryList()}
            </div>

            <div
              className={`latest-news-box ${
                this.state.activeClass[4] ? "showClass" : "hideClass"
              }`}
              id="robotic"
            >
              {this.renderNewsByCategoryList()}
            </div>

            <div
              className={`latest-news-box ${
                this.state.activeClass[5] ? "showClass" : "hideClass"
              }`}
              id="startup"
            >
              {this.renderNewsByCategoryList()}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetNewsByCategory: (type, limit) => {
      dispatch(requestGetNewsByCategory(type, limit));
    }
  };
};

const mapStateToProps = state => {
  return {
    newsByCategoryList: state.newsByCategory
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestInCategory);
