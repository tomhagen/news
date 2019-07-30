import React, { Component, Fragment } from "react";
import "./index.scss";
import { Form, Button, Input, Icon, Select, message } from "antd";
import Axios from "axios";

const { Option } = Select;
const { TextArea } = Input;

class CreatePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category: ""
    };
  }
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSelectChange = category => {
    this.setState({
      category
    });
  };
  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const hide = message.loading("Action in progress...", 0);
    setTimeout(
      hide,
      Axios({
        method: "POST",
        url: "http://localhost:5000/api/post/create",
        data: this.state
      })
        .then(res => {
          message.success("New post has created successfully");
        })
        .catch(err => {
          message.error("Cannot create new post");
        })
    );
  };
  render() {
    return (
      <Fragment>
        <div className="create-posts">
          <div class="container">
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
              <Form.Item>
                <Select
                  placeholder="Select the category"
                  onChange={this.handleSelectChange}
                >
                  <Option value="business">Business</Option>
                  <Option value="computing">Computing</Option>
                  <Option value="energy">Energy</Option>
                  <Option value="gadgets">Gadgets</Option>
                  <Option value="mobile">Mobile</Option>
                  <Option value="robotic">Robotic</Option>
                  <Option value="startup">Start Up</Option>
                  <Option value="top news">Top News</Option>
                </Select>
              </Form.Item>
              {/* <Form.Item>
                <Checkbox value="allow">Allow Comment</Checkbox>
            </Form.Item> */}
              <Form.Item>
                <TextArea
                  rows={4}
                  name="description"
                  placeholder="Type content of post"
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
        </div>
      </Fragment>
    );
  }
}
export default CreatePosts;
