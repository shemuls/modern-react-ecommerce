import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { ModernEcommerceContext } from "../../../App.js";
// import { AuthArea } from "../AuthArea.jsx";

export const PrivateRoute = ({ children, ...rest }) => {
  const { loggedInUser } = useContext(ModernEcommerceContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
