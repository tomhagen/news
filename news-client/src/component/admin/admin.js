import "./index.scss";
import React, { Component, Fragment } from "react";
import Axios from "axios";

import { Form, Icon, Button, Input } from "antd";
const { TextArea } = Input;

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      // status: "",
      description: ""
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    Axios({
      method: "post",
      url: "localhost:5000/api/post/create",
      data: this.state
    })
      // Axios.post("localhost:5000/api/post/create", this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1>CREATE NEW POST</h1>
          {/* <form onSubmit={this.handleOnSubmit}>
            <input name="title" onChange={this.handleOnChange} placeholder="place an title"/>
            <textarea name="description" onChange={this.handleOnChange} placeholder="place an content"></textarea>
            <button type="submit">Submit</button>
          </form> */}
          <Form onSubmit={this.handleOnSubmit}>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Enter the title"
                name="title"
                onChange={this.handleOnChange}
                // value={this.state.email}
              />
            </Form.Item>
            {/* <Form.Item label="Status">
              <Select
                placeholder="Please select the status"
                name="status"
                type="select"
                onChange={this.handleOnchange}
              >
                <Option value="public">Public</Option>
                <Option value="private">Private</Option>
                <Option value="draft">Draft</Option>
              </Select>
            </Form.Item>
            <Form.Item>
                <Checkbox value="allow">Allow Comment</Checkbox>
            </Form.Item> */}
            <Form.Item>
              <TextArea
                rows={4}
                name="description"
                onChange={this.handleOnChange}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Post
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Fragment>
    );
  }
}
export default Admin;
