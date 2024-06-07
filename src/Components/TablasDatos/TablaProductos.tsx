import "../../css/App.css"
import { SetStateAction, useEffect, useState } from "react"
import { HeadType } from "../Table/types/HeadType"
import { VerMasProducto } from "../VerMas/VerMasProducto"
import { Tablev2 } from "../Tablev2/Tablev2"
import { Pagination } from "flowbite-react"
import { ListaProductos } from "../../services/Products/ListaProductosServices"

const headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "name" },
    { name: "Unidad de medida", prop: "measurement_type" },
]

const titleTable = 'Catalogo de Productos'

export const TablasProductos: React.FC = () => {

    //**********************************Consulta a base de datos******************************************
    const [data, setProduct] = useState()
    const [datos, setDatos] = useState()
    const [isOpen, setIsOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(1)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        lista();
    }, [currentPage])

    const lista = async () => {
        try {
            // const { links, meta, inventario } = await listaInventario()
            const { products, meta } = await ListaProductos(currentPage)
            setProduct(products)

            setTotalPages(meta.last_page)
        } catch (e) {
            // console.log(e)
        }
    }

    const vermas = (dat: SetStateAction<undefined>) => {
        setDatos(dat)
        setIsOpen(true)
    }
    //**********************************Consulta a base de datos******************************************

    return (
        <>
            {
                isOpen && (
                    <VerMasProducto data={datos} setIsOpen={setIsOpen} />
                )
            }
            <Tablev2
                headers={headers}
                data={data}
                titleTable={titleTable}
                fnClick={vermas}
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