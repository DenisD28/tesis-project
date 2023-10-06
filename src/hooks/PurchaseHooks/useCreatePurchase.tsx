import { RegisterPurchase } from '../../services/Purchase/RegisterPurchaseServices';
import { useNavigate } from 'react-router-dom';
import { RegisterPurchaseProps } from '../../types/PurchaseTypes/RegisterPurchaseProps';

const useCreatePurchase = ({numberBill, provider_id, products}: RegisterPurchaseProps) => {
    let state = { purchase: [], message: [], estado: [] }
    const Navigate = useNavigate()

    const SendPurchase = async () => {
        try {
            const { purchase, message, estado } = await RegisterPurchase({numberBill, provider_id, products})
            state = ({
                purchase,
                message,
                estado
            })
            Navigate('/compras')
        } catch (e) {
            console.log(e)
        }
    }

    return {
        SendPurchase,
    };
};

export default useCreatePurchase;