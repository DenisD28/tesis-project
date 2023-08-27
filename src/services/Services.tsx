import axios from "axios";
import { Post, User, inventario } from "../Components/types.d";

const baseUrl = `https://acldev.tech/sistemagestionbodega/api/v1/auth/login?username=SGB_Admin&password=SistemaBodega2023`

const login = async (newPost: Post): Promise<User> => {
    const url = `https://acldev.tech/sistemagestionbodega/api/v1/auth/login?username=SGB_Admin&password=SistemaBodega2023`
    const response = await axios.post(url)

    return response.data
}

const listaInventario = async (): Promise<inventario> => {
    const token = localStorage.getItem("userToken");
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

export default { login, listaInventario }