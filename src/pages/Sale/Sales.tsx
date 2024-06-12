import SectionComponent from "../../Components/Section/SectionComponent.tsx";
import { useEffect, useState } from "react";
import { HeadType } from "../../Components/Table/types/HeadType.ts";
import { ListaVentas } from "../../services/Sales/ListaVentaServices.ts";
import ShowInfoComponent from "../../Components/Section/ShowInfo/ShowInfoComponent.tsx";
import ModalComponent from "../../Components/Modal/ModalComponent/ModalComponent.tsx";

export const Sales = () => {
    const [data, setOrg] = useState<[]>([])
    const [datos, setDatos] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const headers: HeadType[] = [
        { name: "N° Factura", prop: "number_bill" },
        { name: "Cliente", prop: "client_id" },
        { name: "Fecha", prop: "date" },
        { name: "Total", prop: "total" },
    ]

    useEffect(() => {
        lista()
    }, [currentPage])

    const lista = async () => {
        try {
            setLoading(true)
            const { meta, sales } = await ListaVentas(currentPage)
            setOrg(sales)
            setTotalPages(meta.last_page || meta.lastPage)
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
                title="Ventas"
                url="/addventas"
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