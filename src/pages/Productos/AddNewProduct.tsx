import { useState } from "react";
import { newProduct } from "../../Components/types.d";
import { newAddProduct } from "../../services/Services";

export const AddNewProduct = () => {

    const [formProducto, setFormProduct] = useState<newProduct>({ name: "", measurement_type: "" })

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
            //consulta
            const response = await newAddProduct(formProducto)
            console.log(response)
        } catch (e) {
            console.log(e)
        }
        alert("Producto agregado")
    }

    const cancelar = () => {
        setFormProduct({ name: "", measurement_type: "" })
    }

    return (<>
        <div className="container">
            <div className="formulario-registro">
                <div>
                    <h2 className="titulo">Ingreso de Productos</h2>
                </div>
                <br />
                <div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="name" value={formProducto.name} onChange={handleInputChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre del Producto</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="measurement_type" value={formProducto.measurement_type} onChange={handleInputChange} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tipo de Medición</label>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
                    </form>

                </div>
            </div >
        </div >
    </>)
}