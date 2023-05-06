import axios from "axios";
const authUrl =
    import.meta.env.VITE_AUTH_URL
async function getRegister(payload) {
    try {
        const response = await axios.post(`${authUrl}/register`, payload)

        if (response.data) {
            return {
                status: "success",
                message: "User registered successfully"
            }
        }

    } catch (e) {
        return {
            isError: true,
            message: e.response.data.error.message
        }
    }
}

export default getRegister