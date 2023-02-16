import { useDispatch, useSelector } from "react-redux";
import {
  selectSession,
  setSession,
  selectAccount,
  setAccount,
} from "../../store/authentication-slice";

const useAuth = () => {
  const dispatch = useDispatch();
  /* redux states */
  const sessionId = useSelector(selectSession);
  const account = useSelector(selectAccount);

  /*redux state manipulators */
  const setSessionId = (sessionId) => dispatch(setSession(sessionId));
  const setAccountInfo = (account) => dispatch(setAccount(account));

  return {
    sessionId: sessionId,
    account: account,
    setSessionId: setSessionId,
    setAccountInfo: setAccountInfo,
  };
};

export default useAuth;
