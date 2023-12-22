import axios from "axios";
import { proveedor } from "../../Components/types.d";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const agregarProveedor = async (prov: proveedor) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}provider?name=${prov.name}&ruc=${prov.ruc}&address=${prov.address}&sector_id=2&municipality_id=${prov.municipality_id}&city_id=${prov.city_id}&phone_main=${prov.phone_main}&phone_secondary=${prov.second_phone}`

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