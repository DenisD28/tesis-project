import { useEffect, useState } from "react"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { agregarOrganizacion, departamentos, municipio } from "../../services/Services"
import { ciudad, municipioCiudad, organizacion } from "../types.d"
import toast, { Toaster } from "react-hot-toast"

export const FormAddOrganizacion = () => {

    const [formProducto, setFormProduct] = useState<organizacion>({ id: 0, name: "", ruc: "", address: "", phone_main: "", second_phone: "", city_id: 0, municipality_id: 0 })


    const [lista, setDepartamento] = useState<ciudad>([]);
    const [listaMunicipios, setMunicipio] = useState<municipioCiudad>([]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        if (name === "city_id") {
            listaMunicipio(value)
        }
        setFormProduct((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        const lista = async () => {
            try {
                const { ciudades } = await departamentos()

                setDepartamento(ciudades)
            } catch (e: any) {
                toast.error(e.message)
            }
        }
        lista()
    }, [])

    const listaMunicipio = async (id: string) => {
        try {
            const { municipios } = await municipio(id)

            setMunicipio(municipios)
        } catch (e) {
            // console.log(e)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await agregarOrganizacion(formProducto)

        } catch (e: any) {
            toast.error(e.response.data.message)
        }
    }

    return (
        <>
            <div> <Toaster /></div >
            <form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>
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
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="city_id">Departamento</label>
                    <select onChange={handleSelectChange} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="city_id" id="city_id" value={formProducto.city_id}>
                        <option value="">Selecciona el departamento del cliente</option>
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
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="municipality_id">Municipio</label>
                    <select onChange={handleSelectChange} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="municipality_id" id="municipality_id" value={formProducto.municipality_id}>
                        <option value="">Selecciona el municipio del cliente</option>
                        {
                            listaMunicipios.map(pro => (
                                <option value={pro.id}>{pro.name}</option>
                            ))
                        }
                    </select>
                </div>
                <ButtonForm dataButton={{
                    'title': 'Cancelar',
                    'color': 'red',
                    'type': 'reset',
                    'fnClick': () => { }
                }} />
                <ButtonForm dataButton={{
                    'title': 'Guardar',
                    'color': 'green',
                    'type': 'submit',
                    'fnClick': () => { }
                }} />
            </form >
        </>
    )
}