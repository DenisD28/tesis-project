import "../../css/menu.css"
import { Link } from "react-router-dom"
import { routesMain, routesInventory } from "../../routes/routes"
import { useGlobalContext } from "../../hooks/useUserContext"

export const Menu = () => {

    const { usuario } = useGlobalContext()

    return (<>
        <div className="Menu">
            <div className="organizacion">
                <h2>{usuario?.organization?.name}</h2>
            </div>
            <div className="items">
                <div className="title">
                    <h3>Menu Principal</h3>
                </div>
                <ul className="flex justify-start gap-1 flex-col">
                    {
                        usuario?.role.name === "admin" ? (
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
                            usuario?.role.name === "super_admin" ? (
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
                                usuario?.role.name === "colaborador" && (
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
                        usuario?.role.name === "admin" ? (
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
                            usuario?.role.name === "super_admin" ? (
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
                                usuario?.role.name === "colaborador" && (
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