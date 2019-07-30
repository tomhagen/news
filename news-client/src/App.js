import React, { Fragment } from "react";
import "antd/dist/antd.css";
import "./App.scss";
import Home from "./container/home";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./component/admin/admin";
import NotFound from "./component/not-found/notfound";
import AdminHome from "./component/admin/home";
import AdminPosts from "./component/admin/posts";
import CreatePosts from "./component/admin/create";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        
        <Route path="/admin" exact component={AdminHome} />
        <Route path="/admin/posts" exact component={AdminPosts} />
        <Route path="/admin/posts/create" exact component={CreatePosts}/>
        {/* <Route path="/admin"/> */}
        
        <Route path="/" exact component={Home} />
        {/* <Route exact component={NotFound}/> */}
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
