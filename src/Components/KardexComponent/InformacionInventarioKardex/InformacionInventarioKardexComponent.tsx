import BoxShowInformationComponent from "../BoxShowInformation/BoxShowInformationComponent.tsx";

export default function InformacionInventarioKardexComponent() {
    return (
        <div className={"w-full bg-zinc-100 rounded-md p-4 gap-4 flex flex-col justify-start items-start"}>
            <div className="flex items-center justify-between w-full">
                <h3 className="text-xl font-bold">Informaci&oacute;n de Inventario</h3>
            </div>
            <div className={"w-full grid md:grid-cols-3 grid-cols-2 gap-4"}>
                <BoxShowInformationComponent title={"Codigo de Inventario"} value={"0-B150"} />
                <BoxShowInformationComponent title={"Producto"} value={"Pan de avena"} />
                <BoxShowInformationComponent title={"Tipo de Producto"} value={"Materia Prima"} />
                <BoxShowInformationComponent title={"Unidad de Medida"} value={"lb (libras)"} />
                <BoxShowInformationComponent title={"Ubicacion"} value={"Estante 3"} />
                <BoxShowInformationComponent title={"Numero de Lote"} value={"N/A"} />
            </div>
        </div>
    )
}