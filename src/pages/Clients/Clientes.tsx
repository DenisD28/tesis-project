import { TablasCliente } from "../../Components/TablasDatos/TablaCliente"
import SectionComponent from "../../Components/Section/SectionComponent.tsx";

export const Clientes = () => {
    return (
        <>
            <SectionComponent
                title="Clientes"
                url="/addcliente"
            >
                <TablasCliente />
            </SectionComponent>
        </>
    )
}