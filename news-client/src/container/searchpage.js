import React, { Component, Fragment } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import SearchItem from "../component/search";
import { connect } from "react-redux";
import { requestGetAllNewsList } from "../actions/newsAction";

class SearchPage extends Component {
  componentDidMount() {
    this.props.onGetAllNewsList();
  }
  render() {
    return (
      <Fragment>
        <Header />
        <SearchItem />

        <Footer />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetAllNewsList: () => {
      dispatch(requestGetAllNewsList());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchPage);
