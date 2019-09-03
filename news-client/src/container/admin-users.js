import React, { Component, Fragment } from "react";
import AdminHeader from "../component/admin/admin-header";
import AdminSidebar from "../component/admin/admin-sidebar";
import AllUsers from "../component/admin/all-users";
import { connect } from "react-redux";

class AdminUsers extends Component {
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
          className="admin-users"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <AdminSidebar />
          <AllUsers />
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
)(AdminUsers);
