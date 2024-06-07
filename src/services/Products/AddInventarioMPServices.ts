import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const agregarInventario = async (formProduct: FormData) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}inventory?product_id=${formProduct.get("id")}&stock_min=${formProduct.get("stock_min")}&unit_of_measurement=${formProduct.get("unit_of_measurement")}&location=${formProduct.get("location")}&lot_number=${formProduct.get("lot_number")}&note=${formProduct.get("note")}&code=${formProduct.get("code")}&description=${formProduct.get("description")}&type=${formProduct.get("type")}`

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