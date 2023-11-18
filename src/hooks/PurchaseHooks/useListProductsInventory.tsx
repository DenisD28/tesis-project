import { useState, useEffect } from 'react';
import { ProductsForInventory } from '../../types/InventoryTypes/ProductsTypes';
import { SearchProductInTheInventory } from '../../services/Purchase/AddPurchaseServices';

const useListProductsInventory = () => {
    const [ListProduct, setListProduct] = useState<ProductsForInventory[]>([])

    useEffect(() => {
        lista()
    }, [])

    const lista = async () => {
        try {
            // const { inventario, mensaje, estado } = await SearchProductInTheInventory("MP")
            const { inventario } = await SearchProductInTheInventory("MP")

            setListProduct(inventario)
        } catch (e) {
            console.log(e)
        }
    }

    return {
        ListProduct,
    };
};

export default useListProductsInventory;