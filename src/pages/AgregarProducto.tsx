import { useEffect, useState } from "react"
import { inven, listProd } from "../Components/types.d"
import { agregarInventario, listaProductos } from "../services/Services"

export const AgregarProducto = () => {
    const [formProducto, setFormProduct] = useState<inven>({ type: "", stock_min: 0, unit_of_measurement: "", code: "", description: "", id: 0 })
    const [list, setProducto] = useState<listProd>([])
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
    }

    const cancelar = () => {
        setFormProduct({ type: "", stock_min: 0, unit_of_measurement: "", code: "", description: "", id: 0 })
    }

    return (<>
        <div className="body contenedor">
            <h2 className="titulo">Ingreso de Productos</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form ">
                    <div className="left">
                        <div className="relative">
                            <label htmlFor="floating_outlined" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                            <input name="type" value={formProducto.type} onChange={handleInputChange} type="text" id="floating_outlined" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tipo de Producto" required />
                        </div>
                        <div className="relative">
                            <label htmlFor="floating_outlined" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Producto a Ingresar</label>
                            <select name="product_id" value={formProducto.id} onChange={handleSelectChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {list.map(pro => (
                                    <>
                                        <option value={pro.id}>{pro.name}</option>
                                    </>
                                ))}
                            </select>
                        </div>
                        <div className="relative">
                            <label htmlFor="floating_outlined" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad a ingresar</label>
                            <input name="stock_min" value={formProducto.stock_min} onChange={handleInputChange} type="number" id="floating_outlined" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
                        </div>
                    </div>

                    <div className="right">
                        <div className="relative">
                            <label htmlFor="floating_outlined" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unidad de medida</label>
                            <input name="unit_of_measurement" value={formProducto.unit_of_measurement} onChange={handleInputChange} type="text" id="floating_outlined" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Unidad" required />
                        </div>
                        <div className="relative">
                            <label htmlFor="floating_outlined" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo</label>
                            <input name="code" value={formProducto.code} onChange={handleInputChange} type="text" id="floating_outlined" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Codigo del producto " required />
                        </div>
                        <div className="relative">
                            <label htmlFor="floating_outlined" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                            <input name="description" value={formProducto.description} onChange={handleInputChange} type="text" id="floating_outlined" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descripcion adicional " required />
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <div className="button">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Registrar</button>
                    </div>
                    <div className="button">
                        <button onClick={cancelar} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancelar</button>
                    </div>
                </div>
            </form >
        </div >
    </>)
}