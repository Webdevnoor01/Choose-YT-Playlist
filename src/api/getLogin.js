import axios from "axios";
const authUrl =
    import.meta.env.VITE_AUTH_URL
const userUrl =
    import.meta.env.VITE_USER_API
async function getLogin(payload) {
    try {
        console.log("getLogin called")
        const response = await axios.post(authUrl, payload)
        const { data } = response
        console.log("data:", data)


        if (!data.error) {
            return {
                token: data.jwt,
                user: data.user
            }
        }

    } catch (e) {
        return {
            isError: true,
            message: e.response.data.error.message
        }
    }
}

export default getLogin