import "../../css/App.css"
import { useEffect, useState } from "react"
import { listaInventario } from "../../services/Services"
import { HeadType } from "../Table/types/HeadType"
import { Table } from "../Table/Table"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { Pagination } from "flowbite-react"

const headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "product" },
    { name: "Stock", prop: "stock" },
]

const titleTable = 'Productos'

function pages(url: string) {
    let lastDigit = ""
    // Utiliza una expresión regular para encontrar el último dígito en la URL
    const matches = url.match(/\d+$/);

    if (matches && matches.length > 0) {
        // El último dígito se encuentra en matches[0]
        lastDigit = matches[0];
        //console.log("Último dígito:", lastDigit);
    } else {
        // console.log("No se encontraron dígitos en la URL.");
    }

    return lastDigit
}

export const TablasProductos: React.FC = () => {

    //**********************************Consulta a base de datos******************************************
    const [data, setProduct] = useState()

    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => {
        setCurrentPage(page)

        lista()
    };

    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        lista()
    }, [])

    const lista = async () => {
        try {
            // const { links, meta, inventario } = await listaInventario()
            const { links, inventario } = await listaInventario()

            setProduct(inventario)
            setTotalPages(parseInt(pages(links.last), 10))
        } catch (e) {
            // console.log(e)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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
            <Table
                headers={headers}
                data={data}
                titleTable={titleTable}
                fnClick={() => { }}
            />
            <Pagination
                layout="navigation"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
                showIcons
            />
        </>
    )
}