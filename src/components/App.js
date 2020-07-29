import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.css";

import LoginPage from "./views/LoginPage/LoginPage";
import Auth from "../hoc/auth";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import HomePage from "./views/HomePage/HomePage";
import AddClients from "./views/Forms/AddClients";
import NavBar from "./views/NavBar/NavBar";
import AddHairCut from "./views/Forms/AddHaircut";
import { useSelector, useDispatch } from "react-redux";

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.logged) { // or user.id, user.isLogged, token, etc anything that indicates the user is actually logged in 
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/register", // or any other 
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
function App() {
  let user = useSelector((state) => state.user);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LoginPage, null)} />
          <Route exact path="/register" component={Auth(RegisterPage, null)} />
          <ProtectedRoute exact path="/home" component={HomePage} user={user} />
          <ProtectedRoute
            exact
            path="/client"
            component={AddClients}
            user={user}
          />
          <ProtectedRoute
            exact
            path="/haircut"
            component={AddHairCut}
            user={user}
          />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
