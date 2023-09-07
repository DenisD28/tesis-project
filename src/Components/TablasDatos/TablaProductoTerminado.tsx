import "../../css/App.css"
import { listProduct } from "../types.d"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { listaProductoTerminado } from "../../services/Services"
export const TablaProductoTerminado: React.FC = () => {

    const navigate = useNavigate()
    const [product, setProduct] = useState<listProduct>([])
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
        <div className="body contenedor">
            <h2 className="titulo">Lista de Producto Terminado</h2>
            <div className="tabla">
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
                                        <td>
                                            <button onClick={() => agregar(pro.id, pro.product)}>Agregar</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}