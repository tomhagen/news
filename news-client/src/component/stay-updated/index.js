import "./index.scss";
import { Input, Button, message } from "antd";

import React, { Component, Fragment } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

class StayUpdated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleOnSubmit = event => {
    event.preventDefault();
    const hide = message.loading("Action in progress..", 0);
    setTimeout(hide, 2500);
    Axios({
      method: "POST",
      url: "http://localhost:5000/api/getemail",
      data: this.state
    })
      .then(res => {
        Swal.fire({
          position: "top-end",
          type: "success",
          title:
            "Your email had been sent successfully. We will contact you right away",
          showConfirmButton: false,
          timer: 1500
        });
        console.log(res.data);
      })
      .catch(err => {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Something went wrong!"
        });
        console.log(err);
      });
  };
  render() {
    return (
      <Fragment>
        <section className="stay-updated">
          <div className="container">
            <h2 className="stay-updated-title">Stay Updated</h2>

            <form className="subscribe-form" onSubmit={this.handleOnSubmit}>
              <p className="stay-updated-content">
                Get the recent popular stories straight into your inbox
              </p>
              <Input
                placeholder="Email"
                className="input-form"
                name="email"
                onChange={this.handleOnChange}
              />
              <Button type="primary" htmlType="submit" className="input-btn">
                SIGN UP
              </Button>
            </form>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default StayUpdated;
