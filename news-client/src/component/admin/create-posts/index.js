import React, { Component, Fragment } from "react";
import "./index.scss";
import {
  Form,
  Button,
  Input,
  Icon,
  Select,
  message,
  Badge,
  Tag,
  Card,
  Checkbox
} from "antd";
import Axios from "axios";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const { Option } = Select;
const { Meta } = Card;

class CreatePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      mainContent: "",
      category: "",
      file: null,
      images: "",
      author: "",
      trending: false
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
    this.rteChange2 = this.rteChange2.bind(this);
  }

  rteChange = (content, delta, source, editor) => {
    let text = editor.getHTML();
    this.setState({
      description: text
    });
  };
  rteChange2 = (content, delta, source, editor) => {
    let text2 = editor.getHTML();
    this.setState({
      mainContent: text2
    });
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

  handleTrendingChange = event => {
    // console.log(event.target.checked)
    this.setState({
      trending: event.target.checked
    });
  };
  handleReturnAdmin = () => {};

  checkMimeType = event => {
    //getting file object
    let files = event.target.files;
    let err = "";
    const types = ["image/png", "image/jpeg", "image/gif"];

    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't match
      if (types.every(type => files[x].type !== type)) {
        // create error message and assign to container
        err += files[x].type + " is not a supported format\n";
        message.error("We only supported JPEG, PNG & GIF format !", 1.5);
      }
    }

    if (err !== "") {
      // if message not same old that mean has error
      event.target.value = null; // discard selected file
      console.log(err);
      return false;
    }
    return true;
  };

  checkFileSize = event => {
    let files = event.target.files;
    let size = 2097152; // 2MB
    let err = "";
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err += files[x].type + "is too large, please pick a smaller file\n";
        message.error("Images is too large. Please select the file below 2MB");
      }
    }
    if (err !== "") {
      event.target.value = null;
      console.log(err);
      return false;
    }

    return true;
  };

  handleUploadChange = event => {
    if (this.checkMimeType(event) && this.checkFileSize(event)) {
      this.setState({
        [event.target.name]: event.target.value,
        file: event.target.files && event.target.files[0]
      });
    }
  };

  handleOnSubmit = event => {
    event.preventDefault();
    // Handle upload image

    let file = this.state.file;

    let formData = new FormData();
    formData.append("images", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    // CREATE POSTS
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
            data: { ...this.state, images: res.data.path }
          })
            .then(res => {
              message.loading("Action in progress...", 1);
              const success = () => {
                this.props.history.push("/admin/posts");
                message.success("New post has created successfully", 1);
              };
              setTimeout(success, 500);
            })
            .catch(err => {
              message.error("Cannot create new post");
            });
        })
        .catch(err => {
          // console.log(res.message);
          message.error("Upload images errors. Please update again", 1.5);
          // console.log(err);
        });
    } else {
      // UPDATE POSTS
      if (this.state.file !== null) { // Check if images have data or not 
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
                url: `http://localhost:5000/api/posts/${this.props.editNewsInfo._id}`,
                data: { ...this.state, images: res.data.path }
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
      } else {
        Axios({
          method: "PUT",
          url: `http://localhost:5000/api/posts/${this.props.editNewsInfo._id}`,
          data: this.state
        })
          .then(res => {
            message.success("Update post successfully");
            this.props.history.push("/admin/posts");
          })
          .catch(err => {
            message.error("Cannot update post");
          });
      }
    }
  };

  componentWillMount() {
    if (this.props.editStatus) {
      this.setState({
        title: this.props.editNewsInfo.title,
        category: this.props.editNewsInfo.category,
        author: this.props.editNewsInfo.author,
        description: this.props.editNewsInfo.description,
        mainContent: this.props.editNewsInfo.mainContent,
        trending: this.props.editNewsInfo.trending,
        images: this.props.editNewsInfo.images
        // file: this.props.editNewsInfo.file
      });
    }
  }
  render() {
    return (
      <Fragment>
        <div className="create-posts">
          <div className="container">
            <Badge
              count={
                this.props.editStatus ? "UPDATE A NEW POST" : "CREATE POST"
              }
              style={{ backgroundColor: "#52c41a" }}
            />
            <Form onSubmit={this.handleOnSubmit}>
              {/* Form Title */}
              <Form.Item label="Post Title">
                <Input
                  placeholder="Type here..."
                  name="title"
                  value={this.state.title}
                  onChange={this.handleOnChange}
                />
              </Form.Item>

              {/* Form Editor */}
              <Form.Item label="Post Description"></Form.Item>
              <ReactQuill
                theme="snow"
                name="description"
                modules={this.modules}
                formats={this.formats}
                onChange={this.rteChange}
                value={this.state.description}
              />

              {/* Form Category */}
              <Form.Item label="Choose the category">
                <Select
                  value={this.state.category}
                  onChange={this.handleSelectCategoryChange}
                >
                  <Option value="business">Business</Option>
                  <Option value="computing">Computing</Option>
                  <Option value="energy">Energy</Option>
                  <Option value="gadgets">Gadgets</Option>
                  <Option value="mobile">Mobile</Option>
                  <Option value="robotic">Robotic</Option>
                  <Option value="startup">Start Up</Option>
                  <Option value="topnews">Top News</Option>
                </Select>
              </Form.Item>

              {/* Form Author */}
              <Form.Item label="Select Author">
                <Select
                  onChange={this.handleSelectAuthorChange}
                  value={this.state.author}
                >
                  <Option value="Tuyen Tran">Tuyen Tran</Option>
                  <Option value="Philippe XI">Phillipe</Option>
                  <Option value="Chris Welch">Chris Welch</Option>
                  <Option value="Dieter Bohn">Dieter Bohn</Option>
                  <Option value="Jon Porter">Jon Porter</Option>
                </Select>
              </Form.Item>

              {/* Form Trending */}
              <Form.Item className="checkbox">
                <Checkbox
                  onChange={this.handleTrendingChange}
                  checked={this.state.trending}
                  value="true"
                >
                  Mark as Trending Posts
                </Checkbox>
              </Form.Item>

              {/* Form Editor */}
              <Form.Item label="Main Content of Post"></Form.Item>
              <ReactQuill
                theme="snow"
                name="mainContent"
                modules={this.modules}
                formats={this.formats}
                onChange={this.rteChange2}
                value={this.state.mainContent}
              />

              {/* Upload images */}
              <Form.Item label="Upload images"></Form.Item>
              <input
                style={{ marginTop: "30px" }}
                type="file"
                name="images"
                onChange={this.handleUploadChange}
                file={this.state.file}
              />
              {this.state.images ? (
                <Card
                  hoverable
                  style={{ width: "500px", marginTop: "30px" }}
                  cover={
                    <img
                      alt="example"
                      src={`http://localhost:5000/api/open?name=${this.state.images.replace(
                        "C:\\fakepath\\",
                        ""
                      )}`}
                    />
                  }
                >
                  <Meta
                    title={this.state.images.replace("C:\\fakepath\\", "")}
                  />
                </Card>
              ) : (
                ""
              )}

              {/* Form Button */}
              <Form.Item>
                <Button className="publish__btn" htmlType="submit">
                  {this.props.editStatus ? "UPDATE POST" : "PUBLISH"}
                </Button>
                <Button className="preview__btn">
                  {this.props.editStatus ? "PREVIEW CHANGES" : "PREVIEW"}
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
