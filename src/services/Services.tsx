import { UserType, data } from "../Components/types.d"

interface Props {
    formData: data
}

var url = "https://acldev.tech/sistemagestionbodega/api/v1/auth/login"

export async function getData() {
    let response = await fetch(url)

    return response.json()
}

export async function IniciarSesion(formData: data) {
    const data = JSON.stringify(formData)
    const queryString = new URLSearchParams(data).toString()
    const baseUrl = `https://acldev.tech/sistemagestionbodega/api/v1/auth/login?username=${formData.usuario}&password=${formData.password}`

    let response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    return response.json()
}