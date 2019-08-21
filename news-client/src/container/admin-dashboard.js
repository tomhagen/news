import React, { Component, Fragment } from 'react'
import AdminHeader from '../component/admin/admin-header';
import AdminSidebar from '../component/admin/admin-sidebar';

class AdminDashboard extends Component {
    render() {
        return (
            <Fragment>
                <AdminHeader/>
                <AdminSidebar/>
            </Fragment>
        )
    }
}
export default AdminDashboard