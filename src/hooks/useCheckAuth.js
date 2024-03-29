// react
import { useState ,useEffect } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// react router dom
import { useNavigate } from "react-router-dom";

// redux store actions
import { USER_INITIAL_STATE, setUserProfile } from "../store/userSlice";

// apis
import getUser from "../api/getUser";

const useCheckAuth = (cbNavigate = false) => {
  const [canRun, setCanRun] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    async function fetchUser(token) {
      try {
        const response = await getUser(token);
        if (response.user) {
          dispatch(setUserProfile(response.user));
        }
      } catch (e) {
        console.log("fetUserError: ", e);
      }
    }

    if (canRun) {
      console.log("useCheckAuthCalled")
      if (token) {
        fetchUser(token);
        // if(cbNavigate){
        //   // cbNavigate()
        // }
      } else { 
        dispatch(setUserProfile(USER_INITIAL_STATE));
        console.log("navigating to login pagea: 1 ");
        navigate("/login");
      }
    }
  }, [token, canRun]);
  return {
    isAuth: useSelector((state) => state.user.isAuth),
    setCanRun
  };
};
 
export default useCheckAuth;
