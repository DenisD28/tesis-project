import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const ActualizarOrganizacion = async (data: FormData) => {
    const token = getDecryptedToken();

    try {
        const url = `${import.meta.env.VITE_API_URL}organization_update`

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }
        const body = data

        const response = await axios.post(url, body, {
            headers
        })
        return response.data
    } catch (error) {
        console.error(error)
    }
}