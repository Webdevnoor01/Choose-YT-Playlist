import axios from "axios"

const userUrl =
    import.meta.env.VITE_USER_API
const getUser = async(token) => {
    try {
        const { data } = await axios.get(`${userUrl}/users/me`, {
            headers: {
                "Authorization": `BEARER ${token}`
            }
        })
        return {
            user: data
        }
    } catch (e) {
        console.log("getUserErr: ", e)
        return {
            isError: true,
            message: e.message
        }
    }
}

export default getUser