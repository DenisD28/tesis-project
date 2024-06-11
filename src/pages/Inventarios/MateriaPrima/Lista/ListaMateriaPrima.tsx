import { Tablas } from "../../../../Components/TablasDatos/TablasMateriaPrima"
import SectionComponent from "../../../../Components/Section/SectionComponent.tsx";

export const Inventarios = () => {
    return (
        <>
            <SectionComponent
                title="Materia Prima"
                url="/IngresoInventarioMP"
            >
                <Tablas />
            </SectionComponent>
        </>
    )
}