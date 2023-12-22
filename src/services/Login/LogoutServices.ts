import axios from "axios";
import Cookies from 'js-cookie'
import { getDecryptedToken } from "../Token/getDecryptedToken";


function EliminarToken() {
    Cookies.remove('authToken')
}

export const logout = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}auth/logout`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
    }

    const body = ""

    const response = await axios.post(url, body, {
        headers: headers
    })

    EliminarToken()

    return response.data
}
