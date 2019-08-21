import "./index.scss";
import React, { Component, Fragment } from "react";
import { Input } from "antd";
import ResultItem from "./result-item";
const { Search } = Input;

class SearchItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="search__container">
          <div className="search__title">
            <p>RESULTS FOR "LAPTOP"</p>
          </div>

          <div className="search__wrapper">
            <div className="search__btn">
              <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={value => console.log(value)}
              />
            </div>
            <div className="search__main">
              <div className="filter__container">
                <h2>FILTER</h2>
                <div className="filter__list">
                  <h3>Sort By</h3>
                  <ul>
                    <li>
                      <a href="#">Relevancy</a>
                    </li>
                    <li>
                      <a href="#">Date</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="result__container">
                <ResultItem />
                <ResultItem />
                <ResultItem />
                <ResultItem />
                <ResultItem />
                <ResultItem />
                
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default SearchItem;
