import React, { Component, Fragment } from "react";
import AdminHeader from "../component/admin/admin-header";
import AdminSidebar from "../component/admin/admin-sidebar";
import AllUsers from '../component/admin/all-users';


class AdminUsers extends Component {
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
          className="admin-users"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <AdminSidebar />
            <AllUsers/>
        </div>
      </Fragment>
    );
  }
}
export default AdminUsers;
