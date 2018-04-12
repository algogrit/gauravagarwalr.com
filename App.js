import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp } from "@phenomic/preset-react-app/lib/client";

import Layout from "./src/layout/Main.js";

import "./src/assets/styles/app.scss";

const Home = () => (
  <Layout/>
);

export default createApp(() => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
  </Router>
));
