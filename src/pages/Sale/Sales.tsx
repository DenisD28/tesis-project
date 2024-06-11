import { TablasVentas } from "../../Components/TablasDatos/TablaVentas.tsx";
import SectionComponent from "../../Components/Section/SectionComponent.tsx";

export const Sales = () => {
    return (
        <>
            <SectionComponent
                title="Ventas"
                url="/addventas"
            >
                <TablasVentas />
            </SectionComponent>
        </>
    )
}