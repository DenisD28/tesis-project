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

export const AddOrganizacion = () => {

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
                <SelectForm
                    dataSelect={{
                        name: "city_id",
                        title: "Departamento",
                        placeholder: "Selecciona el departamento del cliente",
                        fnChange: () => { handleSelectChange },
                        options: lista.map((city) => {
                            return { valor: city.id, texto: city.name };
                        }, []),
                        isRequerid: true,
                        value: formProducto.city_id,
                    }}
                />
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
                <SelectForm
                    dataSelect={{
                        name: "municipality_id",
                        title: "Municipio",
                        placeholder: "Selecciona el municipio del cliente",
                        fnChange: () => { handleSelectChange },
                        options: listaMunicipios.map((municipio) => {
                            return { valor: municipio.id, texto: municipio.name };
                        }, []),
                        isRequerid: true,
                        value: formProducto.municipality_id,
                    }}
                />
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