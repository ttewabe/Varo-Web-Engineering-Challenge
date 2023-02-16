import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import data from "../../../data";
import createRequestToken from "../../../utils/create-request-token";
import useAuth from "../../hooks/useAuth";
import getAccountDetails from "../../../utils/get-account-details";

const AuthenticationWrapper = ({ children }) => {
  /* hooks */
  const { setSessionId, setAccountInfo, account } = useAuth();
  const location = useLocation();

  /* useEffect hooks */
  useEffect(() => {
    const generateSession = async () => {
      const sessionIdStore = localStorage.getItem("sessionId");
      if (sessionIdStore) {
        setSessionId(sessionIdStore);
        const account = await getAccountDetails(sessionIdStore);
        setAccountInfo(account);
      } else {
        const requestToken = await createRequestToken();
        window.location.href = `${data.authenticationUrl}${requestToken}?redirect_to=http://localhost:3000/authenticated`;
      }
    };

    if (location.pathname !== "/authenticated") {
      generateSession();
    }
  }, []);

  return <>{account && children}</>;
};

export default AuthenticationWrapper;
