import { useEffect, useState } from "react"
import { listaCompras } from "../../services/Purchase/ListaPurchaseServices"
import { HeadType } from "../Table/types/HeadType"
import { Tablev2 } from "../Tablev2/Tablev2"
import PaginationComponent from "../Pagination/PaginationComponent.tsx";
import LoadingComponent from "../Loading/LoadingComponent.tsx";
import TableEmptyComponent from "../Message/TableEmptyComponent.tsx";

const headers: HeadType[] = [
    { name: "N° Factura", prop: "number_bill" },
    { name: "Proveedor", prop: "provider" },
    { name: "Fecha", prop: "date" },
    { name: "Total", prop: "total" },
]

export const TablasCompras: React.FC = () => {

    const [data, setOrg] = useState<[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(true)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };


    useEffect(() => {
        lista()
    }, [currentPage])

    const lista = async () => {
        try {
            setLoading(true)
            const { meta, purchases } = await listaCompras(currentPage)
            setOrg(purchases)
            setTotalPages(meta.last_page)
            setLoading(false)
        } catch (e) {
            // console.log(e)
        }
    }

    return (
        <>
            {loading
                ? <LoadingComponent />
                : (
                    data && data.length === 0
                    ?(
                        <TableEmptyComponent />
                    ) : (
                        <>
                            <Tablev2
                                headers={headers}
                                data={data}
                                fnClick={() => { }}
                            />
                            <PaginationComponent
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </>
                    )

                )
            }
        </>
    )
}