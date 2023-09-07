import { useEffect, useState } from "react"
import { invent, listProduct } from "../../Components/types.d"
import { agregarProductoTerminado, listaInventario } from "../../services/Services"
import { useNavigate } from "react-router-dom"

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

    const agregar = (id: number) => {
        const newItem: invent = {
            detail_purchase_id: 2,
            quantity: cant,
            observation: "test"
        }
        alert("Producto Agregado")
        setList([...list, newItem])
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

    const cancelar = () => {
    }

    return (
        <>
            <div className="container_total">
                <div className="">
                    <h2 className="titulo">Agregar Productos Usados</h2>
                    <br />
                    <div className="relative">
                        <label htmlFor="floating_outlined" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad a utilizada</label>
                        <input name="description" value={cant} onChange={(e) => setCant(e.target.value)} type="number" id="floating_outlined" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cantidad a ingresar " required />
                    </div>
                    <div className="tabla_materia">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                            Codigo
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Nombre
                                        </th>
                                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                            Stock
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Disponibilidad
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Cantidad Necesitada
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map(pro => (
                                            <tr key={pro.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-6 py-4">{pro.code}</td>
                                                <td className="px-6 py-4">{pro.product}</td>
                                                <td className="px-6 py-4">{pro.stock}</td>
                                                <td className="px-6 py-4">{pro.status}</td>
                                                <td className="px-6 py-4">
                                                    <button onClick={() => agregar(pro.id)}>Agregar</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className=" contenedor">
                    <div className="form_2">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="relative" >
                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id producto</label>
                                <label htmlFor="floating_outlined" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{id}</label>
                            </div>
                            <div className="relative">
                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Producto</label>
                                <label htmlFor="floating_outlined" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{nombre}</label>
                            </div>
                            <div className="relative">
                                <label htmlFor="floating_outlined" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad a ingresar</label>
                                <input name="description" value={cantidad} onChange={(e) => setCantidad(e.target.value)} type="number" id="floating_outlined" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cantidad a ingresar " required />
                            </div>
                            <div className="buttons">
                                <div className="button">
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Registrar</button>
                                </div>
                                <div className="button">
                                    <button onClick={cancelar} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancelar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}