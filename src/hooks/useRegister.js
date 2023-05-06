// react
import { useState, useEffect } from "react";

// react-router-dom 
import { useNavigate } from "react-router-dom";
import getRegister from "../api/getRegister";


const useRegister = () => {
    const [loading, setLoading] = useState(false)

    async function register(payload) {
        setLoading(true)
        try {
            const user = await getRegister(payload)
            setLoading(false)
            return user
        } catch (e) {
            console.log("userRegisterErr: ", e)
            setLoading(false)

        }
    }

    return {
        loading,
        register
    }
}

export default useRegister