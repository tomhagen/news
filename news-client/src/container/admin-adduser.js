import React, { Component, Fragment } from "react";
import AdminHeader from "../component/admin/admin-header";
import AdminSidebar from "../component/admin/admin-sidebar";
import AddUser from "../component/admin/add-user";

class AdminAddUser extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <Fragment>
        <AdminHeader />
        <div
          className="admin-adduser"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <AdminSidebar />
          <AddUser/>
        </div>
      </Fragment>
    );
  }
}
export default AdminAddUser;
