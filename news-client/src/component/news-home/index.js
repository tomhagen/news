import React, { Component, Fragment } from "react";
import "./index.scss";
import { connect } from "react-redux";
import SubNewsItem from "./sub-news-item";
import moment from "moment";
import { Link } from "react-router-dom";

class NewsHome extends Component {
  renderLatestNews = () => {
    console.log(this.props.computingList.slice(0, 1));
    return this.props.computingList.slice(0, 1).map((computing, index) => {
      return (
        <div
          className="main-news"
          style={{
            width: "67%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            marginRight: "3%",
            backgroundPosition: "center",
            backgroundImage: `url(http://localhost:5000/api/open?name=${
              computing.images
            }`
          }}
        >
          <div className="container">
            <div className="box-info">
              <img src="./img/author-img1.jpeg" className="info-author" />
              <h5 className="info-name">{computing.author}</h5>
              <span className="info-date">
                {moment(computing.createdOn).format("MMM DD YYYY")}
              </span>
            </div>
            <div className="title">
              <Link to={`/detail/${computing._id}`}>{computing.title}</Link>
            </div>
          </div>
        </div>
      );
    });
  };

  renderSubNews = () => {
    return this.props.computingList.slice(1, 8).map((news, index) => {
      return <SubNewsItem key={index} news={news} />;
    });
  };
  render() {
    return (
      <Fragment>
        <section className="news-home">
          <div className="container">
            {this.renderLatestNews()}

            <div className="sub-news">{this.renderSubNews()}</div>
          </div>
        </section>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    newsList: state.newsList
  };
};
export default connect(
  mapStateToProps,
  null
)(NewsHome);
