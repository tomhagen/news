import React, { Fragment } from "react";
import "antd/dist/antd.css";
import "./App.scss";
import Home from "./container/home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminDashboard from "./container/admin-dashboard";
import AdminPosts from "./container/admin-posts";
import Category from "./container/category";
import NewsDetail from "./container/news-detail";
import NotFound from "./component/not-found";
import SearchPage from "./container/searchpage";
import AdminCreate from "./container/admin-create";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin/dashboard" exact component={AdminDashboard} />
          <Route path="/admin/posts" exact component={AdminPosts} />
          <Route path="/admin/posts/create" exact component={AdminCreate} />
          <Route path="/category/:id" exact component={Category} />
          <Route path="/search" exact component={SearchPage} />
          <Route path="/detail/:id" exact component={NewsDetail} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
