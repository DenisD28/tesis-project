import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import Footer from "../../../../Components/Footer/Footer"
import conversiones from '../../../../utils/Conversiones.json'
import { Product, inven } from "../../../../Components/types.d"
import { ModalProducto } from "../../../../Components/Modal/ModalProducto"
import ButtonForm from "../../../../Components/Forms/ButtonComponents/ButtonForm"
import { agregarInventarioPT } from "../../../../services/Products/AddInventarioPTServices"

type Conversiones = {
    [key: string]: string[]
}

export const IngresoInventarioPT = () => {
    const [formProducto, setFormProduct] = useState<inven>({ stock_min: 0, unit_of_measurement: "", code: "", description: "", id: 0, name: "" })
    const navigation = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [unidadMedida, setUnidadMedida] = useState("")

    const conversion: Conversiones = conversiones

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
            const response = await agregarInventarioPT(formProducto)

            if (response.status === 201) {
                navigation("/pTerminado")
            }

        } catch (e: any) {
            toast.error(e.response.data.message)
        }
    }

    const cancelar = () => {
        setFormProduct({ stock_min: 0, unit_of_measurement: "", code: "", description: "", id: 0, name: "" })
    }

    const agregar = (id: Product) => {
        formProducto.id = id.id
        formProducto.name = id.name
        setUnidadMedida(id.measurement_type)
        setIsOpen(false)
    }

    return (<>
        <div> <Toaster /></div >
        <main className="w-full h-screen flex justify-between items-start flex-col">
            {
                isOpen && (
                    <ModalProducto fnAgregar={agregar}
                        setIsOpen={setIsOpen} />
                )
            }
            <div className='py-4 pb-28 px-8 h-screen overflow-y-auto'>
                <h1 className='text-[#4F46E5] text-2xl font-bold my-4'>Registro de Productos Terminados</h1>
                <div>
                    <form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>
                        <div className="flex justify-center items-center flex-col p-2 mt-4">
                            <br />
                            <button className="w-full h-10 rounded-md border-2 border-[#ddd] px-4 font-medium bg-blue-600 text-white" type="button" onClick={() => setIsOpen(true)}>Buscar Producto</button>
                        </div>
                        <div className="flex justify-center items-center flex-col p-2">
                            <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Nombre del Producto *</label>
                            <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="product" value={formProducto.name} onChange={handleInputChange} placeholder="Producto a agregar" required readOnly />
                        </div>
                        <div className="flex justify-center items-center flex-col p-2">
                            <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Codigo Producto</label>
                            <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="code" value={formProducto.code} onChange={handleInputChange} placeholder="Escribe el codigo del producto" />
                        </div>
                        <div className="flex justify-center items-center flex-col p-2">
                            <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Unidad de medida *</label>
                            <select onChange={handleSelectChange} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="unit_of_measurement" id="unit_of_measurement" value={formProducto.unit_of_measurement} required>
                                <option value="">Selecciona la unidad de medida</option>
                                {
                                    conversion[unidadMedida]?.map((pro) => (
                                        <option key={pro} value={pro}>{pro}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="flex justify-center items-center flex-col p-2">
                            <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Minimo Permitido *</label>
                            <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="number" name="stock_min" value={formProducto.stock_min} min={0} onChange={handleInputChange} placeholder="Escribe el minimo permitido" required />
                        </div>
                        <div className="flex justify-center items-center flex-col p-2">
                            <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Descripcion</label>
                            <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="description" value={formProducto.description} onChange={handleInputChange} placeholder="Escribe la descripcion del producto" required />
                        </div>
                        <ButtonForm dataButton={{
                            'title': 'Cancelar',
                            'color': 'red',
                            'type': 'reset',
                            'fnClick': () => { cancelar }
                        }} />
                        <ButtonForm dataButton={{
                            'title': 'Guardar',
                            'color': 'green',
                            'type': 'submit',
                            'fnClick': () => { }
                        }} />
                    </form >
                </div>
            </div>
            <Footer />
        </main>
    </>)
}