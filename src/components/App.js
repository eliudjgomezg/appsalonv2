import React, { Suspense } from "react";
import {Route , Switch } from "react-router-dom";
import "antd/dist/antd.css";

import LoginPage from "./views/LoginPage/LoginPage";
import Auth from "../hoc/auth";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import HomePage from './views/HomePage/HomePage';
import AddClients from './views/Forms/AddClients';
import NavBar from './views/NavBar/NavBar';
import AddHairCut from './views/Forms/AddHaircut';


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div  style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
      <Switch>
        <Route exact path="/" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/home" component={Auth(HomePage, null)} />
        <Route exact path="/client" component={Auth(AddClients, null)} />
        <Route exact path="/haircut" component={Auth(AddHairCut, null)} />
      </Switch>
      </div>
    </Suspense>
  );
}

export default App;