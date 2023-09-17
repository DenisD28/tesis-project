import { Nav } from "../../Components/Navegador/Nav"
import { Tablas } from "../../Components/TablasDatos/TablasMateriaPrima"
import { Menu } from "../../routes/Menu"


export const Inventarios = () => {
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
                        <Tablas />
                    </div>
                </div>
            </div>
        </>
    )
}