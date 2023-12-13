import "../../css/App.css"
import React, { useEffect, useState } from "react"
import { listaDetalleCompra } from "../../services/Services";
import { HeadType } from "../Table/types/HeadType";
import Head from "../Table/Head/Head";

interface Props {
    fnAgregar(id: number): void
    setIsOpenDetalle: React.Dispatch<React.SetStateAction<boolean>>
    id: number
}

const headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Precio", prop: "price" },
    { name: "Disponibilidad", prop: "disponibility" },
    { name: "Total", prop: "total" },
]

const titleTable = 'Lista de Compras'

export const ModalDetalleCompra: React.FC<Props> = ({ fnAgregar, setIsOpenDetalle, id }) => {

    const [data, setDetalle] = useState([])
    const [haObtenidoDatos, setHaObtenidoDatos] = useState(false);

    useEffect(() => {
        if (!haObtenidoDatos) {
            detalleCompra();
            setHaObtenidoDatos(true);
        }
    }, [haObtenidoDatos])

    const detalleCompra = async () => {
        try {
            const { detalles_de_compra } = await listaDetalleCompra(id)
            setDetalle(detalles_de_compra)
        } catch (e) {
            // console.log(e)
        }
    }

    return (<>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Lista de compras
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setIsOpenDetalle(false)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                        <div className='px-8 rounded-xl bg-white md:h-50 h-80 overflow-y-auto hidden-scroll shadow-lg shadow-[#ddd] border-2'>
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
                                                    {
                                                        h.prop === 'product' ? (dat[h.prop] as { name: string }).name : dat[h.prop]}
                                                </td>
                                            ))}
                                            <td>
                                                <button onClick={() => fnAgregar(dat)}>Seleccionar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setIsOpenDetalle(false)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>)
}