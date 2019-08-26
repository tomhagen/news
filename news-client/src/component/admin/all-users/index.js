import React, { Component, Fragment } from "react";
import "./index.scss";

import { Table, Divider, Tag, Button, Input, message } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import moment from "moment";
import { connect } from "react-redux";
import {
  requestGetAllUsers,
  actDeleteUser
} from "../../../actions/usersAction";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

const { Search } = Input;

class AllUsers extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.onGetAllUserList();
  }

  onHandleDeleteUser = id => {
    Swal.fire({
      title: "Are you sure to delete this post?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        Axios({
          method: "DELETE",
          url: `http://localhost:5000/api/users/${id}`
        })
          .then(res => {
            this.props.onDeleteUserItem(id);
            message.success("Post had been deleted successfully");
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };

  render() {
    let data = this.props.userList.map((user, index) => {
      return {
        STT: index + 1,
        key: index,
        email: user.email,
        username: user.username,
        date: moment(user.registerDate).format("MMM DD YYYY, h:mm a "),
        usertype: user.usertype,
        actions: (
          <span>
            <Button
              type="danger"
              onClick={() => this.onHandleDeleteUser(user._id)}
            >
              Delete
            </Button>
          </span>
        )
      };
    });

    const columns = [
      {
        title: "STT",
        dataIndex: "STT",
        key: "STT"
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        render: text => <a href="javascript:;">{text}</a>
      },
      {
        title: "Username",
        dataIndex: "username",
        key: "username"
      },

      {
        title: "Register Date",
        dataIndex: "date",
        key: "date"
      },
      {
        title: "Usertype",
        key: "usertype",
        dataIndex: "usertype",
        render: tags => {
          if (tags === "admin") {
            return <Tag color="blue">{tags.toUpperCase()}</Tag>;
          } else if (tags === "user") {
            return <Tag color="gold">{tags.toUpperCase()}</Tag>;
          }
        }
      },
      {
        title: "Actions",
        dataIndex: "actions",
        key: "actions"
      }
    ];
    return (
      <Fragment>
        <div className="users">
          <div className="users-container">
            <Link to="/admin/add-user">
              <Button type="primary">ADD NEW USER</Button>
            </Link>

            <Search
              placeholder="Search Post"
              enterButton
              className="users-search"
            />
          </div>
          <Table
            className="users-table"
            bordered={true}
            columns={columns}
            dataSource={data}
          />
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetAllUserList: () => {
      dispatch(requestGetAllUsers());
    },
    onDeleteUserItem: id => {
      dispatch(actDeleteUser(id));
    }
  };
};

const mapStateToProps = state => {
  return {
    userList: state.userList
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AllUsers));
