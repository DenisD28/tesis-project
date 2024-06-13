import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const listaProductoDisponible = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}inventory?type=PT&is_available=true`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })
    return response.data
}