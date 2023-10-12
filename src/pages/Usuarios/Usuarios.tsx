import { Nav } from "../../Components/Navegador/Nav"
import { TablasUsuarios } from "../../Components/TablasDatos/TablaUsuarios"
import { Menu } from "../../Components/Menu/Menu"

export const Usuarios = () => {
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
                        <TablasUsuarios />
                    </div>
                </div>
            </div>
        </>
    )
}