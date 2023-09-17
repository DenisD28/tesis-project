import "../../css/App.css"
import { listProduct } from "../types.d"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { listaProductoTerminado } from "../../services/Services"
import Head from "../Table/Head/Head"
import { HeadType } from "../Table/types/HeadType"

const headers: HeadType[] = [
    { name: "Codigo", prop: "codigo" },
    { name: "Nombre", prop: "nombre" },
    { name: "Stock", prop: "stock" },
    { name: "Acciones", prop: "acciones" }

]

const titleTable = 'Productos Terminados'

export const TablaProductoTerminado: React.FC = () => {

    const navigate = useNavigate()
    const [data, setProduct] = useState<listProduct>([])
    let state = { links: [], meta: [], inventario: [] }

    useEffect(() => {
        const lista = async () => {
            try {
                const { links, meta, inventario } = await listaProductoTerminado()
                state = ({
                    links,
                    meta,
                    inventario
                })
                setProduct(inventario)
            } catch (e) {
                console.log(e)
            }
        }

        lista()
    }, [])

    const agregar = (id: number, nombre: string) => {
        localStorage.setItem("idProducto", JSON.stringify(id))
        localStorage.setItem("nombre", JSON.stringify(nombre))
        navigate("/ingresoProducto")
    }

    return (
        <>
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
                                    <button onClick={() => agregar(dat.id, dat.product)}>Agregar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}