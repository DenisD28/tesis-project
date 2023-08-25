import { UserType } from "../Components/types.d"

interface Props {
    data: UserType
}

var url = ""



export async function getData() {
    let response = await fetch(url)

    return response.json()
}

export async function login(data: Props) {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response.json()
}