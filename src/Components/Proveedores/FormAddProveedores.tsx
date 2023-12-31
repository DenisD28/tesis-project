import { useEffect, useState } from "react"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { agregarProveedor } from "../../services/Provider/AddProveedorServices"
import { departamentos } from "../../services/Departament/ListaDepartamentosServices"
import { municipio } from "../../services/Departament/ListaMunicipalityServices"
import { ciudad, municipioCiudad, proveedor } from "../types.d"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import InputsForm from "../Forms/InputsComponents/InputsForm"
import SelectForm from "../Forms/SelectComponents/SelectForm"

export const FormAddProveedores = () => {

    const [formProducto, setFormProduct] = useState<proveedor>({ name: "", ruc: "", address: "", phone_main: "", contact_name: "", second_phone: "", city_id: 0, municipality_id: 0 })

    const [lista, setDepartamento] = useState<ciudad>([]);
    const [listaMunicipios, setMunicipio] = useState<municipioCiudad>([]);
    const navigation = useNavigate()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormProduct((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

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

    // const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     const { name, value } = event.target;
    //     setFormProduct((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    useEffect(() => {
        const lista = async () => {
            try {
                const { ciudades } = await departamentos()
                setDepartamento(ciudades)
            } catch (e) {
                // console.log(e)
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
            await agregarProveedor(formProducto)
            navigation("/proveedores")
        } catch (e: any) {
            console.log(e)
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
                        title: "Nombre del proveedor *",
                        value: formProducto.address || "",
                        type: "text",
                        placeholder: "Escribe el nombre del proveedor",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: () => { handleInputChange },
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "contact_name",
                        title: "Nombre del contacto",
                        value: formProducto.contact_name || "",
                        type: "text",
                        placeholder: "Escribe el nombre del proveedor",
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
                        placeholder: "Escribe el telefono principal",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: () => { handleInputChange },
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "second_phone",
                        title: "Telefono Secundario",
                        value: formProducto.phone_main || "",
                        type: "text",
                        placeholder: "Escribe el telefono secundario",
                        isRequire: false,
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
                        title: "RUC",
                        value: formProducto.ruc || "",
                        type: "text",
                        placeholder: "Ingrese le numero ruc",
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
                    'fnClick': () => { },
                }} />
                <ButtonForm dataButton={{
                    'title': 'Guardar',
                    'color': 'green',
                    'type': 'submit',
                    'fnClick': () => { },
                }} />
            </form >
        </>
    )
}