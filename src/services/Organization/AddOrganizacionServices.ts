import axios from "axios";
import { organizacion } from "../../Components/types.d";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const agregarOrganizacion = async (org: organizacion) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}organization?name=${org.name}&ruc=${org.ruc}&address=${org.address}&sector_id=2&municipality_id=${org.municipality_id}&city_id=${org.city_id}&phone_main=${org.phone_main}&phone_secondary=${org.second_phone}`

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