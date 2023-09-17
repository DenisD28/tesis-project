import { Nav } from "../../Components/Navegador/Nav"
import { TablaProductoTerminado } from "../../Components/TablasDatos/TablaProductoTerminado"
import { Menu } from "../../routes/Menu"

export const IngresoProductoTerminado: React.FC = () => {

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
                    <TablaProductoTerminado />
                </div>
            </div>
        </div>
    </>)
}