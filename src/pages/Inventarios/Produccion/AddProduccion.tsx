import toast, { Toaster } from "react-hot-toast"
import SectionComponent from "../../../Components/Section/SectionComponent"
import useAddProduccion from "../../../hooks/Produccion/useAddProduccion"
import { agregarProductoTerminado } from "../../../services/Products/AddProductoTerminadoServices"
import FormProd from "../../../Components/Produccion/FormProd/FormProd"
import GeneralInfoProd from "../../../Components/Produccion/GeneralInfoProd/GeneralInfoProd"
import ModalSale from "../../../Components/Produccion/ModalProd/ModalPurcharseDetail"
import InfoProd from "../../../Components/Produccion/InfoProduct/InfoProd"
import ConfirmProduccion from "../../../Components/Produccion/ConfirmProduccion/ConfirmProduccion"
import { useNavigate } from "react-router-dom"

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

    const navigate = useNavigate()
    const registrar = async () => {
        try {
            // console.log("inventory_id " + inventory_id)
            // console.log("cantidad " + quantity)
            // console.log("DetailsSale " + JSON.stringify(DetailsSale))

            const response = await agregarProductoTerminado(inventory_id, JSON.stringify(list), quantity)
            if (response.status === 201) {
                toast.success("Producto Registrado")
                navigate("/ListaInventarioPT")
            }
        } catch (e: any) {
            console.log(e)
            toast.error(e.response.data.error)
        }
    }
    return (<>
        <SectionComponent
            title="Registro de Produccion"
            url="/addinventary"
            showButtonAdd={false} >
            <div> <Toaster /></div >
            {
                !StatusFormPT
                    ? <FormProd setCodigo={setInventoryId} HandleNextOperation={HandleNextOperation} />
                    : <GeneralInfoProd Codigo={inventory_id} cant={quantity} Cantidad={setQuatity} />
            }
            {
                StatusFormPT && <InfoProd DataPurcharse={list} fnClick={toggleModal} Data={DetailsSale} fnDeleteDetailsSale={DeleteDetailsSale} />
            }
            {
                isModalOpen && <ModalSale DataPurcharse={list} setDetalle={setLista} isModalOpen={isModalOpen} toggleModal={toggleModal} fnAddDetailsSale={AddDetailsSale} />
            }
            {

                DetailsSale.length > 0
                && <ConfirmProduccion SendPurchase={registrar} />
            }
        </SectionComponent >
    </>
    )
}