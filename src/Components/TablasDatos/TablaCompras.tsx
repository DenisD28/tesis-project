import { useEffect, useState } from "react"
import { listaCompras } from "../../services/Services"
import { HeadType } from "../Table/types/HeadType"
import { useNavigate } from "react-router-dom"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { Table } from "../Table/Table"

const headers: HeadType[] = [
    { name: "N° Factura", prop: "number_bill" },
    { name: "Proveedor", prop: "provider" },
    { name: "Fecha", prop: "date" },
    { name: "Total", prop: "total" },
]

const titleTable = 'Registro de compras'

export const TablasCompras: React.FC = () => {

    const [data, setOrg] = useState()
    // const [next, setNext] = useState("")
    const navigation = useNavigate()

    useEffect(() => {
        lista()
    }, [])

    const lista = async () => {
        try {
            // const { links, meta, purchases } = await listaCompras()
            const { purchases } = await listaCompras()

            setOrg(purchases)
        } catch (e) {
            // console.log(e)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigation("/addcompras")
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="w-52">
                    <ButtonForm dataButton={{
                        'title': 'Ingresar',
                        'color': 'green',
                        'type': 'submit',
                        'fnClick': () => { }
                    }} />
                </div>
            </form>
            <Table
                headers={headers}
                data={data}
                titleTable={titleTable}
                fnClick={() => { }}
            />
        </>
    )
}