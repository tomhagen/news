import React, { Component, Fragment } from "react";
import "./index.scss";

import { Table, Divider, Tag, Button, Input } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";

const { Search } = Input;

class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data2: ""
    };
  }
  componentDidMount() {
    Axios({
      method: "get",
      url: "http://localhost:5000/api/post/get"
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.data2.title);
    const data = [
      {
        STT: 1,
        key: "1",
        title: this.state.data2.title,
        date: "27/7/2019",
        status: "public"
      }
    ];

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
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <a href="javascript:;">Edit </a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
        )
      }
    ];
    return (
      <Fragment>
        <div className="post-create">
          <div class="post-container">
            <Link to="/admin/posts/create">
              <Button type="primary">Create New Post</Button>
            </Link>
            <Link to="/">
              <Button block>Return Home Page</Button>
            </Link>
            <Search
              placeholder="Type the title of Post"
              enterButton
              className="post-search"
            />
          </div>
        </div>
        <Table className="post-table" columns={columns} dataSource={data} />
      </Fragment>
    );
  }
}
export default AllPosts;
