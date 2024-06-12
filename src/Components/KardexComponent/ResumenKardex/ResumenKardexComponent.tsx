import BoxShowInformationComponent from "../BoxShowInformation/BoxShowInformationComponent.tsx";

export default function ResumenKardexComponent() {
    return (
        <div className={"w-full bg-zinc-100 rounded-md p-4 gap-4 flex flex-col justify-start items-start"}>
            <h3 className="text-xl font-bold">Resumen de Inventario</h3>
            <div className={"w-full grid md:grid-cols-4 grid-cols-2 gap-4"}>
                <BoxShowInformationComponent title={"Total de Entradas"} value={"100"} />
                <BoxShowInformationComponent title={"Total de Salidas"} value={"10"} />
                <BoxShowInformationComponent title={"Saldo Actual"} value={"1000"} />
                <BoxShowInformationComponent title={"Valor Total"} value={"C$ 6584.00"} />
            </div>
        </div>
    )
}