import React, { Component, Fragment } from "react";
import AdminHeader from "../component/admin/admin-header";
import AdminSidebar from "../component/admin/admin-sidebar";
import AllPosts from "../component/admin/admin-all-posts";
import { connect } from "react-redux";

class AdminPosts extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/login");
    } else {
      if (this.props.auth.profile.usertype !== "admin") {
        this.props.history.push("/permission");
      }
    }
  }
  render() {
    return (
      <Fragment>
        <AdminHeader />
        <div
          className="admin-posts"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <AdminSidebar />
          <AllPosts />
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  null
)(AdminPosts);
