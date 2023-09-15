import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { inven, listProd } from "../../Components/types.d"
import { agregarInventario, listaProductos } from "../../services/Services"

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
        <div className="container">
            <div>
                <h2 className="titulo">Ingreso de Productos a Inventario</h2>
                <br />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="id" value={formProducto.id} onChange={handleInputChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Id de Producto</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="code" value={formProducto.code} onChange={handleInputChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Codigo de Producto</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="unit_of_measurement" value={formProducto.unit_of_measurement} onChange={handleInputChange} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Unidad de Medición</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="stock_min" value={formProducto.stock_min} onChange={handleInputChange} id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Almacenamiento minimo</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="description" value={formProducto.description} onChange={handleInputChange} id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción del producto</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
                </form >
            </div>
        </div >

    </>)
}