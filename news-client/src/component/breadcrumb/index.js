import "./index.scss";
import { Breadcrumb } from "antd";
import {Link} from 'react-router-dom';
import React, { Component, Fragment } from "react";
import {withRouter} from 'react-router';

class BreadcrumbTags extends Component {
  
  render() {
    // let {category} = this.props.newsByCategory
    // console.log(this.props.newsByCategory[1]) 
    const { location} = this.props;
    let category = location.pathname.substr(10)
    return (
      <Fragment>
        <section className="breadcrumb">
          <div className="container">
            <h1>{category.toLowerCase().charAt(0).toUpperCase() + category.toLowerCase().slice(1)}</h1>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{category.toLowerCase().charAt(0).toUpperCase() + category.toLowerCase().slice(1)}</Breadcrumb.Item>
            </Breadcrumb>
          </div>    
        </section>
      </Fragment>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     newsByCategory: state.newsByCategory
//   }
// }
export default withRouter(BreadcrumbTags);
