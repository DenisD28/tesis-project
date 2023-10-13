import "../../css/menu.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { User } from "../types.d"
import { infoGeneral } from "../../services/Services"
import { routesMain, routesInventory } from "../../routes/routes"

export const Menu = () => {

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
            }
        }
        getInfo()
    }, [])

    return (<>
        <div className="Menu">
            <div className="organizacion">
                <h2>{userInfo?.organization?.name}</h2>
            </div>
            <div className="items">
                <div className="title">
                    <h3>Menu Principal</h3>
                </div>
                <ul className="flex justify-start gap-1 flex-col">
                    {
                        routesMain.map((item, index) => {
                            return (

                                <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                    <Link to={item.path} className="link-item text-purple-icons">
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="items">
                <div className="title">
                    <h3>Inventario</h3>
                </div>
                <ul className="flex justify-start gap-1 flex-col">
                    {
                        routesInventory.map((item, index) => {
                            return (
                                <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                    <Link to={item.path} className="link-item text-purple-icons">
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </>)
}