import {TablasProductos} from "../../Components/TablasDatos/TablaProductos.tsx";
import SectionComponent from "../../Components/Section/SectionComponent.tsx";

export default function Catalogo () {
    return (
        <SectionComponent
            title="Catalogo de productos"
            url=""
            showButtonAdd={false}
        >
            <TablasProductos />
        </SectionComponent>
    )
}