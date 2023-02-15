import React from "react";
import useAuth from "../../hooks/useAuth";

const AuthenticationWrapper = ({ children }) => {
  useAuth();

  return <>{children}</>;
};

export default AuthenticationWrapper;
