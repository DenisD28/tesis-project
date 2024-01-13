import { useEffect, useState } from 'react';
import ButtonForm from '../Forms/ButtonComponents/ButtonForm'
import { ciudad, clients, municipioCiudad } from '../types.d';
import { agregarCliente } from '../../services/Clients/AddClienteServices'
import { departamentos } from '../../services/Departament/ListaDepartamentosServices'
import { municipio } from '../../services/Departament/ListaMunicipalityServices'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import InputsForm from '../Forms/InputsComponents/InputsForm';
import SelectForm from '../Forms/SelectComponents/SelectForm';

export default function AddClient() {

    const [formProducto, setFormProduct] = useState<clients>({ name: "", address: "", city_id: 0, municipality_id: 0, phone_main: "", phone_secondary: "", type: "Por mayor", details: "" })

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

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
            await agregarCliente(formProducto)
            navigation("/clientes")
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
                        title: "Nombre *",
                        value: formProducto.name || "",
                        type: "text",
                        placeholder: "Escribe el nombre del cliente",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: () => { handleInputChange },
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "phone_main",
                        title: "Telefono principal",
                        value: formProducto.phone_main || "",
                        type: "text",
                        placeholder: "Escribe el telefono principal del cliente",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: () => { handleInputChange },
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "phone_main",
                        title: "Telefono secundario",
                        value: formProducto.phone_secondary || "",
                        type: "text",
                        placeholder: "Escribe el telefono secundario del cliente",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: () => { handleInputChange },
                    }}
                />
                <div className="flex justify-center items-center flex-col p-2">
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="departamento">Tipo de cliente *</label>
                    <select onChange={handleSelectChange} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="type" id="type" value={formProducto.type} required>
                        <option value="Por mayor">Por mayor</option>
                        <option value="Al detalle">Al detalle</option>
                    </select>
                </div>
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
                <span className='row-span-2'>
                    <InputsForm
                        DataInputs={{
                            name: "address",
                            title: "Direccion",
                            value: formProducto.address || "",
                            type: "text",
                            placeholder: "Escribe la direccion del cliente",
                            isRequire: true,
                            isDisabled: false,
                            fnChange: () => { handleTextAreaChange },
                        }}
                    />
                </span>
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
            </form>
        </>
    )
}
