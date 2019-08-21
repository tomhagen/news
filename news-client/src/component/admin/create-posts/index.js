import React, { Component, Fragment } from "react";
import "./index.scss";
import { Form, Button, Input, Icon, Select, message, Badge } from "antd";
import Axios from "axios";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const { Option } = Select;

class CreatePosts extends Component {
  constructor(props) {
    super(props);
    // this.updateContent = this.updateContent.bind(this);
    this.state = {
      title: "",
      description: "",
      category: "",
      file: null,
      images: "",
      author: ""
      // comments: ""
    };
    this.modules = {
      toolbar: [
        [{ font: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        ["link", "image", "video", "formula"],
        [{ direction: "rtl" }],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        ["clean"],
        [{ header: "3" }]
      ]
    };

    this.formats = [
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "list",
      "bullet",
      "align",
      "color",
      "background",
      "code",
      "link",
      "strike",
      "script",
      "header",
      "indent",
      "direction",
      "image",
      "video"
    ];
    this.rteChange = this.rteChange.bind(this);
  }

  rteChange = (content, delta, source, editor) => {
    const text = editor.getHTML();
    this.setState({
      description: text
    });
    console.log(text); // rich text
    // console.log(editor.getText()); // plain text
    // console.log(editor.getLength()); // number of characters
  };

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
  handleReturnAdmin = () => {};
  // onChange(evt) {
  //   console.log("onChange fired with event info: ", evt);
  //   var newContent = evt.editor.getData();
  //   this.setState({
  //     description: newContent
  //   });
  // }
  // updateContent(newContent) {
  //   this.setState({
  //     description: newContent
  //   });
  // }

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

    if (!this.props.editStatus) {
      Axios({
        method: "POST",
        url: "http://localhost:5000/api/upload_images",
        data: formData,
        config
      })
        .then(res => {
          // message.success("Upload images successfully");
          Axios({
            method: "POST",
            url: "http://localhost:5000/api/posts",
            data: this.state
          })
            .then(res => {
              message.loading("Action in progress...", 1);
              const success = () => {
                this.props.history.push("/admin/posts");
                message.success("New post has created successfully",1);
                
              };
              setTimeout(success, 500);
            })
            .catch(err => {
              message.error("Cannot create new post");
            });
        })
        .catch(err => {
          message.error("Upload images errors. Please update again", 1.5);
          console.log(err);
        });

      // Create a new posts
    } else {
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
              method: "PUT",
              url: `http://localhost:5000/api/posts/${
                this.props.editNewsInfo._id
              }`,
              data: this.state
            })
              .then(res => {
                message.success("Update post successfully");
                this.props.history.push("/admin/posts");
              })
              .catch(err => {
                message.error("Cannot update post");
              })
          );
        })
        .catch(err => {
          message.error("Cannot upload images", err);
          console.log(err);
        });
    }
  };

  componentWillMount() {
    if (this.props.editStatus) {
      this.setState({
        title: this.props.editNewsInfo.title,
        category: this.props.editNewsInfo.category,
        author: this.props.editNewsInfo.author,
        description: this.props.editNewsInfo.description
        // images: this.props.editNewsInfo.images,
        // file: this.props.editNewsInfo.file
      });
    }
  }
  render() {
    return (
      <Fragment>
        <div className="create-posts">
          <div class="container">
            <Badge
              count={
                this.props.editStatus ? "UPDATE A NEW POST" : "CREATE POST"
              }
              style={{ backgroundColor: "#52c41a" }}
            />
            <Form onSubmit={this.handleOnSubmit}>
              <Form.Item>
                <Input
                  placeholder="Enter the title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleOnChange}
                />
              </Form.Item>
              <Form.Item>
                <Select
                  placeholder="Select the category"
                  value={this.state.category}
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
                  value={this.state.author}
                >
                  <Option value="TUYEN TRAN">Tuyen Tran</Option>
                  <Option value="PHILIPPE XI">Phillipe</Option>
                </Select>
              </Form.Item>

              {/* <Form.Item>
                <TextArea
                  rows={4}
                  name="description"
                  value={this.state.description}
                  placeholder="Type content of post"
                  onChange={this.handleOnChange}
                />
              </Form.Item> */}

              <ReactQuill
                theme="snow"
                name="description"
                modules={this.modules}
                formats={this.formats}
                onChange={this.rteChange}
                value={this.state.description}
                // placeholde="Write somethign"
              />
              <input
                style={{ marginTop: "30px" }}
                type="file"
                name="images"
                value={this.state.images}
                onChange={this.handleUploadChange}
                file={this.state.file}
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
                  {this.props.editStatus ? "UPDATE POST" : "CREATE NEW POST"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    editStatus: state.newsEditStatus,
    editNewsInfo: state.newsEdit
  };
};
export default connect(
  mapStateToProps,
  null
)(withRouter(CreatePosts));
