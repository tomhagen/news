import React, { Component, Fragment } from "react";
import "./index.scss";

import { Table, Divider, Tag, Button, Input, message } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import moment from "moment";
import { connect } from "react-redux";
import {
  requestGetAllNewsList,
  actNewsEdit,
  actNewsEditStatus,
  actDeleteNewsItem
} from "../../../actions/newsAction";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

const { Search } = Input;

class AllPosts extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.onGetAllNewsList();
    // Axios({
    //   method: "GET",
    //   url: "http://localhost:5000/api/posts"
    // })
    //   .then(res => {
    //     // console.log(res.data);
    //     this.setState({
    //       newsList: res.data
    //     });
    //   })
    //   .catch(err => console.log(err));
  }

  onHandleDeleteItem = id => {
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
          url: `http://localhost:5000/api/posts/${id}`
        })
          .then(res => {
            this.props.onDeleteNewsItem(id);
            message.success("Post had been deleted successfully");
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };
  onHandleEditItem = news => {
    this.props.history.push("/admin/posts/create");
    this.props.onEditNews(news);
    this.props.onEditStatus(true);
  };
  handleEditStatus = status => {
    this.props.onEditStatus(status);
  };
  render() {
    let data = this.props.newsList.map((news, index) => {
      return {
        STT: index + 1,
        key: index,
        title: news.title,
        date: moment(news.createdOn).format("MMM DD YYYY, h:mm a "),
        status: news.status,
        actions: (
          <span>
            <Button type="primary" onClick={() => this.onHandleEditItem(news)}>
              Edit
            </Button>
            <Divider type="vertical" />
            <Button
              type="danger"
              onClick={() => this.onHandleDeleteItem(news._id)}
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
        title: "Title",
        dataIndex: "title",
        key: "title",
        render: text => <a href="javascript:;">{text}</a>
      },

      {
        title: "Created Date",
        dataIndex: "date",
        key: "date"
      },
      {
        title: "Status",
        key: "status",
        dataIndex: "status",
        render: tags => {
          if (tags === "public") {
            return <Tag color="blue">{tags.toUpperCase()}</Tag>;
          } else if (tags === "draft") {
            return <Tag color="gold">{tags.toUpperCase()}</Tag>;
          }
        }
      },
      {
        title: "Actions",
        dataIndex: "actions",
        key: "actions"
      }
      // {
      //   title: "Action",
      //   key: "action",
      //   render: (text, record) => (
      //     <span>
      //       <a onClick={this.onHandleDeleteItem()}>Edit </a>
      //       <Divider type="vertical" />
      //       <a href="#">Delete</a>
      //     </span>
      //   )
      // }
    ];
    return (
      <Fragment>
        <div className="post-create">
          <div className="post-container">
            <Link to="/admin/posts/create">
              <Button
                onClick={() => this.handleEditStatus(false)}
                type="primary"
              >
                CREATE NEW POSTS
              </Button>
            </Link>

            <Search
              placeholder="Search Post"
              enterButton
              className="post-search"
            />
          </div>
          <Table
            className="post-table"
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
    onGetAllNewsList: () => {
      dispatch(requestGetAllNewsList());
    },
    onDeleteNewsItem: id => {
      dispatch(actDeleteNewsItem(id));
    },
    onEditNews: news => {
      dispatch(actNewsEdit(news));
    },
    onEditStatus: status => {
      dispatch(actNewsEditStatus(status));
    }
  };
};

const mapStateToProps = state => {
  return {
    newsList: state.newsList,
    editStatus: state.newsEditStatus
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AllPosts));
