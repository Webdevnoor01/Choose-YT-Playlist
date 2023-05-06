import { useState } from "react";
import getLogin from "../api/getLogin";
import { useNavigate } from "react-router-dom";


const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({})
    const navigate = useNavigate()

    async function login(payload) {
        try {
            setLoading(true)
            setError({})
            const data = await getLogin(payload)
            if (data.isError) {
                setError({...data })
                setLoading(false)
            }
            if (data.token) {
                localStorage.setItem("authToken", data.token)
                setLoading(false)
                setError({})

            }
            if (data.isError) {
                return {
                    ...data
                }
            }
            return data.user

        } catch (e) {
            console.log("useLoginErr: ", JSON.parse(JSON.stringify(e)))
            setLoading(false);
            setError(e.message)
        }
    }




    return {
        login,
        loading,
        error
    }
}

export default useLogin