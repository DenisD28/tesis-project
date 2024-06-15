import { useEffect, useState } from "react"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { agregarProveedor } from "../../services/Provider/AddProveedorServices"
import { departamentos } from "../../services/Departament/ListaDepartamentosServices"
import { municipio } from "../../services/Departament/ListaMunicipalityServices"
import { ciudad, municipioCiudad } from "../types.d"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import InputsForm from "../Forms/InputsComponents/InputsForm"
import SelectForm from "../Forms/SelectComponents/SelectForm"
import { sectores } from "../../services/Sectors/ListaSectoresServices"

interface CityType {
    id: number;
    name: string;
}

export const FormAddProveedores = () => {

    const [name, setName] = useState("");
    const [ruc, setRuc] = useState("");
    const [address, setAddress] = useState("");
    const [contact_name, setContact_name] = useState("")
    const [sector_id, setSector_id] = useState("");
    const [municipality_id, setMunicipality_id] = useState("");
    const [city_id, setCity_id] = useState("");
    const [phone_main, setPhone_main] = useState("");
    const [phone_secondary, setPhone_secondary] = useState("");
    const [listSectors, setListSectors] = useState<CityType[]>([]);;
    const [listCity, setDepartamento] = useState<ciudad>([]);
    const [listaMunicipios, setMunicipio] = useState<municipioCiudad>([]);
    const navigation = useNavigate()


    useEffect(() => {
        const lista = async () => {
            try {
                const { ciudades } = await departamentos()
                setDepartamento(ciudades)
            } catch (e) {
                // console.log(e)
            }
        }

        let getSectores = async () => {
            const info = await sectores()
            await setListSectors(info.sectores)
        }

        getSectores()
        lista()
    }, [])

    useEffect(() => {
        const listaMunicipio = async (id: string) => {
            try {
                const { municipios } = await municipio(id)

                setMunicipio(municipios)
            } catch (e) {
                // console.log(e)
            }
        }
        listaMunicipio(city_id)
    }, [city_id])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("name", name)
        formData.append("ruc", ruc)
        formData.append("address", address)
        formData.append("sector", sector_id)
        formData.append("municipality", municipality_id)
        formData.append("city", city_id)
        formData.append("phone_main", phone_main)
        formData.append("phone_secondary", phone_secondary)

        try {
            await agregarProveedor(formData)
            navigation("/proveedores")
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
                        title: "Nombre del proveedor *",
                        value: name || "",
                        type: "text",
                        placeholder: "Escribe el nombre del proveedor",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: setName,
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "contact_name",
                        title: "Nombre del contacto",
                        value: contact_name || "",
                        type: "text",
                        placeholder: "Escribe el nombre del contacto del proveedor",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: setContact_name,
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "phone_main",
                        title: "Telefono Principal",
                        value: phone_main || "",
                        type: "text",
                        placeholder: "Escribe el telefono principal",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: setPhone_main,
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "second_phone",
                        title: "Telefono Secundario",
                        value: phone_secondary || "",
                        type: "text",
                        placeholder: "Escribe el telefono secundario",
                        isRequire: false,
                        isDisabled: false,
                        fnChange: setPhone_secondary,
                    }}
                />
                <SelectForm
                    dataSelect={{
                        name: "sector_id",
                        title: "Sector",
                        placeholder: "Seleccione un sector",
                        fnChange: setSector_id,
                        options: listSectors.map((sector) => {
                            return { valor: sector.id, texto: sector.name };
                        }, []),
                        isRequerid: true,
                        value: sector_id,
                    }}
                />
                <SelectForm
                    dataSelect={{
                        name: "city_id",
                        title: "Departamento",
                        placeholder: "Selecciona el departamento del cliente",
                        fnChange: setCity_id,
                        options: listCity.map((city) => {
                            return { valor: city.id, texto: city.name };
                        }, []),
                        isRequerid: true,
                        value: city_id,
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "ruc",
                        title: "RUC",
                        value: ruc || "",
                        type: "text",
                        placeholder: "Ingrese le numero ruc",
                        isRequire: false,
                        isDisabled: false,
                        fnChange: setRuc,
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "address",
                        title: "Direccion",
                        value: address || "",
                        type: "text",
                        placeholder: "Ingrese la direccion",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: setAddress,
                    }}
                />
                <SelectForm
                    dataSelect={{
                        name: "municipality_id",
                        title: "Municipio",
                        placeholder: "Selecciona el municipio del cliente",
                        fnChange: setMunicipality_id,
                        options: listaMunicipios.map((municipio) => {
                            return { valor: municipio.id, texto: municipio.name };
                        }, []),
                        isRequerid: true,
                        value: municipality_id,
                    }}
                />
                <div className={"invisible"}></div>
                <ButtonForm dataButton={{
                    'title': 'Cancelar',
                    'color': 'red',
                    'type': 'reset',
                    'fnClick': () => {
                    },
                }} />
                <ButtonForm dataButton={{
                    'title': 'Guardar',
                    'color': 'green',
                    'type': 'submit',
                    'fnClick': () => {
                    },
                }} />
            </form>
        </>
    )
}