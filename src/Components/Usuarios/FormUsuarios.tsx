import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Usuario, listOrg } from "../types.d";
import { agregarUsuario, listaOrganizaciones } from "../../services/Services";
import ButtonForm from "../Forms/ButtonComponents/ButtonForm";
import { ModalOrganizacion } from "../Modal/ModalOrganizacion";
import { useGlobalContext } from "../../hooks/useUserContext";
import toast, { Toaster } from "react-hot-toast";
import { ModalUsaurio } from "../Modal/ModalUsuario";

export const FormUsuarios = () => {

    const [formProducto, setFormProduct] = useState<Usuario>({ id: "", name: "", email: "", username: "", password: "", token: "", organization: "", role: "" })
    const navigation = useNavigate()
    const [data, setOrg] = useState<listOrg>([])
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

    useEffect(() => {
        lista()
    }, [])

    const lista = async () => {
        try {
            const { organizaciones } = await listaOrganizaciones()
            setOrg(organizaciones)
        } catch (e) {
        }
    }

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
                <div className="flex justify-center items-center flex-col p-2">
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="nombre">Nombre de la persona *</label>
                    <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="name" placeholder="Escribe el nombre de la persona" onChange={handleInputChange} value={formProducto.name} required />
                </div>
                <div className="flex justify-center items-center flex-col p-2">
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="nombre">Nombre del usuario *</label>
                    <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="username" placeholder="Escribe su nombre de usuario" onChange={handleInputChange} value={formProducto.username} required />
                </div>
                <div className="flex justify-center items-center flex-col p-2">
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="nombre">Email</label>
                    <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="email" placeholder="Escribe su email" onChange={handleInputChange} value={formProducto.email} />
                </div>

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