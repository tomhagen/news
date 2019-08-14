import React, { Component, Fragment } from "react";
import "./index.scss";
import { Form, Button, Input, Icon, Select, message, Upload } from "antd";
import Axios from "axios";
// import { Editor } from "@tinymce/tinymce-react";
import CKEditor from "ckeditor4-react";

const { Option } = Select;
const { TextArea } = Input;

class CreatePosts extends Component {
  constructor(props) {
    super(props);
    this.updateContent = this.updateContent.bind(this);
    this.state = {
      title: "",
      description: "",
      category: "",
      file: null,
      images: "",
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

  onChange(evt) {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    this.setState({
      description: newContent
    });
  }
  updateContent(newContent) {
    this.setState({
      description: newContent
    });
  }
  // onEditorChange = event => {
  //   this.setState({
  //     description: event.editor.getData()
  //   });
  // };

  handleUploadChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      file: event.target.files && event.target.files[0]
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    // Handle upload image
    console.log(this.state);

    let file = this.state.file;

    let formData = new FormData();
    formData.append("images", file);
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
      })
      .catch(err => {
        message.error("Cannot upload images", err);
        console.log(err);
      });
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
                  <Option value="BUSINESS">Business</Option>
                  <Option value="COMPUTING">Computing</Option>
                  <Option value="ENERGY">Energy</Option>
                  <Option value="GADGETS">Gadgets</Option>
                  <Option value="MOBILE">Mobile</Option>
                  <Option value="ROBOTIC">Robotic</Option>
                  <Option value="STARTUP">Start Up</Option>
                  <Option value="TOP NEWS">Top News</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Select
                  placeholder="Select Author"
                  onChange={this.handleSelectAuthorChange}
                >
                  <Option value="TUYEN TRAN">Tuyen Tran</Option>
                  <Option value="PHILIPPE XI">Phillipe</Option>
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
                name="images"
                onChange={this.handleUploadChange}
                // file={this.state.file}
              />
              {/* <CKEditor
                // name="description"
                data={this.state.description}
                events={{ change: this.onChange }}
                onChange={this.onEditorChange}
                placeholder="Type content of post"
                onChange={this.handleChange}
              /> */}
              {/* <Editor rows={8}  apiKey="API_KEY" init={{ plugins: "link table" }} /> */}
              {/* <textarea id="mytextarea">Hello, World!</textarea> */}
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
