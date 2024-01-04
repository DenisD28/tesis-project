import { inven } from "../../../Components/types.d"
import { agregarInventario } from "../../../services/Products/AddInventarioMPServices"
import { useNavigate } from "react-router-dom"

interface Props {
    infoProducto: inven
}

export default function UseAddInventario({ infoProducto }: Props) {
    const navigate = useNavigate();

    let registro = async () => {
        const response = await agregarInventario(infoProducto)

        if (response.status === 201) {
            navigate("/inventario")
        }
    }

    return (
        registro
    )
}