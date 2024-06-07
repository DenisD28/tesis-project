import { useEffect, useState } from "react"
import { listaCompras } from "../../services/Purchase/ListaPurchaseServices"
import { HeadType } from "../Table/types/HeadType"
import { useNavigate } from "react-router-dom"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { Pagination } from "flowbite-react"
import { Tablev2 } from "../Tablev2/Tablev2"

const headers: HeadType[] = [
    { name: "N° Factura", prop: "number_bill" },
    { name: "Proveedor", prop: "provider" },
    { name: "Fecha", prop: "date" },
    { name: "Total", prop: "total" },
]

const titleTable = 'Registro de compras'

export const TablasCompras: React.FC = () => {

    const [data, setOrg] = useState()
    const navigation = useNavigate()

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
            const { meta, purchases } = await listaCompras(currentPage)

            setOrg(purchases)
            setTotalPages(meta.last_page)
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