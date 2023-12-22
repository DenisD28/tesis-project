import { useState, useEffect } from 'react'
import { infoGeneral } from '../../services/Users/InfoUserServices'
import { ViewInfoUserProps } from './ViewInfoUserPropsType'

export default function useGetDataUser() {
    const [userInfo, setInfo] = useState<ViewInfoUserProps>()
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    useEffect(() => {
        const getInfo = async () => {
            try {
                const { usuario } = await infoGeneral()
                setInfo(usuario)
                setName(usuario.name)
                setEmail(usuario.email)
            } catch (e) {
                console.log(e)
            }
        }
        getInfo()
    }, [])
    const InitialsName = userInfo?.name[0]
    return {
        userInfo,
        InitialsName,
        name,
        setName,
        email,
        setEmail
    }
}
