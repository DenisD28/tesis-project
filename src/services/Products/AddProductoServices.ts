import axios from "axios";
import { newProduct } from "../../Components/types.d";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const newAddProduct = async (newProducto: newProduct) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}product?name=${newProducto.name}&measurement_type=${newProducto.measurement_type}`

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