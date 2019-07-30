import "./index.scss";

import React, { Component, Fragment } from "react";
import { Icon, Drawer, Menu } from "antd";

const { SubMenu } = Menu;


class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuFixed: false,
      visible: false,
      isShowSearchInput: false
    };
  }
  handleMenuScroll = () => {
    const currentMenuScroll = window.pageYOffset;
    if (currentMenuScroll > 170) {
      this.setState({
        isMenuFixed: true
      });
    } else {
      this.setState({
        isMenuFixed: false
      });
    }
  };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleMenuScroll);
  }

  render() {
    return (
      <Fragment>
        <header>
          <div className="box-ads">
            <div className="container">
              <div className="logo">
                <img alt="logo" src="./img/logo.png" />
              </div>
              <div className="ads">
                <img alt="ads" src="./img/728x90ads.png" />
              </div>
            </div>
          </div>
          <div className={`menu ${this.state.isMenuFixed ? "fixedTop" : ""}`}>
            <ul className="main-container">
              <li className="menu-item">
                <a className="menu-item-a menu-item-home">Home</a>
              </li>
              <li className="menu-item">
                <a className="menu-item-a">Computing</a>
                <ul className="menu-item-submenu">
                  <li className="submenu-item">
                    <a className="submenu-item-a">Right Sidebar</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Left Sidebar</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Fullwidth</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Fullwidth Image</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Gallery Post</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Video Post</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Review Post ( Star )</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Review Post ( Point )</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Review Post ( Percentage )</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Pagniation Post</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a className="menu-item-a">Single Post</a>
                <ul className="menu-item-submenu">
                  <li className="submenu-item">
                    <a className="submenu-item-a">Right Sidebar</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Left Sidebar</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Fullwidth</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Fullwidth Image</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Gallery Post</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Video Post</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Review Post ( Star )</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Review Post ( Point )</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Review Post ( Percentage )</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Pagniation Post</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a className="menu-item-a">Category</a>
                <ul className="menu-item-submenu">
                  <li className="submenu-item">
                    <a className="submenu-item-a">
                      Full Post Grid + Right Sidebar
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Full Post Grid Fullwidth</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Full Post + List</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Grid 2 Columns</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Grid 3 Columns</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Right Sidebar</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Left Sidebar</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Fullwidth</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">List</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a className="menu-item-a">Pages</a>
                <ul className="menu-item-submenu">
                  <li className="submenu-item">
                    <a className="submenu-item-a">Home with Advertisement</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Left Sidebar</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Fullwidth</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Contact</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Gallery Post</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Video Post</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Background Header</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Typography</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Short Codes</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Pagniation Post</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a className="menu-item-a">Shop</a>
                <ul className="menu-item-submenu">
                  <li className="submenu-item">
                    <a className="submenu-item-a">Right Sidebar</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Left Sidebar</a>
                  </li>
                  <li className="submenu-item">
                    <a className="submenu-item-a">Fullwidth</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="search-container">
              <Icon type="search" />
            </div>

            <div className="hamburger-btn">
              <Icon type="menu" onClick={this.showDrawer} />
            </div>
          </div>
        </header>

        {/* Drawer */}
        <Drawer
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          className="drawer"
        >
          <div className="box-logo">
            <img src="./img/logo.png" className="drawer-logo" />
          </div>
          <div className="drawer-overlay" />
          <br />
          <ul className="drawer-menu-container">
            <Menu mode="inline" style={{ width: 230 }}>
              <Menu.Item key="1">
                <Icon type="home" />
                <span>Home</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <i class="fa fa-laptop" />
                    <span style={{ marginLeft: "10px" }}>Computing</span>
                  </span>
                }
              >
                <Menu.Item key="1">Right Sidebar</Menu.Item>
                <Menu.Item key="2">Left Sidebar</Menu.Item>
                <Menu.Item key="3">Fullwidth</Menu.Item>
                <Menu.Item key="4">Fullwidth Imgae</Menu.Item>
                <Menu.Item key="5">Gallery Post</Menu.Item>
                <Menu.Item key="6">Video Post</Menu.Item>
                <Menu.Item key="7">Review Post (Star)</Menu.Item>
                <Menu.Item key="8">Review Post (Point)</Menu.Item>
                <Menu.Item key="9">Review Post (Percentage)</Menu.Item>
                <Menu.Item key="10">Pagniation Post</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <i class="fa fa-clipboard" />
                    <span style={{ marginLeft: "10px" }}>Single Post</span>
                  </span>
                }
              >
                <Menu.Item key="1">Right Sidebar</Menu.Item>
                <Menu.Item key="2">Left Sidebar</Menu.Item>
                <Menu.Item key="3">Fullwidth</Menu.Item>
                <Menu.Item key="4">Fullwidth Imgae</Menu.Item>
                <Menu.Item key="5">Gallery Post</Menu.Item>
                <Menu.Item key="6">Video Post</Menu.Item>
                <Menu.Item key="7">Review Post (Star)</Menu.Item>
                <Menu.Item key="8">Review Post (Point)</Menu.Item>
                <Menu.Item key="9">Review Post (Percentage)</Menu.Item>
                <Menu.Item key="10">Pagniation Post</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>Category</span>
                  </span>
                }
              >
                <Menu.Item key="1">Right Sidebar</Menu.Item>
                <Menu.Item key="2">Left Sidebar</Menu.Item>
                <Menu.Item key="3">Fullwidth</Menu.Item>
                <Menu.Item key="4">Fullwidth Imgae</Menu.Item>
                <Menu.Item key="5">Gallery Post</Menu.Item>
                <Menu.Item key="6">Video Post</Menu.Item>
                <Menu.Item key="7">Review Post (Star)</Menu.Item>
                <Menu.Item key="8">Review Post (Point)</Menu.Item>
                <Menu.Item key="9">Review Post (Percentage)</Menu.Item>
                <Menu.Item key="10">Pagniation Post</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <i class="fa fa-paper-plane" />
                    <span style={{ marginLeft: "10px" }}>Pages</span>
                  </span>
                }
              >
                <Menu.Item key="1">Right Sidebar</Menu.Item>
                <Menu.Item key="2">Left Sidebar</Menu.Item>
                <Menu.Item key="3">Fullwidth</Menu.Item>
                <Menu.Item key="4">Fullwidth Imgae</Menu.Item>
                <Menu.Item key="5">Gallery Post</Menu.Item>
                <Menu.Item key="6">Video Post</Menu.Item>
                <Menu.Item key="7">Review Post (Star)</Menu.Item>
                <Menu.Item key="8">Review Post (Point)</Menu.Item>
                <Menu.Item key="9">Review Post (Percentage)</Menu.Item>
                <Menu.Item key="10">Pagniation Post</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub6"
                title={
                  <span>
                    <Icon type="shopping-cart" />
                    <span>Shop</span>
                  </span>
                }
              >
                <Menu.Item key="1">Right Sidebar</Menu.Item>
                <Menu.Item key="2">Left Sidebar</Menu.Item>
                <Menu.Item key="3">Fullwidth</Menu.Item>
                <Menu.Item key="4">Fullwidth Imgae</Menu.Item>
                <Menu.Item key="5">Gallery Post</Menu.Item>
                <Menu.Item key="6">Video Post</Menu.Item>
                <Menu.Item key="7">Review Post (Star)</Menu.Item>
                <Menu.Item key="8">Review Post (Point)</Menu.Item>
                <Menu.Item key="9">Review Post (Percentage)</Menu.Item>
                <Menu.Item key="10">Pagniation Post</Menu.Item>
              </SubMenu>
            </Menu>
          </ul>
        </Drawer>
      </Fragment>
    );
  }
}
export default header;
