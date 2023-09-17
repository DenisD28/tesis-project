import { Nav } from "../../Components/Navegador/Nav"
import { TablasOrganizaciones } from "../../Components/TablasDatos/TablaOrganizaciones"
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
                        <TablasOrganizaciones />
                    </div>
                </div>
            </div>
        </>
    )
}