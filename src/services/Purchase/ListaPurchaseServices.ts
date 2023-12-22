import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const listaCompras = async (id: number) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}purchases?page=${id}`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}