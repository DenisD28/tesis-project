import RegisterPurchases from "../../Components/Purchases/RegisterPurchases"

export default function AddPurchases() {
    return (
        <>
            <main className="w-full h-screen flex justify-between items-start flex-col">
                <div className="w-full h-full flex justify-start items-start overflow-y-auto gap-1">
                    <div className="w-full h-full bg-white overflow-y-scroll scroll-hidden">
                        <div className="div-dashboard">
                            <div className="contenido">
                                <RegisterPurchases />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
