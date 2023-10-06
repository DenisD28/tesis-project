import { useState } from 'react';
import { ProductsForInventory } from '../../types/InventoryTypes/ProductsTypes';
import { useAddProductsPurchaseProps } from '../../types/PurchaseTypes/useAddProductsPurchaseProps';

const useAddProductsPurchase = ({handleSubmition, ListProduct, toggleModal}: useAddProductsPurchaseProps) => {
    const [IdProduct, setIdProduct] = useState("")
    const [quantity, setQuantity] = useState("")
    const [unitPrice, setUnitPrice] = useState("")
    const [observation, setObservation] = useState("")

    let createProduct = () => {
        handleSubmition({
            'id': parseInt(IdProduct!),
            'name': ListProduct.find((item: ProductsForInventory) => item.id_product === parseInt(IdProduct!))?.name_product!,
            'quantity': parseFloat(quantity!),
            'unit_price': parseFloat(unitPrice!),
            'observation': observation!,
            'total': parseFloat(quantity!) * parseFloat(unitPrice!),
        })
        toggleModal()
    }

    return {
        setIdProduct,
        quantity,
        setQuantity,
        unitPrice,
        setUnitPrice,
        observation,
        setObservation,
        createProduct,
    };
};

export default useAddProductsPurchase;