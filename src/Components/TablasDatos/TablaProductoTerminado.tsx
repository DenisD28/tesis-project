import "../../css/App.css"
import { listProduct } from "../types.d"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { listaProductoTerminado } from "../../services/Services"
import Head from "../Table/Head/Head"
import { HeadType } from "../Table/types/HeadType"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"

const headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "product" },
    { name: "Stock", prop: "stock" },
]

const titleTable = 'Productos Terminados'

export const TablaProductoTerminado: React.FC = () => {

    const navigate = useNavigate()
    const [data, setProduct] = useState<listProduct>([])
    const navigation = useNavigate()

    useEffect(() => {
        const lista = async () => {
            try {
                // const { links, meta, inventario } = await listaProductoTerminado()
                const { inventario } = await listaProductoTerminado()

                setProduct(inventario)
            } catch (e) {
                console.log(e)
            }
        }

        lista()
    }, [])

    const agregar = (id: number, nombre: string, codigo: string) => {
        localStorage.setItem("idProducto", JSON.stringify(id))
        localStorage.setItem("nombre", JSON.stringify(nombre))
        localStorage.setItem("codigo", JSON.stringify(codigo))
        navigate("/ingresoProducto")
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigation("/IngresoInventarioPT")
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="button">
                    <ButtonForm dataButton={{
                        'title': 'Ingresar',
                        'color': 'green',
                        'type': 'submit',
                        'fnClick': () => { }
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
                                <td>
                                    <button onClick={() => agregar(dat.id, dat.product, dat.code)}>Agregar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}