import "../../css/App.css"
import { useEffect, useState } from "react"
import { listaProductoTerminado } from "../../services/Products/ListaInventarioPTServices"
import { HeadType } from "../Table/types/HeadType"
import ShowInfoComponent from "../Section/ShowInfo/ShowInfoComponent"
import { VerMasProducto } from "../VerMas/VerMasProducto"

const headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "product" },
    { name: "Stock", prop: "stock" },
]




export const TablaProductoTerminado: React.FC = () => {

    const [data, setProduct] = useState<[]>([])
    const [datos, setDatos] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        lista()
    }, [currentPage])

    // const lista = async () => {
    //     try {
    //         // const { links, meta, inventario } = await listaProductoTerminado()
    //         const { inventario } = await listaProductoTerminado()
    //         setProduct(inventario)
    //     } catch (e) {
    //         // console.log(e)
    //     }
    // }

    const lista = async () => {
        try {
            setLoading(true)
            const { meta, inventario } = await listaProductoTerminado(currentPage)
            setProduct(inventario)
            setTotalPages(meta.last_page)
            setLoading(false)
        } catch (e) {
            // console.log(e)
        }
    }

    // const agregar = (data?: Inventary) => {
    //     localStorage.setItem("idProducto", JSON.stringify(data?.id))
    //     localStorage.setItem("nombre", JSON.stringify(data?.product.name))
    //     localStorage.setItem("codigo", JSON.stringify(data?.code))
    //     navigate("/ingresoProducto")
    // }

    return (
        <>
            {
                isOpen && (
                    <VerMasProducto data={datos} setIsOpen={setIsOpen} />
                )
            }
            <ShowInfoComponent
                headers={headers}
                data={data}
                currentPage={currentPage}
                totalPages={totalPages}
                loading={loading}
                setCurrentPage={setCurrentPage}
                setData={setDatos}
                setIsOpen={setIsOpen}
            />
            {/* <div className='px-8 rounded-xl bg-white md:h-96 h-80 overflow-y-auto hidden-scroll shadow-lg shadow-[#ddd] border-2'>
                <h1 className='sm:text-2xl text-lg font-bold my-4 h-16 w-full sticky top-0 left-0 bg-white pt-4 text-[#4F46E5]'>{titleTable}</h1>
                <table className='w-full h-full'>
                    <Head headers={headers} />
                    <tbody>
                        {data?.map((dat, index) => (
                            <tr
                                key={index}
                                className='border-b-[1px] border-[#eee] h-14 sm:h-12'
                            >
                                {headers.map((h, i) => (
                                    <td
                                        key={i}
                                        className='text-[#3d333a]/90 text-center font-base sm:text-base text-sm'>
                                        {h.prop === 'product' ? (dat[h.prop] as { name: string }).name : dat[h.prop]}
                                    </td>
                                ))}
                                <td>
                                    <button onClick={() => agregar(dat)}>Agregar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
        </>
    )
}