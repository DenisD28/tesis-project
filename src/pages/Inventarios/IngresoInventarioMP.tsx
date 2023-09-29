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
                            <div className="flex justify-center items-center flex-col p-2">
                                <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Codigo Producto</label>
                                <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="id" value={formProducto.id} onChange={handleInputChange} placeholder="Escribe el codigo del producto" required />
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
                            <div className="flex justify-center items-center flex-col p-2">
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