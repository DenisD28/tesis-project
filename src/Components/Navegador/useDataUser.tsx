import { useState } from 'react'
import { User } from "../types.d"
import { infoGeneral } from "../../services/Services"

export default function useDataUser() {
    const [userInfo, setInfo] = useState<User>()
    const getInfo = async () => {
        try {
            const { usuario } = await infoGeneral()
            setInfo(usuario)
        } catch (e) {
            console.log(e)
        }
    }
    return {
        userInfo,
        getInfo
    }
}
