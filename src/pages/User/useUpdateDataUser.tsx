import { useState } from 'react'
import { updateDataUser } from '../../services/Users/UpdateUserServices'

interface UpdateDataUserType {
    mensaje: string,
    estado: number
}

export default function useUpdateDataUser() {
    const [ResponseQuery, setResponseQuery] = useState<UpdateDataUserType>()

    let HandleUpdateUser = async (name: string, email: string) => {
        try {
            const { mensaje, estado } = await updateDataUser(name, email)
            setResponseQuery({
                mensaje,
                estado
            })
            estado === 200 ? window.location.reload() : console.log("Error")
        } catch (e) {
            console.log(e)
        }
    }
    return {
        ResponseQuery,
        HandleUpdateUser
    }
}
