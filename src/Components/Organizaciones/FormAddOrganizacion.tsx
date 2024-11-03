import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import { ciudad, municipioCiudad } from "../types.d"
import SelectForm from "../Forms/SelectComponents/SelectForm"
import InputsForm from "../Forms/InputsComponents/InputsForm"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { sectores } from "../../services/Sectors/ListaSectoresServices"
import { municipio } from "../../services/Departament/ListaMunicipalityServices"
import { departamentos } from "../../services/Departament/ListaDepartamentosServices"
import { agregarOrganizacion } from "../../services/Organization/AddOrganizacionServices"

interface CityType {
    id: number;
    name: string;
}

export const FormAddOrganizacion = () => {

    const [name, setName] = useState("");
    const [ruc, setRuc] = useState("");
    const [address, setAddress] = useState("");
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
            } catch (e: any) {
                toast.error(e.response.data.message)
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
            await agregarOrganizacion(formData)

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
                        value: name || "",
                        type: "text",
                        placeholder: "Nombre de la organizacion",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: setName,
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "ruc",
                        title: "RUC",
                        value: ruc || "",
                        type: "text",
                        placeholder: "RUC de la organizacion",
                        isRequire: false,
                        isDisabled: false,
                        fnChange: setRuc,
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "address",
                        title: "Dirección",
                        value: address || "",
                        type: "text",
                        placeholder: "Dirección de la organizacion",
                        isRequire: false,
                        isDisabled: false,
                        fnChange: setAddress,
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
                        title: "Ciudad",
                        placeholder: "Seleccione una ciudad",
                        fnChange: setCity_id,
                        options: listCity.map((city) => {
                            return { valor: city.id, texto: city.name };
                        }, []),
                        isRequerid: true,
                        value: city_id,
                    }}
                />
                <SelectForm
                    dataSelect={{
                        name: "municipality_id",
                        title: "Municipio",
                        placeholder: "Seleccione un municipio",
                        fnChange: setMunicipality_id,
                        options: listaMunicipios.map((municipality) => {
                            return { valor: municipality.id, texto: municipality.name };
                        }, []),
                        isRequerid: true,
                        value: municipality_id,
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "phone_main",
                        title: "Teléfono principal",
                        value: phone_main || "",
                        type: "text",
                        placeholder: "Teléfono principal de la organizacion",
                        isRequire: false,
                        isDisabled: false,
                        fnChange: setPhone_main,
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "phone_secondary",
                        title: "Teléfono secundario",
                        value: phone_secondary || "",
                        type: "text",
                        placeholder: "Teléfono secundario de la organizacion",
                        isRequire: false,
                        isDisabled: false,
                        fnChange: setPhone_secondary,
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