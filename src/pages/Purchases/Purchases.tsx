import { TablasCompras } from "../../Components/TablasDatos/TablaCompras"
import SectionComponent from "../../Components/Section/SectionComponent.tsx";

export default function Purchases() {
    return (
        <>
            <SectionComponent
                title="Compras"
                url="/addcompras"
            >
                <TablasCompras />
            </SectionComponent>
        </>
    )
}
