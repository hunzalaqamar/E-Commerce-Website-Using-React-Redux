import React from "react";
import { Route, useHistory } from "react-router-dom";

import Header from "../Header/Header";

function ProtectedRoute({ component: Component, ...rest }) {
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("auth") === "true") {
          return (
            <div>
              <Header ProductName={"CYBERSHOP"} />
              <Component {...props} />;
            </div>
          );
        } else {
          history.push("/");
        }
      }}
    />
  );
}

export default ProtectedRoute;
