import React from "react";
import { Route, useHistory } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("auth") === "true") {
          return <Component {...props} />;
        } else {
          history.push("/");
        }
      }}
    />
  );
}

export default ProtectedRoute;
