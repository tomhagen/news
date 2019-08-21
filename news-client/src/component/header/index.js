import "./index.scss";

import React, { Component, Fragment } from "react";
import { Icon, Drawer, Menu, Input } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const {Search} = Input;

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuFixed: false,
      visible: false,
      isShowSearchInput: false,
      isShowQuerySearch: false
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
  handleShowQuerySearch = () => {
    this.setState({
      isShowQuerySearch: !this.state.isShowQuerySearch
    })
  }
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
                <Link to="/">
                  <img alt="logo" src="/img/logo.png" />
                </Link>
              </div>
              <div className="ads">
                <img alt="ads" src="/img/728x90ads.png" />
              </div>
            </div>
          </div>
          <div className={`menu ${this.state.isMenuFixed ? "fixedTop" : ""}`}>
            <ul className="main-container">
              <li className="menu-item">
                <Link to="/" className="menu-item-a menu-item-home">
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/" className="menu-item-a">
                  Computing
                </Link>
                <ul className="menu-item-submenu">
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Right Sidebar
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Left Sidebar
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Fullwidth
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Fullwidth Image
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Gallery Post
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Video Post
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Review Post ( Star )
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Review Post ( Point )
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Review Post ( Percentage )
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Pagniation Post
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link to="/" className="menu-item-a">
                  Single Post
                </Link>
                <ul className="menu-item-submenu">
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Right Sidebar
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Left Sidebar
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Fullwidth
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Fullwidth Image
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Gallery Post
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Video Post
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Review Post ( Star )
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Review Post ( Point )
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Review Post ( Percentage )
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Pagniation Post
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link to="/" className="menu-item-a">
                  Category
                </Link>
                <ul className="menu-item-submenu">
                  <li className="submenu-item">
                    <Link to="/category/BUSINESS" className="submenu-item-a">
                      Business
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/category/COMPUTING" className="submenu-item-a">
                      Computing
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/category/ENERGY" className="submenu-item-a">
                      Energy
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/category/GADGETS" className="submenu-item-a">
                      Gadgets
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/category/MOBILE" className="submenu-item-a">
                      Mobile
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/category/ROBOTIC" className="submenu-item-a">
                      Robotic
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/category/COMPUTING" className="submenu-item-a">
                      Start Up
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/category/TOPNEWS" className="submenu-item-a">
                      Top News
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link to="/" className="menu-item-a">
                  Pages
                </Link>
                <ul className="menu-item-submenu">
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Home with Advertisement
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Left Sidebar
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Fullwidth
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Contact
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Gallery Post
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Video Post
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Background Header
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Typography
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Short Codes
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Pagniation Post
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link to="/" className="menu-item-a">
                  Shop
                </Link>
                <ul className="menu-item-submenu">
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Right Sidebar
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Left Sidebar
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/" className="submenu-item-a">
                      Fullwidth
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="search-container">
              <Icon type="search" onClick={this.handleShowQuerySearch}/>
            </div>

            <div className="hamburger-btn">
              <Icon type="menu" onClick={this.showDrawer} />
            </div>
          </div>

          <div className={`query__search__container ${this.state.isShowQuerySearch ? "showSearch":"hideSearch"} `}>
            <Search
              placeholder="Search something"
              enterButton="Search"
              size="large"
              onSearch={value => console.log(value)}
            />
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
            <img alt="logo" src="./img/logo.png" className="drawer-logo" />
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
