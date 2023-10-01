import Footer from "../Components/Footer/Footer"
import { Nav } from "../Components/Navegador/Nav"
import { Menu } from "../routes/Menu"
import Home from "./Home/Home"

export const Dashboard = () => {
    return (<>
        {/* <div className="contenedor flex-col justify-between h-screen">
            <div className="flex justify-stretch h-[90vh]">
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
            <Footer />
        </div> */}
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
                            <Home />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    </>)
}