import "./index.scss";
import React, { Component, Fragment } from "react";
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Upload,
  message,
  Select,
  Badge,
  Card
} from "antd";
import { connect } from "react-redux";
import { register } from "../../../actions/authAction";
import { withRouter } from "react-router-dom";

const { Option } = Select;
const { Meta } = Card;
const uploadProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text"
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      username: "",
      usertype: ""
    };
  }
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSelectUsertypeChange = usertype => {
    this.setState({
      usertype
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.register(this.state, this.props.history);
  };
  render() {
    const { email, password, password2, username, usertype } = this.props.error;
    return (
      <Fragment>
        <div className="add-user__container">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Badge
              count={"ADD NEW USER"}
              style={{ backgroundColor: "#52c41a", marginBottom: "20px" }}
            />
            <Form.Item>
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
                name="email"
                onChange={this.handleOnChange}
              />
              <span className="validate">{email ? email : ""}</span>
            </Form.Item>
            <Form.Item>
              <Input
                min="5"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleOnChange}
              />
              <span className="validate">{password ? password : ""}</span>
            </Form.Item>
            <Form.Item>
              <Input
                min="5"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                name="password2"
                onChange={this.handleOnChange}
                placeholder="Confirm Password"
              />
              <span className="validate">{password2 ? password2 : ""}</span>
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
                name="username"
                onChange={this.handleOnChange}
              />
              <span className="validate">{username ? username : ""}</span>
            </Form.Item>
            <Form.Item>
              User Type:
              <Select
                placeholder="Please select usertype"
                name="usertype"
                onChange={this.handleSelectUsertypeChange}
              >
                <Option value="admin">Admin</Option>
                <Option value="user">User</Option>
              </Select>
              <span className="validate">{usertype ? usertype : ""}</span>
            </Form.Item>

            <Upload {...uploadProps}>
              <Button>
                <Icon type="upload" /> Upload Avatar
              </Button>
            </Upload>
            <Card
              hoverable
              style={{ width: "500px", marginTop: "30px" }}
              cover={<img alt="example" src="./img/sad" />}
            >
              <Meta title="Hover me anyway soemthing" />
            </Card>
            <Form.Item>
              <Button
                style={{ marginTop: "20px" }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                ADD NEW USER
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { register }
  )(AddUser)
);
