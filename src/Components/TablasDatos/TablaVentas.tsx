import { useEffect, useState } from "react"
import { HeadType } from "../Table/types/HeadType"
import { Pagination } from "flowbite-react"
import { Tablev2 } from "../Tablev2/Tablev2"
import { ListaVentas } from "../../services/Sales/ListaVentaServices"

const headers: HeadType[] = [
    { name: "N° Factura", prop: "number_bill" },
    { name: "Cliente", prop: "client_id" },
    { name: "Fecha", prop: "date" },
    { name: "Total", prop: "total" },
]

export const TablasVentas: React.FC = () => {

    const [data, setOrg] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };


    useEffect(() => {
        lista()
    }, [currentPage])

    const lista = async () => {
        try {
            // const { links, meta, purchases } = await listaCompras()
            const { meta, sales } = await ListaVentas(currentPage)

            setOrg(sales)
            setTotalPages(meta.last_page)
        } catch (e) {
            // console.log(e)
        }
    }

    return (
        <>
            <Tablev2
                headers={headers}
                data={data}
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