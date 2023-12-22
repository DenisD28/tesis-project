import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const sectores = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}sectors`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}