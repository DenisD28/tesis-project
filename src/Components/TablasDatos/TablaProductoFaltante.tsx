import { useEffect, useState } from "react"
import "../../css/App.css"
import { listaProductoFaltante } from "../../services/Services"
import { listProduct } from "../types.d"
import { HeadType } from "../Table/types/HeadType"
import Head from "../Table/Head/Head"

let headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "product_name" },
    { name: "Stock", prop: "stock" },
]

const titleTable = 'Productos con stock minimo'

export const TablaProductoFaltante: React.FC = () => {

    const [data, setProduct] = useState<listProduct>([])
    let state = { links: [], meta: [], inventario_stock_min: [] }


    useEffect(() => {
        const lista = async () => {
            try {
                const { links, meta, inventario_stock_min } = await listaProductoFaltante()
                state = ({
                    links,
                    meta,
                    inventario_stock_min
                })
                setProduct(inventario_stock_min)
            } catch (e) {
                console.log(e)
            }
        }

        lista()
    }, [])

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