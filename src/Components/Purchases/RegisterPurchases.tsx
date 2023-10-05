import ModalPurchases from './ModalPurchases/ModalPurchases';
import { useRegisterPurchase } from '../../hooks/PurchaseHooks/useRegisterPurchase';
import InfoPurchase from './SectionsPurchase/InfoPurchase/InfoPurchase';
import InsertionProducts from './SectionsPurchase/InsertionProducts/InsertionProducts';

export default function RegisterPurchases() {
    const { total, 
        products, 
        isModalOpen, 
        numberBill, 
        provider, 
        statusInfo, 
        addProduct, 
        toggleModal, 
        deleteProduct, 
        handleSubmit
    } = useRegisterPurchase()

  return (
    <>
        <h1 className=' text-purple-icons font-bold text-2xl'>Registro de compra</h1>
        {/* Informacion de la compra */}
        <InfoPurchase statusInfo={statusInfo} provider={provider} numberBill={numberBill} total={total} handleSubmit={handleSubmit} />
        {/* Registro de productos */}
        <InsertionProducts products={products} toggleModal={toggleModal} deleteProduct={deleteProduct} />
        {/* Modal */}
        {
            isModalOpen && <ModalPurchases isModalOpen={isModalOpen} toggleModal={toggleModal} 
            handleSubmition={addProduct} />
        }
    </>
  )
}
