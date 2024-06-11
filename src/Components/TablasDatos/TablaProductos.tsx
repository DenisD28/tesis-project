import "../../css/App.css"
import { SetStateAction, useEffect, useState } from "react"
import { HeadType } from "../Table/types/HeadType"
import { VerMasProducto } from "../VerMas/VerMasProducto"
import { Tablev2 } from "../Tablev2/Tablev2"
import { ListaProductos } from "../../services/Products/ListaProductosServices"
import PaginationComponent from "../Pagination/PaginationComponent.tsx";

const headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "name" },
    { name: "Unidad de medida", prop: "measurement_type" },
]

export const TablasProductos: React.FC = () => {

    //**********************************Consulta a base de datos******************************************
    const [data, setProduct] = useState()
    const [datos, setDatos] = useState()
    const [isOpen, setIsOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        lista();
    }, [currentPage])

    const lista = async () => {
        try {
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
                fnClick={vermas}
            />
            <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    )
}