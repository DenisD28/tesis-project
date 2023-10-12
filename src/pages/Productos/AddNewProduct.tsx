import Footer from "../../Components/Footer/Footer"
import { Nav } from "../../Components/Navegador/Nav"
import { FormProducto } from "../../Components/Productos/FormProducto"
import { Menu } from "../../Components/Menu/Menu"


export const AddNewProduct = () => {

    return (<>
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
                            <div className='py-4 pb-28 px-8 h-screen overflow-y-auto'>
                                <h1 className='text-[#4F46E5] text-2xl font-bold my-4'>Registro de Productos</h1>
                                <FormProducto />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    </>)
}