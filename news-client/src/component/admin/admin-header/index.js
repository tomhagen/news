import React, { Component, Fragment } from "react";
import { Icon, message } from "antd";
import "./index.scss";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import jwtDecoded from "jwt-decode";
import { setCurrentUser, logout } from "../../../actions/authAction";

class AdminHeader extends Component {

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecoded(token);
      this.props.onSetProfile(decoded);
    }
  }
  handleLogout = () => {
    this.props.onHandleLogout()
    message.success("You have logout successfully")
    this.props.history.push("/login")
  }
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="admin-header">
            <div className="admin-container">
              <div className="logo">
                <Link to="/">
                  <img alt="logo" src="/img/logo.png" />
                </Link>
              </div>
              <div className="admin-info">
                <Icon type="bell" className="admin-icon" />
                <div className="admin-img">
                  <img alt="admin" src="/img/author-img1.jpeg" />
                </div>
                <p className="admin-name"> Hi, {this.props.profile.username}</p>
                <div className="logout" onClick={this.handleLogout}>
                  Logout <Icon type="logout" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    profile: state.auth.profile
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSetProfile: token => {
      dispatch(setCurrentUser(token));
    },
    onHandleLogout: () => {
      dispatch(logout());
    }
  };
};
export default withRouter( connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminHeader)) ;
