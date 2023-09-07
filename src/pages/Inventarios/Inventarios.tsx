import { Tablas } from "../../Components/TablasDatos/TablasMateriaPrima"
import { Aside } from "../../routes/aside"

export const Inventarios = () => {
    return (
        <>
            <div className="container">
                <div>
                    <Aside />
                </div>
                <div>
                    <Tablas />
                </div>
            </div>
        </>
    )
}