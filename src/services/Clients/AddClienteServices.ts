import axios from "axios";
import { clients } from "../../Components/types.d";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const agregarCliente = async (cliente: clients) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}client?name=${cliente.name}&address=${cliente.address}&municipality_id=${cliente.municipality_id}&city_id=${cliente.city_id}&type=${cliente.type}&phone_main=${cliente.phone_main}&details=test de detalle&phone_secondary=${cliente.phone_secondary}`

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