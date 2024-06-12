import SectionComponent from "../../../Components/Section/SectionComponent.tsx";
import KardexComponent from "../../../Components/KardexComponent/KardexComponent.tsx";

export default function KardexPage() {
    return (
        <SectionComponent
            title={""}
            url={""}
            showButtonAdd={false}
        >
            <KardexComponent />
        </SectionComponent>
    )
}