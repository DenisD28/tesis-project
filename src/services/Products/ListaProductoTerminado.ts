import axios from "axios";
import { tipo } from "../../Components/types.d"
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const buscarProductoTerminado = async (tipo: tipo) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}inventory/search/product?type=PT&product_name=${tipo.type}`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })
    return response.data
}