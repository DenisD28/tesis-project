import { useState, FormEvent } from "react";
import { dataProduct } from "../../types/ProductTypes/dataProduct";

export function useRegisterPurchase() {
    const [numberBill, setNumberBill] = useState('')
    const [provider, setProvider] = useState('')
    const [statusInfo, setStatusInfo] = useState(true)
    const [total, setTotal] = useState(0)
    const [products, setProducts] = useState<dataProduct[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>, infoNumberBill: string, infoProvider: string) => {
        e.preventDefault()
        if(infoNumberBill !== '' && infoProvider !== ''){
            setNumberBill(infoNumberBill)
            setProvider(infoProvider)
            setStatusInfo(false)
        }
    }

    const addProduct = (data: dataProduct) => {
        setProducts([...products, data])
        setTotal(total + data.total)
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const deleteProduct = (data: dataProduct) => {
        let newProducts = products.filter((item: dataProduct) => {
            if(item === data){
                setTotal(total - item.total)
            }
            return item !== data
        })
        setProducts(newProducts)
    }
    return {
        total,
        products,
        isModalOpen,
        numberBill,
        provider,
        statusInfo,
        addProduct,
        toggleModal,
        deleteProduct,
        handleSubmit,
    }
}