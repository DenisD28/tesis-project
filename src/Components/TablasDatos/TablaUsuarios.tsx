import "../../css/App.css"
import { listOrg } from "../types.d"
import { useEffect, useState } from "react"
import { listaOrganizaciones } from "../../services/Services"
import { HeadType } from "../Table/types/HeadType"
import Head from "../Table/Head/Head"
import { useNavigate } from "react-router-dom"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"

const headers: HeadType[] = [
    { name: "Nombre", prop: "nombre" },
    { name: "Estado", prop: "estado" },
    { name: "Rol", prop: "Rol" },
    { name: "Ultima Conexion", prop: "ultimaConexion" },
    { name: "Accion", prop: "accion" },

]

const titleTable = 'Usuarios del Sistema'

export const TablasUsuarios: React.FC = () => {

    const [data, setOrg] = useState<listOrg>([])
    const [next, setNext] = useState("")
    let state = { links: [], meta: [], organizaciones: [] }
    const navigation = useNavigate()

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
        navigation("#")
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="button">
                    <ButtonForm dataButton={{
                        'title': 'Ingresar',
                        'color': 'green',
                        'type': 'submit',
                    }} />
                </div>
            </form>
            <div className='px-8 rounded-xl bg-white md:h-96 h-80 overflow-y-auto hidden-scroll shadow-lg shadow-[#ddd] border-2'>
                <h1 className='sm:text-2xl text-lg font-bold my-4 h-16 w-full sticky top-0 left-0 bg-white pt-4 text-[#4F46E5]'>{titleTable}</h1>
                <table className='w-full h-full'>
                    <Head headers={headers} />
                    <tbody>
                        {data.map((dat, index) => (
                            <tr
                                key={index}
                                className='border-b-[1px] border-[#eee] h-14 sm:h-12'
                            >
                                {headers.map((h, i) => (
                                    <td
                                        key={i}
                                        className='text-[#3d333a]/90 text-center font-base sm:text-base text-sm'>
                                        {
                                            dat[h.prop]
                                        }
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

