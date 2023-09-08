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
                <div>
                    <form onSubmit={(e) => handleSubmit(e)}>

                    </form>
                </div>
            </div >
        </div >
    </>)
}