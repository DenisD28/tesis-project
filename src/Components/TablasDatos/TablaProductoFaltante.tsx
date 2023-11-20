import { useEffect, useState } from "react"
import "../../css/App.css"
import { listaProductoFaltante } from "../../services/Services"
import { HeadType } from "../Table/types/HeadType"
import { Table } from "../Table/Table"

let headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "product_name" },
    { name: "Stock", prop: "stock" },
]

const titleTable = 'Productos con stock minimo'

export const TablaProductoFaltante: React.FC = () => {

    const [data, setProduct] = useState()

    useEffect(() => {
        const lista = async () => {
            try {
                // const { links, meta, inventario_stock_min } = await listaProductoFaltante()
                const { inventario_stock_min } = await listaProductoFaltante()

                setProduct(inventario_stock_min)
            } catch (e) {
                // console.log(e)
            }
        }

        lista()
    }, [])

    return (
        <Table
            headers={headers}
            data={data}
            titleTable={titleTable}
            fnClick={() => { }}
        />
    )
}