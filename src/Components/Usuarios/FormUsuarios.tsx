import { useState } from "react";
import { User, Usuario } from "../types.d";
import { agregarUsuario } from "../../services/Users/AddUsariosServices";
import ButtonForm from "../Forms/ButtonComponents/ButtonForm";
import { ModalOrganizacion } from "../Modal/ModalOrganizacion";
import { useGlobalContext } from "../../hooks/useUserContext";
import toast, { Toaster } from "react-hot-toast";
import { ModalUsaurio } from "../Modal/ModalUsuario";
import InputsForm from "../Forms/InputsComponents/InputsForm";

export const FormUsuarios = () => {

    const [formProducto, setFormProduct] = useState<Usuario>({ id: "", name: "", email: "", username: "", password: "", token: "", organization: "", role: "2" })
    const [isOpen, setIsOpen] = useState(false)
    const { usuario } = useGlobalContext()
    const [userData, setUserData] = useState();
    const [isShow, setIsShow] = useState(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormProduct((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormProduct((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (usuario?.role.id == 2) {
            formProducto.id = usuario.organization.id.toString()
            try {
                const response = await agregarUsuario(formProducto)
                console.log(response.data)
                setUserData(response.data)
                setIsShow(true)
                limpiar()
            } catch (e: any) {
                toast.error(e.response.data.message)
            }
        } else {
            try {

                const response = await agregarUsuario(formProducto)
                console.log(response.data)
                setUserData(response.data)
                setIsShow(true)
                limpiar()
            } catch (e: any) {
                toast.error(e.response.data.message)
            }
        }
    }

    const agregar = (id: User) => {
        formProducto.id = id.id
        formProducto.organization = id.name
        setIsOpen(false)
    }

    const limpiar = () => {
        formProducto.id = ""
        formProducto.email = ""
        formProducto.name = ""
        formProducto.username = ""
    }

    return (
        <>
            <div> <Toaster /></div >
            <form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>
                {
                    isOpen && (
                        <ModalOrganizacion fnAgregar={agregar}
                            setIsOpen={setIsOpen} />
                    )
                }
                {
                    isShow && (
                        <ModalUsaurio data={userData}
                            setIsOpen={setIsShow} />
                    )
                }
                <InputsForm
                    DataInputs={{
                        name: "name",
                        title: "Nombre de la persona *",
                        value: formProducto.name || "",
                        type: "text",
                        placeholder: "Escribe el nombre de la persona",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: () => { handleInputChange },
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "username",
                        title: "Nombre del usuario",
                        value: formProducto.username || "",
                        type: "text",
                        placeholder: "Escribe el nombre de usuario",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: () => { handleInputChange },
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "email",
                        title: "Email",
                        value: formProducto.email || "",
                        type: "text",
                        placeholder: "Escribe su email",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: () => { handleInputChange },
                    }}
                />
                <div className="flex justify-center items-center flex-col p-2">
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="departamento">Rol del Usuario *</label>
                    <select onChange={handleSelectChange} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="role" id="type" value={formProducto.role} required>
                        <option value="2">Administrador</option>
                        <option value="3">Colaborador</option>
                    </select>
                </div>
                {
                    usuario?.role.id === 1 ? (<>
                        <div className="flex justify-center items-center flex-col p-2">
                            <div className="flex justify-center items-center flex-col p-2 mt-4">
                                <br />
                                <button className="w-full h-10 rounded-md border-2 border-[#ddd] px-4 font-medium bg-blue-600 text-white" type="button" onClick={() => setIsOpen(true)}>Buscar Organizacion</button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center flex-col p-2">
                            <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="nombre">Organizacion</label>
                            <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="organization" placeholder="Nombre de la organizacion" onChange={handleInputChange} value={formProducto.organization} readOnly />
                        </div>
                    </>
                    ) : (
                        <>
                            <div className="flex justify-center items-center flex-col p-2">
                                <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="nombre">Organizacion</label>
                                <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="organization" placeholder="Nombre de la organizacion" value={usuario?.organization.name} readOnly />
                            </div>
                        </>
                    )
                }

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