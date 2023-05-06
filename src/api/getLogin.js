import axios from "axios";
const authUrl =
    import.meta.env.VITE_AUTH_URL
const userUrl =
    import.meta.env.VITE_USER_API
async function getLogin(payload) {
    try {
        const response = await axios.post(authUrl, payload)
        const { data } = response

        if (!data.error) {
            const user = await axios.put(`${userUrl}/users/${data.user.id}`, {
                isAuth: true
            }, {
                headers: {
                    "Authorization": `BEARER ${data.jwt}`
                }
            })
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