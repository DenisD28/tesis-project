import { useNavigate } from "react-router-dom"
import { Login } from "../Components/IniciarSesion/Login"
import { IniciarSesion } from "../services/Services"
import { data } from "../Components/types.d"

interface Props {
    formData: data
}

export default function LoginPage() {
    const navigate = useNavigate()

    const inicio = (formData: data) => {
        console.log(formData)
        IniciarSesion(formData).then(response => console.log(response)).catch(error => {
            console.error('Error', error)
        })
        navigate("/inventario")
    }
    return (

        <Login inicio={inicio} />
    )
}