import "./index.scss";
import React, { Component, Fragment } from "react";
import moment from 'moment';
import {Link } from 'react-router-dom';

class LatestNewsItem extends Component {
 
  render() {
    let item = this.props.item;
    return (
      <Fragment>
        <div className="latest-news-item">
          <div className="item-box-img">
            <Link to={`detail/${item._id}`}>
              {/* <img src="./img/latest-news-item1.jpg" className="item-img" /> */}
              <img src={`http://localhost:5000/api/open?name=${item.images}`} className="item-img" />
            </Link>
          </div>
          <div className="item-box-content">
            <h5 className="content-title">
              <Link to={`/detail/${item._id}`}>
                {item.title}
                {/* 3 Delicious Post-Holiday Detox Recipes, Courtesy of Personal
                Chef */}
              </Link>
            </h5>
            <p className="content">
            <div dangerouslySetInnerHTML={{__html: item.description.substr(0,100) + "...."}}/>
              {/* {item.description.substr(0,100) + "...."} */}
              {/* Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor
              sit amet, consectetur Nulla fringilla purus at leo […] */}
            </p>
            <div className="content-info">
              <h5 className="info-name">{item.author}</h5>
              <span className="info-date">POSTED ON {moment(item.createdOn).format('kk:mmA  MMM DD, YYYY')}</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default LatestNewsItem;
