import { TablasCliente } from "../../Components/TablasDatos/TablaCliente"

export const Clientes = () => {
    return (
        <>
            <main className="w-full h-screen flex justify-between items-start flex-col">
                <div className="w-full h-full flex justify-start items-start overflow-y-auto gap-1">
                    <div className="w-full h-full bg-white overflow-y-scroll scroll-hidden">
                        <div className="div-dashboard">
                            <div className="contenido">
                                <TablasCliente />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}