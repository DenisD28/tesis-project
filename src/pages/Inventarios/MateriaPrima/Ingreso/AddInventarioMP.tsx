import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import conversiones from '../../../../utils/Conversiones.json'
import { Product, inven } from "../../../../Components/types.d"
import { ModalProducto } from "../../../../Components/Modal/ModalProducto"
import InputsForm from "../../../../Components/Forms/InputsComponents/InputsForm"
import ButtonForm from "../../../../Components/Forms/ButtonComponents/ButtonForm"
import { agregarInventario } from "../../../../services/Products/AddInventarioMPServices"

type Conversiones = {
    [key: string]: string[]
}

export const AddInventarioMP = () => {
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
            const response = await agregarInventario(formProducto)

            if (response.status === 201) {
                toast.success("Producto Agregado")
                navigation("/inventario")
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
                <h1 className='text-[#4F46E5] text-2xl font-bold my-4'>Registro de Productos</h1>
                <div>
                    <form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>
                        <ButtonForm
                            dataButton={{
                                title: "BuscarProducto",
                                color: "blue",
                                type: "button",
                                fnClick: () => { setIsOpen(true) },
                            }}
                        />
                        <InputsForm
                            DataInputs={{
                                name: "name",
                                title: "Nombre del Producto",
                                value: formProducto.name || "",
                                type: "text",
                                placeholder: "Producto a agregar",
                                isRequire: true,
                                isDisabled: false,
                                fnChange: () => { handleInputChange },
                            }}
                        />
                        <InputsForm
                            DataInputs={{
                                name: "code",
                                title: "Codigo Producto",
                                value: formProducto.code || "",
                                type: "text",
                                placeholder: "Escribe el codigo del producto",
                                isRequire: true,
                                isDisabled: false,
                                fnChange: () => { handleInputChange },
                            }}
                        />
                        <div className="flex justify-center items-center flex-col p-2">
                            <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="code">Unidad de Medida *</label>
                            <select onChange={handleSelectChange} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="unit_of_measurement" id="unit_of_measurement" value={formProducto.unit_of_measurement} required>
                                <option value="">Selecciona la unidad de medida</option>
                                {
                                    conversion[unidadMedida]?.map((pro) => (
                                        <option key={pro} value={pro}>{pro}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <InputsForm
                            DataInputs={{
                                name: "stock_min",
                                title: "Minimo Permitido",
                                value: formProducto.stock_min || "",
                                type: "number",
                                placeholder: "Escribe el minimo permitido",
                                isRequire: true,
                                isDisabled: false,
                                fnChange: () => { handleInputChange },
                            }}
                        />
                        <InputsForm
                            DataInputs={{
                                name: "description",
                                title: "Descripcion",
                                value: formProducto.description || "",
                                type: "text",
                                placeholder: "Escribe la descripcion del producto",
                                isRequire: false,
                                isDisabled: false,
                                fnChange: () => { handleInputChange },
                            }}
                        />
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
        </main>
    </>)
}