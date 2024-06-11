import { TablasUsuarios } from "../../Components/TablasDatos/TablaUsuarios"
import SectionComponent from "../../Components/Section/SectionComponent.tsx";

export const Usuarios = () => {
    return (
        <>
            <SectionComponent
                title="Usuarios"
                url="/addusuarios"
            >
                <TablasUsuarios />
            </SectionComponent>
        </>
    )
}