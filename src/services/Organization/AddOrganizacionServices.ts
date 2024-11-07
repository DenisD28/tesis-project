import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const agregarOrganizacion = async (org: FormData) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}organization?name=${org.get("name")}&ruc=${org.get("ruc")}&address=${org.get("address")}&sector_id=${org.get("sector")}&municipality_id=${org.get("municipality")}&city_id=${org.get("city")}&phone_main=${org.get("phone_main")}&phone_secondary=${org.get("phone_secondary")}`

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