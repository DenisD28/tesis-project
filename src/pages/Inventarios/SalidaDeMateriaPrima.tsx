import { useState } from "react"
import { Inventary, invent, purchase } from "../../Components/types.d"
import { agregarProductoTerminado, listaDetalleCompra } from "../../services/Services"
import { useNavigate } from "react-router-dom"
import { HeadType } from "../../Components/Table/types/HeadType"
import Head from "../../Components/Table/Head/Head"
import ButtonForm from "../../Components/Forms/ButtonComponents/ButtonForm"
import { ModalInventario } from "../../Components/Modal/ModalInventario"
import toast, { Toaster } from "react-hot-toast"

const headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "product" },
    { name: "Stock", prop: "stock" },
]

const titleTable = 'Materia Prima Utilizada'

export const SalidaDeMateriaPrima: React.FC = () => {
    const [listaCompra, setListaCompra] = useState<purchase[]>([])
    const [product, setProduct] = useState<Inventary[]>([])
    const [list] = useState<invent[]>([])
    const [cantidad, setCantidad] = useState("")
    const [isOpen, setIsOpen] = useState(false);

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
        } catch (e) {
            console.log(e)
        }
    }

    const agregar = (dato: Inventary) => {
        console.log(dato)
        setProduct([...product, dato])
        detalleCompra(dato.id)
        setIsOpen(false)
    }

    const detalleCompra = async (id: number) => {
        try {
            const response = await listaDetalleCompra(id)
            setListaCompra([...listaCompra, response.detalle_de_compra])
        } catch (e) {
            console.log(e)
        }
    }

    const Eliminar = (dato: Inventary) => {
        setProduct(product.filter(item => item !== dato));
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
                    <ModalInventario fnAgregar={agregar}
                        setIsOpen={setIsOpen} />
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
                        {product.map((dat, index) => (
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
                                <td className="px-6 py-4">
                                    {/* <button onClick={() => agregar(dat)}>Agregar</button> */}
                                    <button onClick={() => Eliminar(dat)}>Eliminar</button>
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
                        'fnClick': () => { }
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