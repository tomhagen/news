import React, { Component, Fragment } from "react";
import AdminHeader from "../component/admin/admin-header";
import AdminSidebar from "../component/admin/admin-sidebar";
import CreatePosts from "../component/admin/create-posts";

class AdminCreate extends Component {
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
export default AdminCreate;
