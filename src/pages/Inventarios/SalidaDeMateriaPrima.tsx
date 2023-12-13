import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { agregarProductoTerminado } from "../../services/Services"
import { useNavigate } from "react-router-dom"
import { HeadType } from "../../Components/Table/types/HeadType"
import Head from "../../Components/Table/Head/Head"
import ButtonForm from "../../Components/Forms/ButtonComponents/ButtonForm"
import { ModalInventario } from "../../Components/Modal/ModalInventario"
import toast, { Toaster } from "react-hot-toast"
import { ModalDetalleCompra } from "../../Components/Modal/ModalDetalleCompra"

interface DetalleRegistro {
    detail_purchase_id: number
    quantity: string
    observation: string
}

const headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "product" },
    { name: "Stock", prop: "stock" },
]

const titleTable = 'Materia Prima Utilizada'

export const SalidaDeMateriaPrima: React.FC = () => {
    const [product, setProduct] = useState<any>([])
    const [list, setLista] = useState<DetalleRegistro[]>([])
    const [cantidad, setCantidad] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDetalle, setIsOpenDetalle] = useState(false);
    const [cantidadesUsadas, setCantidades] = useState("")
    const [id, setId] = useState(0)

    const navigate = useNavigate()

    const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setCantidad(value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            if (cantidad != "") {
                if (product.length != 0) {

                    await agregarProductoTerminado(JSON.stringify(list), cantidad)
                    navigate("/pTerminado")
                } else {
                    toast.error("Debe agregar la materia prima utilizada")
                }
            } else {
                toast.error("Ingrese la cantidad de producto terminado")
            }
        } catch (e: any) {
            console.log(e)
            toast.error(e.response.data.error)
        }
    }

    const agregar = (idDetalle: any) => {
        setIsOpenDetalle(false)

        const datos: DetalleRegistro = {
            detail_purchase_id: idDetalle.id,
            quantity: cantidadesUsadas,
            observation: "test"
        }

        console.log(list)
        setLista([...list, datos])
    }

    const limpiarValor = (dato: string) => {
        const quantityArray = dato.split(',').filter(value => value !== '');
        const quantity = quantityArray.length > 0 ? parseFloat(quantityArray[0]) : 0;
        return quantity
    }

    const SeleccionarDetalle = (dato: any, cantidades: string[]) => {
        setCantidades(limpiarValor(cantidades.toString()).toString())
        setProduct([...product, dato])
        setId(dato.product.id)
        setIsOpen(false)
        setIsOpenDetalle(true)
    }

    const Eliminar = (dato: any) => {
        setProduct(product.filter((item: any) => item !== dato));
    }

    const cancelar = () => {
        navigate("/pTerminado")
    }

    return (
        <>
            <div> <Toaster /></div >
            <div className="card">
                <p><span>{localStorage.getItem('codigo')}</span></p>
                <div className="producto">
                    <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" /></svg>
                    <h1>{localStorage.getItem("nombre")}</h1>
                </div>
                <div className="flex justify-center items-center flex-col p-2">
                    <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="cantidad">Cantidad a ingresar</label>
                    <input onChange={handleInputChange2} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="number" name="cantidad" placeholder="Ingrese la cantidad" min={0} value={cantidad} />
                </div>
            </div>
            {
                isOpen && (
                    <ModalInventario fnAgregar={SeleccionarDetalle}
                        setIsOpen={setIsOpen} />
                )
            }
            {
                isOpenDetalle && (
                    <ModalDetalleCompra fnAgregar={agregar}
                        setIsOpenDetalle={setIsOpenDetalle} id={id} />
                )
            }
            {/* primeratabla */}
            <div className='px-8 rounded-xl bg-white md:h-96 h-80 overflow-y-auto hidden-scroll shadow-lg shadow-[#ddd] border-2'>
                <h1 className='sm:text-2xl text-lg font-bold my-4 h-16 w-full sticky top-0 left-0 bg-white pt-4 text-[#4F46E5]'>{titleTable}</h1>
                <div className="flex justify-center items-center flex-col p-2 mt-4">
                    <br />
                    <button className="w-full h-10 rounded-md border-2 border-[#ddd] px-4 font-medium bg-blue-600 text-white" type="button" onClick={() => setIsOpen(true)}>Buscar Producto</button>
                </div>
                <table className='w-full h-full'>
                    <Head headers={headers} />
                    <tbody>
                        {product.map((dat: { [x: string]: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }, index: Key | null | undefined) => (
                            <tr
                                key={index}
                                className='border-b-[1px] border-[#eee] h-14 sm:h-12'
                            >
                                {headers.map((h, i) => (
                                    <td
                                        key={i}
                                        className='text-[#3d333a]/90 text-center font-base sm:text-base text-sm'>
                                        {h.prop === 'product' ? (dat[h.prop] as unknown as { name: string }).name : dat[h.prop]}
                                    </td>
                                ))}
                                <td className="px-6 py-4">
                                    {/* <button onClick={() => agregar(dat)}>Agregar</button> */}
                                    <button className="w-30 h-10 rounded-md border-2 border-[#ddd] px-2 font-medium bg-red-600 text-white" onClick={() => Eliminar(dat)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <ButtonForm dataButton={{
                        'title': 'Cancelar',
                        'color': 'red',
                        'type': 'reset',
                        'fnClick': cancelar
                    }} />
                    <ButtonForm dataButton={{
                        'title': 'Guardar',
                        'color': 'green',
                        'type': 'submit',
                        'fnClick': () => { }
                    }} />
                </div>
            </form>
        </>
    )
}