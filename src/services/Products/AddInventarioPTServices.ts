import axios from "axios";
import { inven } from "../../Components/types.d";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const agregarInventarioPT = async (formProduct: inven) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}inventory?product_id=${formProduct.id}&type=PT&stock_min=${formProduct.stock_min}&unit_of_measurement=${formProduct.unit_of_measurement}&location&lot_number=&note&code=${formProduct.code}&description=${formProduct.description}`

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