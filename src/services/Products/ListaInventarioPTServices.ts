import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const listaProductoTerminado = async (currentPage: number) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}inventory?type=PT&&page=${currentPage}`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })
    return response.data
}