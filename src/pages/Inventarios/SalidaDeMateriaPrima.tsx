import { useEffect, useState } from "react"
import { invent, inventario, listProduct } from "../../Components/types.d"
import { agregarProductoTerminado, listaInventario } from "../../services/Services"
import { useNavigate } from "react-router-dom"
import { HeadType } from "../../Components/Table/types/HeadType"
import Head from "../../Components/Table/Head/Head"
import { Menu } from "../../Components/Menu/Menu"
import { Nav } from "../../Components/Navegador/Nav"
import ButtonForm from "../../Components/Forms/ButtonComponents/ButtonForm"

const headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "product" },
    { name: "Stock", prop: "stock" },
    { name: "Accion", prop: "accion" }
]

const secondheaders: HeadType[] = [
    { name: "Cantidad", prop: "quantity" },
    { name: "Nombre", prop: "detail_purchase_id" },
]

const titleTable = 'Materia Prima'
const titleTable2 = 'Materia Prima Usada'

export const SalidaDeMateriaPrima: React.FC = () => {
    const [cantidad, setCantidad] = useState("")
    const [product, setProduct] = useState<listProduct>([])
    const [cant, setCant] = useState("")
    const [list, setList] = useState<invent[]>([])
    let state = { links: [], meta: [], inventario: [] }
    let id = localStorage.getItem('idProducto')
    let nombre = localStorage.getItem('nombre')

    const navigate = useNavigate()
    useEffect(() => {
        const lista = async () => {
            try {
                const { links, meta, inventario } = await listaInventario()
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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCant(value)
    }

    const agregar = (id: number) => {
        const newItem: invent = {
            detail_purchase_id: 2,
            quantity: cant,
            observation: "test"
        }
        setList([...list, newItem])
        console.log(list)
        setCant("")
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await agregarProductoTerminado(JSON.stringify(list), cantidad)
            navigate("/pTerminado")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className="contenedor">
                <div className="contenido">
                    <div className="form-salida">
                        <div className="column1">
                            <div className="card">
                                <p><span>{localStorage.getItem('codigo')}</span></p>
                                <div className="producto">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" /></svg>
                                    <h1>{localStorage.getItem("nombre")}</h1>
                                </div>
                                <p>15 bolsas</p>
                            </div>
                            {/* primeratabla */}
                            <div className='px-8 rounded-xl bg-white md:h-96 h-80 overflow-y-auto hidden-scroll shadow-lg shadow-[#ddd] border-2'>
                                <h1 className='sm:text-2xl text-lg font-bold my-4 h-16 w-full sticky top-0 left-0 bg-white pt-4 text-[#4F46E5]'>{titleTable}</h1>
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
                                                <td>

                                                    <input className="w-full " type="number" name="cant" placeholder="0" onChange={handleInputChange} />
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button onClick={() => agregar(dat)}>Agregar</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* SegundaTabla */}
                        <div className="column2">
                            <div className='px-8 rounded-xl bg-white md:h-96 h-80 overflow-y-auto hidden-scroll shadow-lg shadow-[#ddd] border-2'>
                                <h1 className='sm:text-2xl text-lg font-bold my-4 h-16 w-full sticky top-0 left-0 bg-white pt-4 text-[#4F46E5]'>{titleTable2}</h1>
                                <table className='w-full h-full'>
                                    <Head headers={secondheaders} />
                                    <tbody>
                                        {list.map((dat, index) => (
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
                            <form onSubmit={(e) => handleSubmit(e)} className="form-salidaMP">
                                <ButtonForm dataButton={{
                                    'title': 'Cancelar',
                                    'color': 'red',
                                    'type': 'reset',
                                }} />
                                <ButtonForm dataButton={{
                                    'title': 'Guardar',
                                    'color': 'green',
                                    'type': 'submit',
                                }} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}