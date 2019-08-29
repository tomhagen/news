import React, { Component, Fragment } from "react";
import AdminHeader from "../component/admin/admin-header";
import AdminSidebar from "../component/admin/admin-sidebar";
import DashboardContainer from "../component/admin/dashboard-container";
import { connect } from "react-redux";

class AdminDashboard extends Component {
  componentWillMount() {
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
    console.log(this.props.auth.profile.usertype);
    return (
      <Fragment>
        <AdminHeader />
        <div
          className="admin-dashboard"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <AdminSidebar />
          <DashboardContainer />
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
)(AdminDashboard);
