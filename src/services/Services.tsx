import axios from "axios";
import { Post, User, inven, newProduct } from "../Components/types.d";

export const login = async (newPost: Post): Promise<User> => {
    const url = `${import.meta.env.VITE_API_URL}auth/login?username=${newPost.usuario}&password=${newPost.password}`
    const response = await axios.post(url)

    return response.data
}

export const listaInventario = async () => {
    const token = localStorage.getItem('token')
    const url = `${import.meta.env.VITE_API_URL}inventory?type=MP`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })
    return response.data
}

export const listaProductoTerminado = async () => {
    const token = localStorage.getItem('token')
    const url = `${import.meta.env.VITE_API_URL}inventory?type=PT`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })
    return response.data
}

export const listaProductoFaltante = async () => {
    const token = localStorage.getItem('token')
    const url = `${import.meta.env.VITE_API_URL}inventario/min-stock`

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
    const url = `${import.meta.env.VITE_API_URL}inventory?product_id=18&type=MP&stock_min=${formProduct.stock_min}&unit_of_measurement=${formProduct.unit_of_measurement}&location&lot_number=&note&code=${formProduct.code}&description=${formProduct.description}`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const body = ""

    const response = await axios.post(url, body, {
        headers: headers
    })

    return response.data
}

export const agregarProductoTerminado = async (data: string, cantidad: string) => {
    console.log(data)
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('idProducto')

    try {
        const url = `${import.meta.env.VITE_API_URL}register/finished_product?inventory_id=${id}&quantity=${cantidad}`

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
        const body = data

        const response = await axios.post(url, body, {
            headers
        })
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

export const listaOrganizaciones = async () => {
    const token = localStorage.getItem('token')
    const url = `${import.meta.env.VITE_API_URL}organizations?`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}

export const listaProductos = async () => {
    const token = localStorage.getItem('token')
    const url = `${import.meta.env.VITE_API_URL}products/Harina/search`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}

//por probar
export const newAddProduct = async (newProducto: newProduct) => {
    const token = localStorage.getItem('token')
    const url = `${import.meta.env.VITE_API_URL}product?name=${newProducto.name}&measurement_type=${newProducto.measurement_type}`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.post(url, {
        headers: headers
    })

    return response.data
}

