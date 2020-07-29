import React, { Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { auth } from "./../_actions/user/user_actions";

import LoginPage from "./views/LoginPage/LoginPage";
import Auth from "../hoc/auth";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import HomePage from "./views/HomePage/HomePage";
import AddClients from "./views/Forms/AddClients";
import NavBar from "./views/NavBar/NavBar";
import AddHairCut from "./views/Forms/AddHaircut";
import { useSelector, useDispatch } from "react-redux";

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  console.log('here', user)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.userData && user.userData.loginSuccess) {
          // or user.id, user.isLogged, token, etc anything that indicates the user is actually logged in
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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("user ===> ", user);
  useEffect(() => {
    dispatch(auth());
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
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
