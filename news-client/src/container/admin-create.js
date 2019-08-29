import React, { Component, Fragment } from "react";
import AdminHeader from "../component/admin/admin-header";
import AdminSidebar from "../component/admin/admin-sidebar";
import CreatePosts from "../component/admin/create-posts";
import { connect } from "react-redux";

class AdminCreate extends Component {
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
          className="admin-create"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <AdminSidebar />
          <CreatePosts />
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
)(AdminCreate);
