import toast, { Toaster } from "react-hot-toast"
import SectionComponent from "../../../Components/Section/SectionComponent"
import useAddProduccion from "../../../hooks/Produccion/useAddProduccion"
import { agregarProductoTerminado } from "../../../services/Products/AddProductoTerminadoServices"
import FormProd from "../../../Components/Produccion/FormProd/FormProd"
import GeneralInfoProd from "../../../Components/Produccion/GeneralInfoProd/GeneralInfoProd"
import ModalSale from "../../../Components/Produccion/ModalProd/ModalPurcharseDetail"
import InfoProd from "../../../Components/Produccion/InfoProduct/InfoProd"

export const AddProduccion: React.FC = () => {

    const {
        inventory_id,
        quantity,
        list,
        StatusFormPT,
        isModalOpen,
        DetailsSale,
        setInventoryId,
        setQuatity,
        setLista,
        HandleNextOperation,
        toggleModal,
        AddDetailsSale,
        DeleteDetailsSale
    } = useAddProduccion()

    const registrar = async () => {
        try {
            const response = await agregarProductoTerminado(inventory_id, JSON.stringify(list), quantity)
            if (response.status === 200) {
                toast.success("Venta Registrada")
            }
        } catch (e: any) {
            console.log(e)
            toast.error(e.response.data.error)
        }
    }

    return (<>
        <SectionComponent
            title="Producto Terminado"
            url="/addinventary"
            showButtonAdd={false} >
            <div> <Toaster /></div >
            {
                !StatusFormPT
                    ? <FormProd setCodigo={setInventoryId} HandleNextOperation={HandleNextOperation} />
                    : <GeneralInfoProd Codigo={inventory_id} />
            }
            {
                StatusFormPT && <InfoProd fnClick={toggleModal} Data={DetailsSale} fnDeleteDetailsSale={DeleteDetailsSale} />
            }
            {
                isModalOpen && <ModalSale isModalOpen={isModalOpen} toggleModal={toggleModal} fnAddDetailsSale={AddDetailsSale} />
            }

        </SectionComponent >
    </>
    )
}