import InfoSale from '../../Components/Sale/InfoProduct/InfoSale'
import FormSale from '../../Components/Sale/FormSale/FormSale'
import ModalSale from '../../Components/Sale/ModalSale/ModalSale'
import GeneralInfoSale from '../../Components/Sale/GeneralInfoSale/GeneralInfoSale'
import ButtonForm from '../../Components/Forms/ButtonComponents/ButtonForm'
import useAddSale from '../../hooks/SaleHooks/useAddSale'
import toast, { Toaster } from 'react-hot-toast'
import { agregarVenta } from '../../services/Sales/AddVentaServices'
import { useNavigate } from 'react-router-dom'

export default function AddSale() {
    const { Cliente,
        NumeroFactura,
        TipoPago,
        Nota,
        PaymentStatus,
        StatusFormPT,
        isModalOpen,
        DetailsSale,
        Total,
        setCliente,
        setNumeroFactura,
        setTipoPago,
        setNota,
        HandleNextOperation,
        AddDetailsSale,
        DeleteDetailsSale,
        toggleModal,
    } = useAddSale()

    const navigate = useNavigate()

    const registrar = async () => {

        try {
            const response = await agregarVenta(DetailsSale, NumeroFactura, Nota, Cliente, TipoPago, PaymentStatus)
            console.log(response)
            if (response.status === 200) {
                toast.success("Venta Registrada")
                navigate("/ventas")
            }
        } catch (e: any) {
            console.log(e)
            toast.error(e.response.data.message)
        }

    }
    return (
        <main>
            <div> <Toaster /></div >
            <h1 className=' text-purple-icons font-bold text-2xl mb-8'>Registro de venta</h1>
            {
                !StatusFormPT
                    ? <FormSale setCliente={setCliente} setNumeroFactura={setNumeroFactura} setTipoPago={setTipoPago} setNota={setNota} HandleNextOperation={HandleNextOperation} NumeroFactura={NumeroFactura} Nota={Nota} />
                    : <GeneralInfoSale Cliente={Cliente} NumeroFactura={NumeroFactura} TipoPago={TipoPago} Nota={Nota} PaymentStatus={PaymentStatus} />
            }
            {
                StatusFormPT && <InfoSale fnClick={toggleModal} Data={DetailsSale} fnDeleteDetailsSale={DeleteDetailsSale} />
            }
            {
                isModalOpen && <ModalSale isModalOpen={isModalOpen} toggleModal={toggleModal} fnAddDetailsSale={AddDetailsSale} />
            }
            {
                DetailsSale.length !== 0 && <ButtonForm dataButton={{
                    'title': 'Registrar venta - C$' + Total.toFixed(2),
                    'type': 'button',
                    'color': 'green',
                    fnClick: () => { registrar() },
                }} />

            }
        </main>
    )
}
