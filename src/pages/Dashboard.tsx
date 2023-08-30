import { TablaProductoFaltante } from "../Components/TablasDatos/TablaProductoFaltante"
import { Aside } from "../routes/aside"

export const Dashboard = () => {
    return (<>
        <Aside />
        <TablaProductoFaltante />
    </>)
}