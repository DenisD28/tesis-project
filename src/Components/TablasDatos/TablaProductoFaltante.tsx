import { useEffect, useState } from "react"
import "../../css/App.css"
import { listaProductoFaltante } from "../../services/Services"
import { listProduct } from "../types.d"
import { HeadType } from "../Table/types/HeadType"
import { Table } from "../Table/Table"
import Head from "../Table/Head/Head"

const data = [
    {
        codigo: "m-124",
        nombre: "Vinagre de frutas",
        stock: 0
    },
    {
        codigo: "m-127",
        nombre: "Agua",
        stock: 0
    },
    {
        codigo: "m-126",
        nombre: "Vinagre de arroz",
        stock: 0
    }
]

let headers: HeadType[] = [
    { name: "Codigo", prop: "codigo" },
    { name: "Nombre", prop: "nombre" },
    { name: "Stock", prop: "stock" },
]

const titleTable = 'Productos con stock minimo'

export const TablaProductoFaltante: React.FC = () => {

    // const [data, setProduct] = useState<listProduct>([])
    let state = { links: [], meta: [], inventario: [] }


    // useEffect(() => {
    //     const lista = async () => {
    //         try {
    //             const { links, meta, inventario } = await listaProductoFaltante()
    //             state = ({
    //                 links,
    //                 meta,
    //                 inventario
    //             })
    //             setProduct(inventario)
    //         } catch (e) {
    //             console.log(e)
    //         }
    //     }

    //     lista()
    // }, [])

    //temporal, por revisar en backend
    return (
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
    )
}