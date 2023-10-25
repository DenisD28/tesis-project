import { useState } from 'react';
import { purchase } from '../../../Components/types.d';

function useAddProduct() {
    const [Cliente, setCliente] = useState('')
    const [NumeroFactura, setNumeroFactura] = useState('')
    const [TipoPago, setTipoPago] = useState('')
    const [Nota, setNota] = useState('')
    const [PaymentStatus, setPaymentStatus] = useState('')
    const [StatusFormPT, setStatusFormPT] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [DetailsPurchase, setDetailsPurchase] = useState<purchase[]>([])
    const [Total, setTotal] = useState(0)

    const HandleNextOperation = () => {
        TipoPago === 'Contado' ? setPaymentStatus('cancelado') : setPaymentStatus('pendiente')
        if (Cliente !== '' && NumeroFactura !== '' && TipoPago !== '') {
            TipoPago === 'Contado' ? setPaymentStatus('cancelado') : setPaymentStatus('pendiente')
            setStatusFormPT(true)
        }
    }

    // const AddDetailsSale = (data: purchase) => {
    //     setDetailsSale([...DetailsSale, data])
    //     setTotal(Total + (data.cantidad * data.precio))
    // }

    // const DeleteDetailsSale = (data: purchase) => {
    //     setDetailsSale(DetailsSale.filter((item) => item !== data))
    //     setTotal(Total - (data.cantidad * data.precio))
    // }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return {
        Cliente,
        NumeroFactura,
        TipoPago,
        Nota,
        PaymentStatus,
        StatusFormPT,
        isModalOpen,
        DetailsPurchase,
        Total,
        setCliente,
        setNumeroFactura,
        setTipoPago,
        setNota,
        HandleNextOperation,
        AddDetailsSale,
        DeleteDetailsSale,
        toggleModal,
    };
}

export default useAddProduct;