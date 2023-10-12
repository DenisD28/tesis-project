import { useState } from "react";
import { newProduct } from "../../Components/types.d";
import { newAddProduct } from "../../services/Services";
import ButtonForm from "../Forms/ButtonComponents/ButtonForm";
import toast, { Toaster } from "react-hot-toast";

export const FormProducto = () => {

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
            const response = await newAddProduct(formProducto)

        } catch (e: any) {
            toast.error(e.message)
        }
    }

    const cancelar = () => {
        setFormProduct({ name: "", measurement_type: "" })
    }

    return (<>
        <div><Toaster /></div>
        <div className="container">
            <div className="formulario-registro">
                <div>
                    <h2 className="titulo">Ingreso de Productos</h2>
                </div>
                <br />
                <div>
                    <form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>
                        <div className="flex justify-center items-center flex-col p-2">
                            <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="nombre">Nombre</label>
                            <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="name" value={formProducto.name} onChange={handleInputChange} placeholder="Escribe el nombre del producto" required />
                        </div>
                        <div className="flex justify-center items-center flex-col p-2">
                            <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="medicion">Tipo de Medicion</label>
                            <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="measurement_type" value={formProducto.measurement_type} onChange={handleInputChange} placeholder="Escribe su forma de medicion" required />
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
                    </form>
                </div>
            </div >
        </div >
    </>)
}