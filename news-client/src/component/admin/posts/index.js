import React, { Component, Fragment } from 'react'
import AdminHeader from '../../ad-header';
import AdminNavbar from '../../ad-navbar';
import AllPosts from '../../ad-all-posts';

class AdminPosts extends Component {
    render() {
        return (
            <Fragment>
                <AdminHeader/>
                <AdminNavbar/>
                <AllPosts/>
            </Fragment>
        )
    }
}
export default AdminPosts