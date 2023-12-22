import "../../css/App.css"
import { SetStateAction, useEffect, useState } from "react"
import { listaInventario } from "../../services/Products/ListaInventariosMPServices"
import { HeadType } from "../Table/types/HeadType"
import { Table } from "../Table/Table"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { useNavigate } from "react-router-dom"
import { VerMasProducto } from "../VerMas/VerMasProducto"

const headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "product" },
    { name: "Stock", prop: "stock" },
]

const titleTable = 'Materia Prima'

export const Tablas: React.FC = () => {

    //**********************************Consulta a base de datos******************************************
    const [data, setProduct] = useState()
    const navigation = useNavigate()
    const [datos, setDatos] = useState()
    const [isOpen, setIsOpen] = useState(false);

    const [haObtenidoDatos, setHaObtenidoDatos] = useState(false);

    useEffect(() => {
        if (!haObtenidoDatos) {
            lista();
            setHaObtenidoDatos(true);
        }
    }, [haObtenidoDatos])

    const lista = async () => {
        try {
            // const { links, meta, inventario } = await listaInventario()
            const { inventario } = await listaInventario()
            setProduct(inventario)
        } catch (e) {
            // console.log(e)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigation("/IngresoInventarioMP")
    }

    const vermas = (dat: SetStateAction<undefined>) => {
        setDatos(dat)
        setIsOpen(true)
    }
    //**********************************Consulta a base de datos******************************************

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="button">
                    <ButtonForm dataButton={{
                        'title': 'Ingresar',
                        'color': 'green',
                        'type': 'submit',
                        'fnClick': () => { }
                    }} />
                </div>
            </form>
            {
                isOpen && (
                    <VerMasProducto data={datos} setIsOpen={setIsOpen} />
                )
            }
            <Table
                headers={headers}
                data={data}
                titleTable={titleTable}
                fnClick={vermas}
            />
        </>
    )
}