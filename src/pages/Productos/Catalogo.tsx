import SectionComponent from "../../Components/Section/SectionComponent.tsx";
import { useEffect, useState } from "react";
import { HeadType } from "../../Components/Table/types/HeadType.ts";
import ShowInfoComponent from "../../Components/Section/ShowInfo/ShowInfoComponent.tsx";
import { ListaProductos } from "../../services/Products/ListaProductosServices.ts";
import ModalComponent from "../../Components/Modal/ModalComponent/ModalComponent.tsx";

export default function Catalogo() {
    const [data, setOrg] = useState<[]>([])
    const [datos, setDatos] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const headers: HeadType[] = [
        { name: "Codigo", prop: "id" },
        { name: "Nombre", prop: "name" },
        { name: "Unidad de medida", prop: "measurement_type" },
    ]

    useEffect(() => {
        lista()
    }, [currentPage])

    const lista = async () => {
        try {
            setLoading(true)
            const { products, meta } = await ListaProductos(currentPage)
            setOrg(products)
            setTotalPages(meta.last_page)
            setLoading(false)
        } catch (e) {
            // console.log(e)
        }
    }

    return (
        <>
            {
                isOpen && (
                    <ModalComponent
                        isOpen={isOpen}
                        onClose={() => { setIsOpen(false) }}
                    >
                        <div>
                            <p>test</p>
                        </div>
                    </ModalComponent>
                )
            }
            <SectionComponent
                title="Catalogo de productos"
                url=""
                showButtonAdd={false}
            >
                <ShowInfoComponent
                    headers={headers}
                    data={data}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    loading={loading}
                    setCurrentPage={setCurrentPage}
                    setData={setDatos}
                    setIsOpen={setIsOpen}
                />
            </SectionComponent>
        </>
    )
}