import "../../css/App.css"
import React, { useState } from "react"
import { Inventary, listProduct, tipo } from "../types.d";
import { listaProductos } from "../../services/Services";
import { HeadType } from "../Table/types/HeadType";
import Head from "../Table/Head/Head";

interface Props {
    fnAgregar(dat: Inventary): void
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "name" },
]

const titleTable = 'Materia Prima'

export const ModalProducto: React.FC<Props> = ({ fnAgregar, setIsOpen }) => {

    const [formProducto, setFormProduct] = useState<tipo>({ type: "" })
    const [data, setProduct] = useState<listProduct>([])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormProduct((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const lista = async () => {
            try {
                const response = await listaProductos(formProducto)
                setProduct(response)
                console.log(response)
            } catch (e) {
                console.log(e)
            }
        }
        lista();
    }

    return (<>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Lista de productos
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                        <form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-1 md:grid-cols-2 grid-rows-1'>
                            <div className="flex justify-center items-center flex-col p-2">
                                <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="nombre">Categoria</label>
                                <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="type" value={formProducto.type} onChange={handleInputChange} placeholder="Escribe la categoria del producto" required />
                            </div>
                            <div className="flex justify-center items-center flex-col p-2 mt-4">
                                <br />
                                <button className={`w-full h-10 rounded-md border-2 border-[#ddd] px-4 font-medium bg-green-600 text-white`} type="submit">Buscar</button>
                            </div>
                        </form>
                        <div className='px-8 rounded-xl bg-white md:h-50 h-80 overflow-y-auto hidden-scroll shadow-lg shadow-[#ddd] border-2'>
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
                                                <button onClick={() => fnAgregar(dat)}>Agregar</button>
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
                            onClick={() => setIsOpen(false)}
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