import { Nav } from "../Components/Navegador/Nav"
import { Menu } from "../routes/Menu"
import Home from "./Home/Home"

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
                    <Home />
                </div>
            </div>
        </div>
    </>)
}