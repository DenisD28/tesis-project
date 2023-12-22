import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const agregarProductoTerminado = async (data: string, cantidad: string) => {
    const token = getDecryptedToken();
    const id = localStorage.getItem('idProducto')
    const url = `${import.meta.env.VITE_API_URL}register/finished_product?inventory_id=${id}&quantity=${cantidad}`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }
    const body = data
    const response = await axios.post(url, body, {
        headers
    })
    return response


}