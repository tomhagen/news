import "./index.scss";
import { NavLink } from "react-router-dom";
import { Icon, Drawer, Menu, Input } from "antd";

import React, { Component, Fragment } from "react";
const { SubMenu } = Menu;
const { Search } = Input;
class AdminSidebar extends Component {
  render() {
    return (
      <Fragment>
        <div className="admin__sidebar">
          <div className="sidebar__container">
            <ul className="drawer-menu-container">
              <Menu mode="inline">

                {/* Dashboard */}
                <Menu.Item key="1">
                  <Icon type="dashboard" />
                  <span>
                    <NavLink
                      to="/admin/dashboard"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#08A100"
                      }}
                      style={{ color: "rgba(0, 0, 0, 0.65)" }}
                    >
                      {" "}
                      Dashboard
                    </NavLink>
                  </span>
                </Menu.Item>

                {/* Posts */}
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <i className="fa fa-clipboard" />
                      <span style={{ marginLeft: "10px" }}>Posts</span>
                    </span>
                  }
                >
                  <Menu.Item key="1">
                    <NavLink
                      exact
                      to="/admin/posts"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#08A100"
                      }}
                      style={{ color: "rgba(0, 0, 0, 0.65)" }}
                    >
                      All Posts
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <NavLink
                      to="/admin/posts/create"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#08A100"
                      }}
                      style={{ color: "rgba(0, 0, 0, 0.65)" }}
                    >
                      Add New
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="3">Categories</Menu.Item>
                  <Menu.Item key="4">Tags</Menu.Item>
                </SubMenu>

                {/* Layouts */}
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="snippets" />
                      <span>Layouts</span>
                    </span>
                  }
                >
                  <Menu.Item key="1">Home</Menu.Item>
                  <Menu.Item key="2">Categories</Menu.Item>
                  <Menu.Item key="3">News</Menu.Item>
                  <Menu.Item key="4">Detail</Menu.Item>
                  <Menu.Item key="5">Gallery Post</Menu.Item>
                </SubMenu>

                {/* Comments */}
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <i className="fa fa-comments" />
                      <span style={{ marginLeft: "10px" }}>Comments</span>
                    </span>
                  }
                >
                  <Menu.Item key="1">Right Sidebar</Menu.Item>
                  <Menu.Item key="2">Left Sidebar</Menu.Item>
                  <Menu.Item key="3">Fullwidth</Menu.Item>
                  <Menu.Item key="4">Fullwidth Imgae</Menu.Item>
                </SubMenu>

                {/* Users */}
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <Icon type="usergroup-add" />
                      <span>Users</span>
                    </span>
                  }
                >
                  <Menu.Item key="1">
                    <NavLink
                      to="/admin/add-user"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#08A100"
                      }}
                      style={{ color: "rgba(0, 0, 0, 0.65)" }}
                    >
                      Add New User
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <NavLink
                      to="/admin/users"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#08A100"
                      }}
                      style={{ color: "rgba(0, 0, 0, 0.65)" }}
                    >
                      All Users
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="3">Fullwidth</Menu.Item>
                  <Menu.Item key="4">Fullwidth Imgae</Menu.Item>
                </SubMenu>
                <Menu.Item key="2">
                  <Icon type="contacts" />
                  <span>Contact</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="setting" />
                  <span>Setting</span>
                </Menu.Item>
              </Menu>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default AdminSidebar;
