import Home from "./Home/Home"
import useDataUser from "../Components/Navegador/useDataUser"
import { useEffect } from "react"
import DashboardSuperAdmin from "./Home/DashboardSuperAdmin"

export const Dashboard = () => {
    const { userInfo, getInfo } = useDataUser()
    useEffect(() => {
        getInfo()
    }, [])
    return (<>
        <div className="contenido">
            {
                userInfo === undefined 
                ? <h1>Cargando...</h1>
                :userInfo?.role.name === "super_admin"
                ? <DashboardSuperAdmin />
                : <Home userInfo={userInfo} />
            }
        </div>
    </>)
}