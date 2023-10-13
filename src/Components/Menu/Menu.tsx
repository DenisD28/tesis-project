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
                        userInfo?.role.name === "admin" ? (
                            routesMain.map((item, index) => {
                                return (
                                    item.type === "tipo2" ? (
                                        <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                            <Link to={item.path} className="link-item text-purple-icons">
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    ) : (
                                        item.type === "tipo4" && (
                                            <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                                <Link to={item.path} className="link-item text-purple-icons">
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        )
                                    )
                                )
                            })
                        ) : (
                            userInfo?.role.name === "super_admin" ? (
                                routesMain.map((item, index) => {
                                    return (

                                        item.type === "tipo1" ? (
                                            <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                                <Link to={item.path} className="link-item text-purple-icons">
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        ) : (
                                            item.type === "tipo4" && (
                                                item.path === "/more_options" ? (
                                                    <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                                        <Link to={item.path} className="link-item text-purple-icons">
                                                            {item.icon}
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    </li>

                                                ) : (
                                                    <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                                        <Link to={item.path} className="link-item text-purple-icons">
                                                            {item.icon}
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    </li>
                                                )
                                            )
                                        )
                                    )
                                })
                            ) : (
                                userInfo?.role.name === "guest" && (
                                    routesMain.map((item, index) => {
                                        return (

                                            item.type === "tipo2" ? (
                                                <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                                    <Link to={item.path} className="link-item text-purple-icons">
                                                        {item.icon}
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            ) : (
                                                item.type === "tipo4" && (
                                                    item.path === "/more_options" ? (
                                                        <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                                            <Link to={item.path} className="link-item text-purple-icons">
                                                                {item.icon}
                                                                <span>{item.title}</span>
                                                            </Link>
                                                        </li>
                                                    ) : (
                                                        item.path != "/usuarios" && (
                                                            <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                                                <Link to={item.path} className="link-item text-purple-icons">
                                                                    {item.icon}
                                                                    <span>{item.title}</span>
                                                                </Link>
                                                            </li>
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    })
                                )
                            )
                        )}
                </ul>
            </div>

            {/* Parte de inventario */}
            <div className="items">
                <div className="title">
                    <h3>Inventario</h3>
                </div>
                <ul className="flex justify-start gap-1 flex-col">
                    {
                        userInfo?.role.name === "admin" ? (
                            routesInventory.map((item, index) => {
                                return (
                                    item.type === "tipo2" ? (
                                        <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                            <Link to={item.path} className="link-item text-purple-icons">
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    ) : (
                                        item.type === "tipo4" && (
                                            <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                                <Link to={item.path} className="link-item text-purple-icons">
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        )
                                    )
                                )
                            })
                        ) : (
                            userInfo?.role.name === "super_admin" ? (
                                routesInventory.map((item, index) => {
                                    return (

                                        item.type === "tipo1" ? (
                                            <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                                <Link to={item.path} className="link-item text-purple-icons">
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        ) : (
                                            item.type === "tipo4" && (
                                                <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                                    <Link to={item.path} className="link-item text-purple-icons">
                                                        {item.icon}
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            )
                                        )
                                    )
                                })
                            ) : (
                                userInfo?.role.name === "guest" && (
                                    routesInventory.map((item, index) => {
                                        return (

                                            item.type === "tipo2" ? (

                                                <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                                    <Link to={item.path} className="link-item text-purple-icons">
                                                        {item.icon}
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            ) : (
                                                item.type === "tipo4" && (
                                                    item.path === "/more_options" ? (
                                                        <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                                            <Link to={item.path} className="link-item text-purple-icons">
                                                                {item.icon}
                                                                <span>{item.title}</span>
                                                            </Link>
                                                        </li>
                                                    ) : (
                                                        <li key={index} className="bg-white flex justify-start items-center h-12 rounded-md px-2 hover:bg-[#eee] transition-all">
                                                            <Link to={item.path} className="link-item text-purple-icons">
                                                                {item.icon}
                                                                <span>{item.title}</span>
                                                            </Link>
                                                        </li>
                                                    )
                                                )
                                            )
                                        )
                                    })
                                )
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    </>)
}