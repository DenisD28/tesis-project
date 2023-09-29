import { useEffect, useState } from "react"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { departamentos } from "../../services/Services"
import { ciudad, organizacion } from "../types.d"

export const FormAddOrganizacion = () => {

    let state = { ciudades: [] }
    const [lista, setDepartamento] = useState<ciudad>([]);

    const [formProducto, setFormProduct] = useState<organizacion>({ id: 0, name: "", ruc: "", address: "", phone_main: "", second_phone: "", cite: 0, municipalities: 0 })

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormProduct((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        const lista = async () => {
            try {
                const { ciudades } = await departamentos()
                state = ({
                    ciudades
                })
                setDepartamento(ciudades)
            } catch (e) {
                console.log(e)
            }
        }
        lista()
    }, [])

    return (
        <>
            <form action="" className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>
                <div className="flex justify-center items-center flex-col p-2">
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="nombre">Nombre</label>
                    <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="nombre" placeholder="Escribe el nombre de la organizacion" />
                </div>
                <div className="flex justify-center items-center flex-col p-2">
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="Telefono Principal">Telefono Principal</label>
                    <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="telefonoPrincipal" placeholder="Escribe el nombre de la organizacion" />
                </div>
                <div className="flex justify-center items-center flex-col p-2">
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="Telefono Secundario">Telefono Secundario</label>
                    <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="telefonoSecundario" placeholder="Escribe el telefono secundario" />
                </div>
                <div className="flex justify-center items-center flex-col p-2">
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="Departamento">Departamento</label>
                    <select className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="departamento" id="departamento" value={formProducto.id} onChange={handleSelectChange}>
                        <option value="">Departamento</option>
                        {
                            lista.map(pro => (
                                <option value={pro.id}>{pro.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex justify-center items-center flex-col p-2">
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="RUC">RUC</label>
                    <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="ruc" placeholder="Ingrese le numero ruc" />
                </div>
                <div className="flex justify-center items-center flex-col p-2">
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="direccion">Direccion</label>
                    <textarea className="w-full h-36 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="direccion" id="direccion" placeholder="Ingrese la direccion"></textarea>
                </div>
                <div className="flex justify-center items-center flex-col p-2">
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="Municipio">Municipio</label>
                    <select className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="municipio" id="municipio">
                        <option value="">Municipio</option>
                        {/* {dataSelect.options.map((option, index) => {
                            return <option key={index} value={option}>{option}</option>
                        }
                        )} */}
                    </select>
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
        </>
    )
}