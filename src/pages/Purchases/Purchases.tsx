// import React from 'react'
import { Menu } from "../../routes/Menu"
import { Nav } from "../../Components/Navegador/Nav"
import { TablasCompras } from "../../Components/TablasDatos/TablaCompras"

export default function Purchases() {
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
                    <TablasCompras />
                </div>
            </div>
        </div>
    </>
  )
}
