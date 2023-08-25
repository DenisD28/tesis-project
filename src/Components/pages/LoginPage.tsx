
import { useNavigate } from "react-router-dom"
import useUserContext from "../../hooks/useUserContext"
import { Login } from "../IniciarSesion/Login"

interface Props {
}

export default function LoginPage() {
    const useUser = useUserContext()
    const navigate = useNavigate()

    // function iniciarSesion(data: any) {
    //     useUser.Inicio(data)
    //     navigate("/")
    // }


    // return (<Login fnAction={iniciarSesion} />)
}