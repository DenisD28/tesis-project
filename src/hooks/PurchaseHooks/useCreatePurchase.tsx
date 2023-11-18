import { RegisterPurchase } from '../../services/Purchase/RegisterPurchaseServices';
import { useNavigate } from 'react-router-dom';
import { RegisterPurchaseProps } from '../../types/PurchaseTypes/RegisterPurchaseProps';

const useCreatePurchase = ({ numberBill, provider_id, products }: RegisterPurchaseProps) => {
    const Navigate = useNavigate()

    const SendPurchase = async () => {
        try {
            await RegisterPurchase({ numberBill, provider_id, products })

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