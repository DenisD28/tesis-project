import { useEffect, useState } from "react"
import "../../css/App.css"
import { listaProductoFaltante } from "../../services/Services"
import { listProduct } from "../types.d"
import { HeadType } from "../Table/types/HeadType"
import { Table } from "../Table/Table"

const headers: HeadType[] = [
    { name: "Codigo", prop: "codigo" },
    { name: "Nombre", prop: "nombre" },
    { name: "Stock", prop: "stock" },
]

const titleTable = 'Productos con stock minimo'

export const TablaProductoFaltante: React.FC = () => {

    const [data, setProduct] = useState<listProduct>([])
    let state = { links: [], meta: [], inventario: [] }

    useEffect(() => {
        const lista = async () => {
            try {
                const { links, meta, inventario } = await listaProductoFaltante()
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

    return (
        <Table
            headers={headers}
            data={data}
            titleTable={titleTable}
        />
    )
}