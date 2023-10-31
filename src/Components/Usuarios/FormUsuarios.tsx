import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Usuario, listOrg } from "../types.d";
import { agregarUsuario, listaOrganizaciones } from "../../services/Services";
import ButtonForm from "../Forms/ButtonComponents/ButtonForm";

export const FormUsuarios = () => {


    const [formProducto, setFormProduct] = useState<Usuario>({ id: "", name: "", email: "", username: "", password: "", token: "", organization: "", role: "" })
    let state = { links: [], meta: [], organizaciones: [] }
    const navigation = useNavigate()
    const [data, setOrg] = useState<listOrg>([])

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

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
            const { links, meta, organizaciones } = await listaOrganizaciones()
            state = ({
                links,
                meta,
                organizaciones
            })
            setOrg(organizaciones)
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await agregarUsuario(formProducto)
            navigation("/usuarios")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>

            <div className="flex justify-center items-center flex-col p-2">
                <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="nombre">Nombre de la persona *</label>
                <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="name" placeholder="Escribe el nombre de la persona" onChange={handleInputChange} value={formProducto.name} required />
            </div>
            <div className="flex justify-center items-center flex-col p-2">
                <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="nombre">Nombre del usuario *</label>
                <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="username" placeholder="Escribe su nombre de usuario" onChange={handleInputChange} value={formProducto.username} required/>
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

            <div className="flex justify-center items-center flex-col p-2">
                <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="municipality_id">Organización *</label>
                <select onChange={handleSelectChange} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="organization" id="municipality_id" value={formProducto.organization} required>
                    <option value="">Selecciona la organizacion</option>
                    {
                        data.map(pro => (
                            <option value={pro.id}>{pro.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="flex justify-center items-center flex-col p-2">
            </div>
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
    )
}