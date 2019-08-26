import React, { Component, Fragment } from "react";
import AdminHeader from "../component/admin/admin-header";
import AdminSidebar from "../component/admin/admin-sidebar";
import DashboardContainer from "../component/admin/dashboard-container";

class AdminDashboard extends Component {
  componentDidMount(){
    const token = localStorage.getItem('token');
    if(!token){
      this.props.history.push("/login")
    }
  }
  render() {
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
export default AdminDashboard;
