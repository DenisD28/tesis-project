import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { inven, listProd } from "../../Components/types.d"
import { agregarInventario, listaProductos } from "../../services/Services"
import { Menu } from "../../routes/Menu"
import { Nav } from "../../Components/Navegador/Nav"
import ButtonForm from "../../Components/Forms/ButtonComponents/ButtonForm"

export const IngresoInventarioMP = () => {
    const [formProducto, setFormProduct] = useState<inven>({ stock_min: 0, unit_of_measurement: "", code: "", description: "", id: 0 })
    const [list, setProducto] = useState<listProd>([])
    const navigation = useNavigate()
    useEffect(() => {
        lista()
    }, [])

    const lista = async () => {
        try {
            const response = await listaProductos()
            setProducto(response)
        } catch (e) {
            console.log(e)
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormProduct((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormProduct((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await agregarInventario(formProducto)

        } catch (e) {
            console.log(e)
        }

        alert("Producto agregado")
        navigation("/inventario")
    }

    const cancelar = () => {
        setFormProduct({ stock_min: 0, unit_of_measurement: "", code: "", description: "", id: 0 })
    }

    return (<>
        <div className="contenedor">
            <div className="div-menu">
                <Menu />
            </div>
            <div className="div-dashboard">
                <div>
                    <Nav />
                </div>
                <div className='py-4 pb-28 px-8 h-screen overflow-y-auto'>
                    <h1 className='text-[#4F46E5] text-2xl font-bold my-4'>Registro de Productos</h1>
                    <div>
                        <form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>
                            {/* <div className="relative z-0 w-full mb-6 group">
                                    <input type="number" name="id" value={formProducto.id} onChange={handleInputChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Id de Producto</label>
                                </div> */}
                            <div className="flex justify-center items-center flex-col p-2">
                                <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Codigo Producto</label>
                                <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="code" value={formProducto.code} onChange={handleInputChange} placeholder="Escribe el codigo del producto" required />
                            </div>
                            <div className="flex justify-center items-center flex-col p-2">
                                <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Codigo Producto</label>
                                <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="unit_of_measurement" value={formProducto.unit_of_measurement} onChange={handleInputChange} placeholder="Escribe el codigo del producto" required />
                            </div>

                            <div className="flex justify-center items-center flex-col p-2">
                                <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Minimo Permitido</label>
                                <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="number" name="stock_min" value={formProducto.stock_min} onChange={handleInputChange} placeholder="Escribe el codigo del producto" required />
                            </div>
                            <div className="flex justify-center items-center flex-col p-2">
                                <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Minimo Permitido</label>
                                <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="description" value={formProducto.description} onChange={handleInputChange} placeholder="Escribe el codigo del producto" required />
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
    </>)
}