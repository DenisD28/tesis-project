import axios from "axios";
import { Post, User, User2, cliente, inven, newProduct, organizacion, proveedor, tipo } from "../Components/types.d";
import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'

function getDecryptedToken() {
    const encryptedToken = Cookies.get('authToken');
    if (encryptedToken) {
        const bytes = CryptoJS.AES.decrypt(encryptedToken, import.meta.env.VITE_KEY);
        const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedToken;
    }
    return null;
}

//Autenticacion
export const login = async (newPost: Post): Promise<User> => {
    const url = `${import.meta.env.VITE_API_URL}auth/login?username=${newPost.usuario}&password=${newPost.password}`
    const response = await axios.post(url)

    return response.data
}

export const logout = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}auth/logout`

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

//Listas
export const listaInventario = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}inventory?type=MP`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })
    console.log(response.data)
    return response.data
}

export const listaProductoTerminado = async () => {
    const token = getDecryptedToken();
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
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}inventory/stock/min`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}

export const listaCompras = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}purchases`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}

export const listaProductos = async (tipo: tipo) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}products/${tipo.type}/search`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })
    console.log(response.data)

    return response.data
}

export const listaOrganizaciones = async () => {
    const token = getDecryptedToken();
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

export const departamentos = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}cities`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}

export const municipio = async (id: string) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}city/${id}/municipalities`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })
    console.log(response.data.info)
    return response.data.info
}

export const listaCliente = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}clients`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}

export const listaProveedores = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}providers`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}

export const infoGeneral = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}user/info`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}

export const getGanaciasMensuales = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}earnings_total`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })

    return response.data
}

export const getGanaciasAnuales = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}earnings_last_year`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const response = await axios.get(url, {
        headers: headers
    })
    return response.data
}

//Registros
export const agregarInventario = async (formProduct: inven) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}inventory?product_id=${formProduct.id}&type=MP&stock_min=${formProduct.stock_min}&unit_of_measurement=${formProduct.unit_of_measurement}&location&lot_number=&note&code=${formProduct.code}&description=${formProduct.description}`

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

//Registros
export const agregarInventarioPT = async (formProduct: inven) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}inventory?product_id=${formProduct.id}&type=PT&stock_min=${formProduct.stock_min}&unit_of_measurement=${formProduct.unit_of_measurement}&location&lot_number=&note&code=${formProduct.code}&description=${formProduct.description}`

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

export const agregarProductoTerminado = async (data: string, cantidad: string) => {
    const token = getDecryptedToken();
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

export const newAddProduct = async (newProducto: newProduct) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}product?name=${newProducto.name}&measurement_type=${newProducto.measurement_type}`

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

export const agregarCliente = async (cliente: cliente) => {
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

export const agregarProveedor = async (prov: proveedor) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}organization?name=${prov.name}&ruc=${prov.ruc}&address=${prov.address}&sector_id=2&municipality_id=${prov.municipality_id}&city_id=${prov.city_id}&phone_main=${prov.phone_main}&phone_secondary=${prov.second_phone}`

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

export const agregarUsuario = async (user: User2) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}auth/register?name=${user.name}&email=${user.email}&username=${user.name}&role_id=${user.role}&organization_id=${user.organization}`


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