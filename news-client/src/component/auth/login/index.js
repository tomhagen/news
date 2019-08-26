import "./index.scss";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import React, { Component, Fragment } from "react";
import { login } from "../../../actions/authAction";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleOnSubmit = event => {
    event.preventDefault();

    this.props.login(this.state, this.props.history);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.error.errors) {
      message.error(`Login errors: ${nextProps.error.errors}`);
    }
  }
  render() {
    const { email, password, errors } = this.props.error;

    return (
      <Fragment>
        <div className="section__login">
          <div className="img__container" />
          <div className="login__container">
            <Form onSubmit={this.handleOnSubmit} className="login-form">
              <h3>Login to Continue</h3>
              <Form.Item>
                <Input
                  name="email"
                  onChange={this.handleOnChange}
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                />
                <span className="validate">{email ? email : ""}</span>
                {/* <span className="validate">{errors ? errors : ""}</span> */}
              </Form.Item>
              <Form.Item>
                <Input
                  name="password"
                  onChange={this.handleOnChange}
                  min="5"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
                <span className="validate">{password ? password : ""}</span>
                {/* <span className="validate">{errors ? errors : ""}</span> */}
              </Form.Item>
              <Form.Item>
                <Checkbox>Remember me</Checkbox>
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
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
    error: state.error,
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  { login }
)(Login);
