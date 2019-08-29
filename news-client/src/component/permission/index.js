import React, { Component, Fragment } from "react";
import "./index.scss";
import { Button } from "antd";
import {Link} from 'react-router-dom';


class Permission extends Component {
  render() {
    return (
      <Fragment>
        <div className="permission">
          <i class="fa fa-lock"></i>
          <p >You dont have a permission to view this page</p>
          <p>Please ask admin to give you authorizing to this page</p>
          <Button type="primary"><Link to="/">Return Home Page</Link></Button>
        </div>
      </Fragment>
    );
  }
}
export default Permission;
