import "./index.scss";
import { Link, NavLink } from "react-router-dom";

import React, { Component, Fragment } from "react";

class AdminNavbar extends Component {
  render() {
    return (
      <Fragment>
        <div className="navbar">
          <div className="admin-navbar">
            <ul className="navbar-container">
              <li>
                <NavLink
                  exact activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  to="/admin"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  to="/admin/posts"
                >
                  Post
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  to="/admin/comments"
                >
                  Comment
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  to="/admin/pages"
                >
                  Pages
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default AdminNavbar;
