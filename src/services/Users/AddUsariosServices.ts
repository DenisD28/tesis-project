import axios from "axios";
import { User2 } from "../../Components/types.d";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const agregarUsuario = async (user: User2) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}auth/register?name=${user.name}&email=${user.email}&username=${user.username}&role_id=${user.role}&organization_id=${user.id}`

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