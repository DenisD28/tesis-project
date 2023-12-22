import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const infoGeneral = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}user/info`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}