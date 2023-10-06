import { useState, useEffect } from 'react';
import { ProductsForInventory } from '../../types/InventoryTypes/ProductsTypes';
import { SearchProductInTheInventory } from '../../services/Purchase/AddPurchaseServices';

const useListProductsInventory = () => {
    const [ListProduct, setListProduct] = useState<ProductsForInventory[]>([])
    let state = { inventario: [], mensaje: [], estado: [] }

    useEffect(() => {
        lista()
    }, [])

    const lista = async () => {
        try {
            const { inventario, mensaje, estado } = await SearchProductInTheInventory("MP")
            state = ({
                inventario,
                mensaje,
                estado
            })
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