import Footer from "../../Components/Footer/Footer"
import { Nav } from "../../Components/Navegador/Nav"
import { Tablas } from "../../Components/TablasDatos/TablasMateriaPrima"
import { Menu } from "../../Components/Menu/Menu"


export const Inventarios = () => {
    return (
        <>
            <main className="w-full h-screen flex justify-between items-start flex-col">
                <div className="w-full h-full flex justify-start items-start overflow-y-auto gap-1">
                    <div className="w-[25rem] h-full bg-white overflow-y-scroll scroll-hidden border-r-2">
                        <Menu />
                    </div>
                    <div className="w-full h-full bg-white overflow-y-scroll scroll-hidden">
                        <div className="div-dashboard">
                            <div className=" sticky top-0 right-0">
                                <Nav />
                            </div>
                            <div className="contenido">
                                <Tablas />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}