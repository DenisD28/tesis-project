import HeaderKardexComponent from "./HeaderKardex/HeaderKardexComponent.tsx";
import FooterKardexComponent from "./FooterKardex/FooterKardexComponent.tsx";
import ResumenKardexComponent from "./ResumenKardex/ResumenKardexComponent.tsx";
import InformacionInventarioKardexComponent from "./InformacionInventarioKardex/InformacionInventarioKardexComponent.tsx";
import TableKardexComponent from "./TableKardex/TableKardexComponent.tsx";

export default function KardexComponent() {
    return (
        <div className="mx-auto w-full max-w-[80rem] flex-col flex justify-center items-start">
            <HeaderKardexComponent />
            <div className="py-6 w-full flex flex-col gap-2">
                <InformacionInventarioKardexComponent />
                <ResumenKardexComponent />
                <TableKardexComponent />
            </div>
            <FooterKardexComponent />
        </div>
    )
}