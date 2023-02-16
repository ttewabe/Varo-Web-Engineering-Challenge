import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import createSession from "../../../utils/create-session";
import useAuth from "../../hooks/useAuth";
import qs from "qs";
import getAccountDetails from "../../../utils/get-account-details";

const Authenticated = () => {
  /* hooks */
  const { setSessionId, setAccountInfo } = useAuth();
  const location = useLocation();
  const history = useHistory();

  /* useEffect hooks */
  useEffect(() => {
    const generateSession = async () => {
      const sessionIdStore = localStorage.getItem("sessionId");
      if (sessionIdStore) {
        setSessionId(sessionIdStore);
      } else {
        const { request_token } = qs.parse(location.search.replace("?", ""));
        const sessionId = await createSession(request_token);
        if (sessionId) {
          localStorage.setItem("sessionId", sessionId);
          setSessionId(sessionId);
          const account = await getAccountDetails(sessionId);
          setAccountInfo(account);
          history.push("/");
        }
      }
    };
    generateSession();
  }, [history, location.search, setAccountInfo, setSessionId]);
  return <div></div>;
};

export default Authenticated;
