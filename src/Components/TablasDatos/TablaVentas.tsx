import { useEffect, useState } from "react"
import { listaCompras } from "../../services/Purchase/ListaPurchaseServices"
import { HeadType } from "../Table/types/HeadType"
import { useNavigate } from "react-router-dom"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { Pagination } from "flowbite-react"
import { Tablev2 } from "../Tablev2/Tablev2"
import { ListaVentas } from "../../services/Sales/ListaVentaServices"

const headers: HeadType[] = [
    { name: "N° Factura", prop: "number_bill" },
    { name: "Cliente", prop: "client_id" },
    { name: "Fecha", prop: "date" },
    { name: "Total", prop: "total" },
]

const titleTable = 'Registro de ventas'

export const TablasVentas: React.FC = () => {

    const [data, setOrg] = useState()
    const navigation = useNavigate()

    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(1)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };


    useEffect(() => {
        lista()
    }, [currentPage])

    const lista = async () => {
        try {
            // const { links, meta, purchases } = await listaCompras()
            const { meta, purchases } = await ListaVentas(currentPage)

            setOrg(purchases)
            setTotalPages(meta.last_page)
        } catch (e) {
            // console.log(e)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigation("/addventas")
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
            <Tablev2
                headers={headers}
                data={data}
                titleTable={titleTable}
                fnClick={() => { }}
            />
            <Pagination
                layout="navigation"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                showIcons
            />
        </>
    )
}