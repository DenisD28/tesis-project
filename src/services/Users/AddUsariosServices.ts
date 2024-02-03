import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const agregarUsuario = async (user: FormData) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}auth/register?name=${user.get("name")}&email=${user.get("email")}&username=${user.get("username")}&role_id=${user.get("role")}&organization_id=${user.get("id")}`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const body = ""

    const response = await axios.post(url, body, {
        headers: headers
    })

    return response
}