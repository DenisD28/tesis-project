import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const updateDataUser = async (name: string, email: string) => {
    const token = getDecryptedToken();
    const dataName = name != "" ? "name=" + name : ""
    const dataEmail = email != "" ? "&email=" + email : ""
    const url = `${import.meta.env.VITE_API_URL}user?${dataName}${dataEmail}`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const body = ""

    const response = await axios.patch(url, body, {
        headers: headers
    })

    return response.data
}

export const changePassword = async (old_password: string, password: string) => {
    const token = getDecryptedToken();
    const specialChars = old_password
    const encodedChars = encodeURIComponent(specialChars)

    const url = `${import.meta.env.VITE_API_URL}user/change_password?old_password=${encodedChars}&password=${password}`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const body = ""

    let response = await axios.post(url, body, {
        headers: headers
    })

    return response.data
}