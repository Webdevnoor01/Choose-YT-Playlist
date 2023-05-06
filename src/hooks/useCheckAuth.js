// react
import { useEffect } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// react router dom
import { useNavigate } from "react-router-dom";

// redux store actions
import { USER_INITIAL_STATE, setUserProfile } from "../store/userSlice";

// apis
import getUser from "../api/getUser";



const useCheckAuth = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

        async function fetchUser(token) {
            try {
                const response = await getUser(token)
                dispatch(setUserProfile(response.user))
            } catch (e) {

                console.log("fetUserError: ", e)
            }
        }
        async function checkAuth() {

            const token = await localStorage.getItem("authToken")
            if (token) {
                fetchUser(token)
            } else {
                dispatch(setUserProfile(USER_INITIAL_STATE))
                console.log("navigating to login pagea: 1 ", )
                navigate("/login")
            }
        }
        checkAuth()

    }, [navigate])
    return {
        isAuth: useSelector(state => state.user.isAuth)
    }
}

export default useCheckAuth