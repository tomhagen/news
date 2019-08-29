import "./index.scss";
import { Icon, Button } from "antd";
import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { requestGetAllNewsList } from "../../../actions/newsAction";
import { requestGetAllUsers } from "../../../actions/usersAction";

class DashboardContainer extends Component {
  componentDidMount() {
    this.props.onGetAllNewsList();
    this.props.onGetAllUserList();
  }
  render() {
    // console.log(this.props.newsList.length)
    return (
      <Fragment>
        <div className="dashboard__wrapper">
          <div className="number-card v1">
            <div className="card-top">
              <span>{this.props.userList.length}</span>
            </div>
            <div className="card-info">
              <span>Total Users</span>
            </div>
            <div className="card-bottom">
              <Button type="primary" size="large">
                <Link to="/admin/add-user">Add New User</Link>
              </Button>
            </div>
          </div>
          <div className="number-card v2">
            <div className="card-top">
              <span>{this.props.newsList.length}</span>
            </div>
            <div className="card-info">
              <span>Total Posts</span>
            </div>
            <div className="card-bottom">
              <Button type="primary" size="large">
                <Link to="/admin/posts/create">Add New Post</Link>
              </Button>
            </div>
          </div>
          <div className="number-card v3">
            <div className="card-top">
              <span>10</span>
            </div>
            <div className="card-info">
              <span>Total Comments</span>
            </div>
            <div className="card-bottom">
              <Button type="primary" size="large">
                Manage Comments
              </Button>
            </div>
          </div>
          <div className="number-card v4">
            <div className="card-top">
              <span>20</span>
            </div>
            <div className="card-info">
              <span>Total Contact</span>
            </div>
            <div className="card-bottom">
              <Button type="primary" size="large">
                View Contacts
              </Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    newsList: state.newsList,
    userList: state.userList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetAllNewsList: () => {
      dispatch(requestGetAllNewsList());
    },
    onGetAllUserList: () => {
      dispatch(requestGetAllUsers());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
