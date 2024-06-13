import { useState } from "react";
import { DetailsSale } from '../../types/SaleTypes/DetailsSale';

interface DetalleRegistro {
    detail_purchase_id: number
    quantity: string
    observation: string
}

function useAddProduccion() {
    const [inventory_id, setInventoryId] = useState('')
    const [quantity, setQuatity] = useState('')
    const [list, setLista] = useState<DetalleRegistro[]>([])
    const [StatusFormPT, setStatusFormPT] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [DetailsSale, setDetailsSale] = useState<DetailsSale[]>([])
    const [Total, setTotal] = useState(0)

    const HandleNextOperation = () => {
        if (inventory_id !== '') {
            setStatusFormPT(true)
        }
    }

    const AddDetailsSale = (data: DetailsSale) => {
        setDetailsSale([...DetailsSale, data])
        setTotal(Total + (data.quantity * data.price))
    }

    const DeleteDetailsSale = (data: DetailsSale) => {
        setDetailsSale(DetailsSale.filter((item) => item !== data))
        setTotal(Total - (data.quantity * data.price))
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return {
        inventory_id,
        quantity,
        list,
        StatusFormPT,
        isModalOpen,
        DetailsSale,
        setInventoryId,
        setQuatity,
        setLista,
        setStatusFormPT,
        HandleNextOperation,
        setIsModalOpen,
        toggleModal,
        AddDetailsSale,
        DeleteDetailsSale
    };
}

export default useAddProduccion;