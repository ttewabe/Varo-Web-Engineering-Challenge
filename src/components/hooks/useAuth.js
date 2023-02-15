import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSession,
  setSession,
  selectAccount,
  setAccount,
} from "../../store/authentication-slice";
import data from "../../data";

const useAuth = () => {
  const sessionId = useSelector(selectSession);
  const account = useSelector(selectAccount);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!sessionId && !account) {
      const sessionIdStore = localStorage.getItem("sessionId");

      if (sessionIdStore) {
        dispatch(setSession(sessionIdStore));
      } else {
        fetch(
          `${data.imdbHostUrl}3/authentication/guest_session/new?api_key=${data.apiKey}`
        )
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("sessionId", data.guest_session_id);
            dispatch(setSession(data.guest_session_id));
            console.log(data);
            return data.guest_session_id;
          })
          .then((data) => {
            console.log(data);
            /* if (sessionId && !account) {
              fetch(
                `${data.imdbHostUrl}3/account?api_key=${data.apiKey}&session_id=${sessionId}`
              )
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                  dispatch(setAccount(data));
                })
                .catch((error) => {
                  console.log(error);
                });
            } */
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
    }
  }, [sessionId, account, dispatch]);

  return { sessionId: sessionId, account: account };
};

export default useAuth;
