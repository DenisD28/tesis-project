import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const agregarProveedor = async (prov: FormData) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}provider?name=${prov.get("name")}&ruc=${prov.get("ruc")}&address=${prov.get("address")}&sector_id=${prov.get("sector")}&municipality_id=${prov.get("municipality_id")}&city_id=${prov.get("city_id")}&phone_main=${prov.get("phone_main")}&phone_secondary=${prov.get("second_phone")}`

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