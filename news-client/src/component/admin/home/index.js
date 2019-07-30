import React, { Component, Fragment } from 'react'
import AdminHeader from '../../ad-header';
import AdminNavbar from '../../ad-navbar';

class AdminHome extends Component {
    render() {
        return (
            <Fragment>
                <AdminHeader/>
                <AdminNavbar/>
            </Fragment>
        )
    }
}
export default AdminHome