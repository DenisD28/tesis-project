import { TablasProveedores } from "../../Components/TablasDatos/TablaProveedores"
import SectionComponent from "../../Components/Section/SectionComponent.tsx";

export const Proveedores = () => {
    return (
        <>
            <SectionComponent
                title="Proveedores"
                url="/addproveedores"
            >
                <TablasProveedores />
            </SectionComponent>
        </>
    )
}