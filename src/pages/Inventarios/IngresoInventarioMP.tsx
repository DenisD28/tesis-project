import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Inventary, inven } from "../../Components/types.d"
import { agregarInventario } from "../../services/Services"
import { Menu } from "../../Components/Menu/Menu"
import { Nav } from "../../Components/Navegador/Nav"
import ButtonForm from "../../Components/Forms/ButtonComponents/ButtonForm"
import { ModalProducto } from "../../Components/Modal/ModalProducto"
import Footer from "../../Components/Footer/Footer"
import { ErrorAlert } from "../../Components/Alerts/ErrorAlert"

export const IngresoInventarioMP = () => {
    const [formProducto, setFormProduct] = useState<inven>({ stock_min: 0, unit_of_measurement: "", code: "", description: "", id: 0, product: "" })
    const navigation = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenAlert, setIsOpenAlert] = useState(false)
    const [mensaje, setMensaje] = useState("")


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormProduct((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await agregarInventario(formProducto)

            if (response.status === 201) {
                setMensaje("Producto registrado correctamente.")
                navigation("/inventario")
            }

        } catch (e: any) {
            setMensaje(e.response.data.message)
            setIsOpenAlert(true)
        }
    }

    const cancelar = () => {
        setFormProduct({ stock_min: 0, unit_of_measurement: "", code: "", description: "", id: 0, product: "" })
    }

    const agregar = (id: Inventary) => {
        formProducto.id = id.id
        formProducto.product = id.name
        console.log(id.product)
        setIsOpen(false)
    }

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
                        {
                            isOpen && (
                                <ModalProducto fnAgregar={agregar}
                                    setIsOpen={setIsOpen} />
                            )
                        }
                        <div className='py-4 pb-28 px-8 h-screen overflow-y-auto'>
                            <h1 className='text-[#4F46E5] text-2xl font-bold my-4'>Registro de Productos</h1>
                            <div>
                                <form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>
                                    <div className="flex justify-center items-center flex-col p-2 mt-4">
                                        <br />
                                        <button className="w-full h-10 rounded-md border-2 border-[#ddd] px-4 font-medium bg-blue-600 text-white" type="button" onClick={() => setIsOpen(true)}>Buscar Producto</button>
                                    </div>
                                    <div className="flex justify-center items-center flex-col p-2">
                                        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Nombre del Producto</label>
                                        <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="product" value={formProducto.product} onChange={handleInputChange} placeholder="Producto a agregar" required readOnly />
                                    </div>
                                    <div className="flex justify-center items-center flex-col p-2">
                                        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Codigo Producto</label>
                                        <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="code" value={formProducto.code} onChange={handleInputChange} placeholder="Escribe el codigo del producto" required />
                                    </div>
                                    <div className="flex justify-center items-center flex-col p-2">
                                        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Unidad de Medida</label>
                                        <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="unit_of_measurement" value={formProducto.unit_of_measurement} onChange={handleInputChange} placeholder="Escribe la unidad de medida" required />
                                    </div>

                                    <div className="flex justify-center items-center flex-col p-2">
                                        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Minimo Permitido</label>
                                        <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="number" name="stock_min" value={formProducto.stock_min} onChange={handleInputChange} placeholder="Escribe el minimo permitido" required />
                                    </div>
                                    <div className="flex justify-center items-center flex-col p-2">
                                        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Descripcion</label>
                                        <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="description" value={formProducto.description} onChange={handleInputChange} placeholder="Escribe la descripcion del producto" required />
                                    </div>
                                    <ButtonForm dataButton={{
                                        'title': 'Cancelar',
                                        'color': 'red',
                                        'type': 'reset',
                                    }} />
                                    <ButtonForm dataButton={{
                                        'title': 'Guardar',
                                        'color': 'green',
                                        'type': 'submit',
                                    }} />
                                </form >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                isOpenAlert && (
                    <ErrorAlert
                        mensaje={mensaje} />
                )
            }
            <Footer />
        </main>
    </>)
}