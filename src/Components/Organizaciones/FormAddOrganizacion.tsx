import { useEffect, useState } from "react"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { agregarOrganizacion } from "../../services/Organization/AddOrganizacionServices"
import { municipio } from "../../services/Departament/ListaMunicipalityServices"
import { departamentos } from "../../services/Departament/ListaDepartamentosServices"

import { ciudad, municipioCiudad, organizacion } from "../types.d"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import InputsForm from "../Forms/InputsComponents/InputsForm"
import SelectForm from "../Forms/SelectComponents/SelectForm"

export const FormAddOrganizacion = () => {

    const [formProducto, setFormProduct] = useState<organizacion>({ id: 0, name: "", ruc: "", address: "", phone_main: "", second_phone: "", city_id: 0, municipality_id: 0 })
    const [lista, setDepartamento] = useState<ciudad>([]);
    const [listaMunicipios, setMunicipio] = useState<municipioCiudad>([]);
    const navigation = useNavigate()

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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

                setDepartamento(ciudades)
            } catch (e: any) {
                toast.error(e.response.data.message)
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
            navigation("/Organizaciones")

        } catch (e: any) {
            toast.error(e.response.data.message)
        }
    }

    return (
        <>
            <div> <Toaster /></div >
            <form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>
                <InputsForm
                    DataInputs={{
                        name: "name",
                        title: "Nombre",
                        value: formProducto.name || "",
                        type: "text",
                        placeholder: "Nombre de la organizacion",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: () => { handleInputChange },
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "phone_main",
                        title: "Telefono Principal",
                        value: formProducto.phone_main || "",
                        type: "text",
                        placeholder: "Telefono Principal",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: () => { handleInputChange },
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "second_phone",
                        title: "Telefono Secundario",
                        value: formProducto.second_phone || "",
                        type: "text",
                        placeholder: "Telefono Secundario",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: () => { handleInputChange },
                    }}
                />
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
                <InputsForm
                    DataInputs={{
                        name: "ruc",
                        title: "Numero RUC",
                        value: formProducto.ruc || "",
                        type: "text",
                        placeholder: "Ingrese le numero RUC",
                        isRequire: false,
                        isDisabled: false,
                        fnChange: () => { handleInputChange },
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "address",
                        title: "Direccion",
                        value: formProducto.address || "",
                        type: "text",
                        placeholder: "Ingrese la direccion",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: () => { handleInputChange },
                    }}
                />
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