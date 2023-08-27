import axios from "axios";
import { Post, User, inven, inventario, listOrg, listProduct } from "../Components/types.d";

const login = async (newPost: Post): Promise<User> => {
    const url = `https://acldev.tech/sistemagestionbodega/api/v1/auth/login?username=${newPost.usuario}&password=${newPost.password}`
    const response = await axios.post(url)

    return response.data
}

export const listaInventario = async (): Promise<listProduct> => {
    const token = localStorage.getItem('token')
    console.log(token)
    const url = "https://acldev.tech/sistemagestionbodega/api/v1/inventory?type=MP"
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}

export const agregarInventario = async (formProduct: inven) => {
    const token = localStorage.getItem('token')

    const params = {
        type: formProduct.type,
        stock_min: formProduct.stock_min,
        unit_of_measurement: formProduct.unit_of_measurement,
        code: formProduct.code,
        description: formProduct.description
    }

    const url = "https://acldev.tech/sistemagestionbodega/api/v1/inventory?"
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'data': `${params}`
    }

    const response = await axios.post(url, {
        headers: headers
    })

    return response
}

export const listaOrganizaciones = async () => {
    const token = localStorage.getItem('token')
    const url = "https://acldev.tech/sistemagestionbodega/api/v1/organizations?"
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}

export default { login, listaInventario, agregarInventario, listaOrganizaciones }