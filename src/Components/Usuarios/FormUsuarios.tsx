import { useState } from "react";
import { User } from "../types.d";
import toast, { Toaster } from "react-hot-toast";
import { ModalUsaurio } from "../Modal/ModalUsuario";
import { useGlobalContext } from "../../hooks/useUserContext";
import InputsForm from "../Forms/InputsComponents/InputsForm";
import ButtonForm from "../Forms/ButtonComponents/ButtonForm";
import { ModalOrganizacion } from "../Modal/ModalOrganizacion";
import { agregarUsuario } from "../../services/Users/AddUsariosServices";
import SelectForm from "../Forms/SelectComponents/SelectForm";

const data = [{
    "name": "Administrador",
    "value": 2
},
{
    "name": "Colaborador",
    "value": 3
}]

export const FormUsuarios = () => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [organizacion, setOrganizacion] = useState("")
    const [role, setRole] = useState("2")
    const [isOpen, setIsOpen] = useState(false)
    const { usuario } = useGlobalContext()
    const [userData, setUserData] = useState();
    const [isShow, setIsShow] = useState(false)


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("id", id)
        formData.append("name", name)
        formData.append("email", email)
        formData.append("username", username)
        formData.append("organizacion", organizacion)
        formData.append("role", role)

        if (usuario?.role.id == 2) {
            let ident = formData.get("id")
            ident = usuario.organization.id.toString()
            try {
                const response = await agregarUsuario(formData)
                console.log(response.data)
                setUserData(response.data)
                setIsShow(true)
                limpiar()
            } catch (e: any) {
                toast.error(e.response.data.message)
            }
        } else {
            try {

                const response = await agregarUsuario(formData)
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
        setId(id.id)
        setOrganizacion(id.name)
        setIsOpen(false)
    }

    const limpiar = () => {
        setId("")
        setEmail("")
        setName("")
        setUsername("")
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
                        value: name || "",
                        type: "text",
                        placeholder: "Escribe el nombre de la persona",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: setName,
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "username",
                        title: "Nombre del usuario",
                        value: username || "",
                        type: "text",
                        placeholder: "Escribe el nombre de usuario",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: setUsername,
                    }}
                />
                <InputsForm
                    DataInputs={{
                        name: "email",
                        title: "Email",
                        value: email || "",
                        type: "text",
                        placeholder: "Escribe su email",
                        isRequire: true,
                        isDisabled: false,
                        fnChange: setEmail,
                    }}
                />
                <SelectForm
                    dataSelect={{
                        name: "role",
                        title: "Rol del Usuario",
                        placeholder: "Rol del usuario",
                        fnChange: setRole,
                        options: data.map((rol) => {
                            return { valor: rol.value, texto: rol.name };
                        }, []),
                        isRequerid: true,
                        value: role,
                    }}
                />
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
                            <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="organization" placeholder="Nombre de la organizacion" onChange={() => setOrganizacion} value={organizacion} readOnly />
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