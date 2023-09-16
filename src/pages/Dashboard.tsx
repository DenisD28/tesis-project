import { Nav } from "../Components/Navegador/Nav"
import { TablaProductoFaltante } from "../Components/TablasDatos/TablaProductoFaltante"
import { Menu } from "../routes/Menu"

export const Dashboard = () => {
    return (<>
        <div className="contenedor">
            <div className="div-menu">
                <Menu />
            </div>
            <div className="div-dashboard">
                <div>
                    <Nav />
                </div>
                <div className="contenido">
                    <TablaProductoFaltante />
                </div>
            </div>
        </div>
    </>)
}