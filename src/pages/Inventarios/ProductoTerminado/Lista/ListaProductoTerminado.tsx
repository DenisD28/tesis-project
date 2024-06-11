import { TablaProductoTerminado } from "../../../../Components/TablasDatos/TablaProductoTerminado"
import SectionComponent from "../../../../Components/Section/SectionComponent.tsx";

export const IngresoProductoTerminado: React.FC = () => {

    return (<>
        <SectionComponent
            title="Producto Terminado"
            url="/IngresoInventarioPT"
        >
            <TablaProductoTerminado />
        </SectionComponent>
    </>)
}