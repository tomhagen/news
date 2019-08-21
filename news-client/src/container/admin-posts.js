import React, { Component, Fragment } from "react";
import AdminHeader from "../component/admin/admin-header";
import AdminSidebar from "../component/admin/admin-sidebar";
import AllPosts from "../component/admin/admin-all-posts";

class AdminPosts extends Component {
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
export default AdminPosts;
