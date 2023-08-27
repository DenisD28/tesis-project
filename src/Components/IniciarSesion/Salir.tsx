import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Salir = () => {
    const navigation = useNavigate()

    useEffect(() => {
        localStorage.clear()
        navigation("/")
    })

    return (<></>)
}