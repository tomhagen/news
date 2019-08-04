import React, { Component, Fragment } from "react";
import "./index.scss";
import { Form, Button, Input, Icon, Select, message, Upload } from "antd";
import Axios from "axios";

const { Option } = Select;
const { TextArea } = Input;

class CreatePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category: "",
      file: null,
      author: ""
    };
  }
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSelectCategoryChange = category => {
    this.setState({
      category
    });
  };
  handleSelectAuthorChange = author => {
    this.setState({
      author
    });
  };

  handleUploadChange = event => {
    let file = event.target.files[0];
    this.setState({
      file: file
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    // Handle upload image
    console.log(this.state);
    let file = this.state.file;

    let formData = new FormData();
    formData.append("imgUrl", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    Axios({
      method: "POST",
      url: "http://localhost:5000/api/upload_images",
      data: formData,
      config
    })
      .then(res => {
        if (res.data.result === "failed") {
          message.error("Cannot upload images");
        } else {
          message.success("Upload images successfully");
        }
      })
      .catch(err => {
        message.error("Cannot upload images");
      });

    // Handle submit form
    const hide = message.loading("Action in progress...", 0);
    setTimeout(
      hide,
      Axios({
        method: "POST",
        url: "http://localhost:5000/api/posts",
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
                  onChange={this.handleSelectCategoryChange}
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
              <Form.Item>
                <Select
                  placeholder="Select Author"
                  onChange={this.handleSelectAuthorChange}
                >
                  <Option value="tuyentran">Tuyen Tran</Option>
                  <Option value="phillipe">Phillipe</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <TextArea
                  rows={4}
                  name="description"
                  placeholder="Type content of post"
                  onChange={this.handleOnChange}
                />
              </Form.Item>
              <input
                type="file"
                name="imgUrl"
                onChange={this.handleUploadChange}
              />

              {/* <Form.Item label="Upload">
                <Upload
                  name="imgUrl"
                  onFieldsChange={this.handleUploadChange}
                  action={this.handleUploadSubmit}
                  listType="picture"
                >
                  <Button>
                    <Icon type="upload" /> Click to upload image
                  </Button>
                </Upload>
              </Form.Item> */}

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
