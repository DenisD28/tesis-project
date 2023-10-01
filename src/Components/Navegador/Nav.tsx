import { useEffect, useState } from "react"
import "../../css/nav.css"
import { User } from "../types.d"
import { infoGeneral } from "../../services/Services"



export const Nav = () => {

    const [userInfo, setInfo] = useState<User>()
    let state = { usuario: [] }

    useEffect(() => {
        const getInfo = async () => {
            try {
                const { usuario } = await infoGeneral()
                state = ({
                    usuario
                })
                setInfo(usuario)
            } catch (e) {
                console.log(e)
            }
        }
        getInfo()
    }, [])

    return (
        <>
            <div className="nav">
                <div className="div-left">
                    <div className="">
                        <button className="notification"><svg fill="#95a5a6" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" /></svg></button>
                    </div>
                    <div className="message">
                        <button><svg fill="#95a5a6" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg></button>
                    </div>
                    <div className="separate"></div>
                </div>
                <div className="div-rigth">
                    <div className="div-user gap-4">
                        <div className="userSiglas flex justify-center items-center font-medium"><p>AC</p></div>
                        <div>
                            <div className="nombre">{userInfo?.name}</div>
                            <div className="Rol">{userInfo?.role.name}</div>
                        </div>
                        <div className="logout">
                            <button><svg fill="#e74c3c" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}