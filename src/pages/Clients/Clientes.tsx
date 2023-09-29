import { Nav } from "../../Components/Navegador/Nav"
import { TablasCliente } from "../../Components/TablasDatos/TablaCliente"
import { Menu } from "../../routes/Menu"

export const Organizaciones = () => {
    return (
        <>
            <div className="contenedor">
                <div className="div-menu">
                    <Menu />
                </div>
                <div className="div-dashboard">
                    <div>
                        <Nav />
                    </div>
                    <div className="contenido">
                        <TablasCliente />
                    </div>
                </div>
            </div>
        </>
    )
}