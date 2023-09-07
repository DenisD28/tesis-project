import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { newProduct } from "../../Components/types.d";

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
                        <div>
                            <Input
                                isRequired
                                type="text"
                                label="Nombre Producto"
                                value={formProducto.name}
                                className="max-w-xs"
                                name="name"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <Input
                                isRequired
                                type="text"
                                label="Tipo de Medición"
                                value={formProducto.measurement_type}
                                className="max-w-xs"
                                name="measurement_type"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <Button color="danger" onClick={cancelar}>
                                Cancelar
                            </Button>
                            <Button color="primary" type="submit">
                                Registrar
                            </Button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    </>)
}