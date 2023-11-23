import "../../css/App.css"
import { SetStateAction, useEffect, useState } from "react"
import { listaInventario } from "../../services/Services"
import { HeadType } from "../Table/types/HeadType"
import { Table } from "../Table/Table"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { useNavigate } from "react-router-dom"
import { Pagination } from "flowbite-react"
import { VerMasProducto } from "../VerMas/VerMasProducto"

const headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "product" },
    { name: "Stock", prop: "stock" },
]

const titleTable = 'Materia Prima'

function pages(url: string) {
    let lastDigit = ""
    // Utiliza una expresión regular para encontrar el último dígito en la URL
    const matches = url.match(/\d+$/);

    if (matches && matches.length > 0) {
        // El último dígito se encuentra en matches[0]
        lastDigit = matches[0];
    } else {
        // console.log("No se encontraron dígitos en la URL.");
    }

    return lastDigit
}

export const Tablas: React.FC = () => {

    //**********************************Consulta a base de datos******************************************
    const [data, setProduct] = useState()
    const navigation = useNavigate()
    const [datos, setDatos] = useState()
    const [isOpen, setIsOpen] = useState(false);

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