import SectionComponent from "../../../../Components/Section/SectionComponent.tsx";
import { useEffect, useState } from "react";
import { HeadType } from "../../../../Components/Table/types/HeadType.ts";
import ShowInfoComponent from "../../../../Components/Section/ShowInfo/ShowInfoComponent.tsx";
import { VerMasProducto } from "../../../../Components/VerMas/VerMasProducto.tsx";
import { listaInventario } from "../../../../services/Products/ListaInventariosMPServices.ts";

export const Inventarios = () => {
    const [data, setOrg] = useState<[]>([])
    const [datos, setDatos] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const headers: HeadType[] = [
        { name: "Codigo", prop: "id" },
        { name: "Nombre", prop: "product" },
        { name: "Stock", prop: "stock" },
    ]

    useEffect(() => {
        lista()
    }, [currentPage])

    const lista = async () => {
        try {
            setLoading(true)
            const { meta, inventario } = await listaInventario(currentPage)
            setOrg(inventario)
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
                    <VerMasProducto data={datos} setIsOpen={setIsOpen} />
                )
            }
            <SectionComponent
                title="Materia Prima"
                url="/addinventary"
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