import "../../css/menu.css"
import { Link } from "react-router-dom"
import { routesMain, routesInventory, routesBackup } from "../../routes/routes"
import { useGlobalContext } from "../../hooks/useUserContext"

interface MenuProps {
    setShowMenu: (value: boolean) => void,
}

export const Menu = ({ setShowMenu }: MenuProps) => {

    const { usuario } = useGlobalContext()

    return (<>
        <div className="Menu text-zinc-700 p-4">
            <div className="organizacion h-8 flex justify-start items-center">
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
                                        <li key={index}
                                            className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                            <Link onClick={() => {
                                                setShowMenu(false)
                                            }} to={item.path}
                                                className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    ) : (
                                        item.type === "tipo4" && (
                                            <li key={index}
                                                className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                                <Link onClick={() => {
                                                    setShowMenu(false)
                                                }} to={item.path}
                                                    className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
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
                                            <li key={index}
                                                className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                                <Link onClick={() => {
                                                    setShowMenu(false)
                                                }} to={item.path}
                                                    className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        ) : (
                                            item.type === "tipo4" && (
                                                item.path === "/more_options" ? (
                                                    <li key={index}
                                                        className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                                        <Link onClick={() => {
                                                            setShowMenu(false)
                                                        }} to={item.path}
                                                            className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
                                                            {item.icon}
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    </li>

                                                ) : (
                                                    <li key={index}
                                                        className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                                        <Link onClick={() => {
                                                            setShowMenu(false)
                                                        }} to={item.path}
                                                            className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
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
                                                <li key={index}
                                                    className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                                    <Link onClick={() => {
                                                        setShowMenu(false)
                                                    }} to={item.path}
                                                        className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
                                                        {item.icon}
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            ) : (
                                                item.type === "tipo4" && (
                                                    item.path === "/more_options" ? (
                                                        <li key={index}
                                                            className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                                            <Link onClick={() => {
                                                                setShowMenu(false)
                                                            }} to={item.path}
                                                                className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
                                                                {item.icon}
                                                                <span>{item.title}</span>
                                                            </Link>
                                                        </li>
                                                    ) : (
                                                        item.path != "/usuarios" && (
                                                            <li key={index}
                                                                className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                                                <Link onClick={() => {
                                                                    setShowMenu(false)
                                                                }} to={item.path}
                                                                    className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
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
                                        <li key={index}
                                            className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                            <Link onClick={() => {
                                                setShowMenu(false)
                                            }} to={item.path}
                                                className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    ) : (
                                        item.type === "tipo4" && (
                                            <li key={index}
                                                className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                                <Link onClick={() => {
                                                    setShowMenu(false)
                                                }} to={item.path}
                                                    className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
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
                                            <li key={index}
                                                className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                                <Link onClick={() => {
                                                    setShowMenu(false)
                                                }} to={item.path}
                                                    className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        ) : (
                                            item.type === "tipo4" && (
                                                <li key={index}
                                                    className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                                    <Link onClick={() => {
                                                        setShowMenu(false)
                                                    }} to={item.path}
                                                        className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
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

                                                <li key={index}
                                                    className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                                    <Link onClick={() => {
                                                        setShowMenu(false)
                                                    }} to={item.path}
                                                        className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
                                                        {item.icon}
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            ) : (
                                                item.type === "tipo4" && (
                                                    item.path === "/more_options" ? (
                                                        <li key={index}
                                                            className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                                            <Link onClick={() => {
                                                                setShowMenu(false)
                                                            }} to={item.path}
                                                                className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
                                                                {item.icon}
                                                                <span>{item.title}</span>
                                                            </Link>
                                                        </li>
                                                    ) : (
                                                        <li key={index}
                                                            className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                                            <Link onClick={() => {
                                                                setShowMenu(false)
                                                            }} to={item.path}
                                                                className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
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


            <div className="items">
                {usuario?.role.name === "super_admin" ? (
                    <div className="title">
                        <h3>Base de datos</h3>
                    </div>
                ) : null}
                <ul className={"flex justify-start gap-1 flex-col"}>
                    {
                        usuario?.role.name === "super_admin" ? (
                            routesBackup.map((item, index) => {
                                return (
                                    <li key={index}
                                        className="bg-white flex justify-start items-center h-12 rounded-md hover:bg-[#eee] transition-all">
                                        <Link onClick={() => {
                                            setShowMenu(false)
                                        }} to={item.path}
                                            className="text-purple-icons px-2 rounded-md justify-start items-center [&>span]:font-[600] [&>span]:text-[#95a5a6] w-full flex gap-3 h-full">
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        ) : null
                    }
                </ul>
            </div>
        </div>
    </>)
}