import "../../css/nav.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BoxOptions from "./BoxOptions/BoxOptions"
import { logout } from "../../services/Login/LogoutServices"
import { useGlobalContext } from "../../hooks/useUserContext"

interface NavProps {
    setShowMenu: (value: boolean) => void,
    showMenu: boolean
}

export const Nav: React.FC<NavProps> = ({setShowMenu, showMenu}) => {
    const navigation = useNavigate()

    const { usuario } = useGlobalContext()

    const salir = () => {
        try {
            logout()
            navigation("/")
        } catch (e) {
            // console.log(e)
        }
    }
    let InitialsName = usuario?.name[0]
    const [test, setTest] = useState(false)

    const modificarClase = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className="nav h-16 flex justify-between lg:justify-end px-4">
                <div className="right lg:hidden block">
                    <div className="btnMenu">
                        <button onClick={modificarClase}><svg fill="#95a5a6" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></button>
                    </div>
                </div>
                <div>
                    <div className="div-user gap-4" onMouseEnter={() => { setTest(true) }} onMouseLeave={() => { setTest(false) }}>
                        <div className="userSiglas flex justify-center items-center font-medium uppercase"><p>{InitialsName}</p></div>
                        <div>
                            <div className="nombre">{usuario?.name}</div>
                            <div className="Rol">{usuario?.role.name}</div>
                        </div>
                        {
                            test
                                ? <BoxOptions name={usuario?.name} role={usuario?.role.name} InitialsName={InitialsName} fnLogout={salir} />
                                : null
                        }
                        <div className="logout">
                            <button onClick={() => salir()}><svg fill="#e74c3c" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}