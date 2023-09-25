import { Menu } from "../../routes/Menu"
import { Nav } from "../../Components/Navegador/Nav"
import RegisterPurchases from "../../Components/Purchases/RegisterPurchases"

export default function AddPurchases() {
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
                <div className="contenido overflow-y-auto h-[90vh]">
                    <RegisterPurchases />
                </div>
            </div>
        </div>
    </>
  )
}
