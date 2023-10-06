import ModalPurchases from './ModalPurchases/ModalPurchases';
import { useRegisterPurchase } from '../../hooks/PurchaseHooks/useRegisterPurchase';
import InfoPurchase from './SectionsPurchase/InfoPurchase/InfoPurchase';
import InsertionProducts from './SectionsPurchase/InsertionProducts/InsertionProducts';
import ConfirmPurchase from './ConfirmPurchase/ConfirmPurchase';
import useCreatePurchase from '../../hooks/PurchaseHooks/useCreatePurchase';

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

    const { SendPurchase } = useCreatePurchase({
        numberBill,
        provider_id: parseInt(provider),
        products
    })

  return (
    <>
      <h1 className=' text-purple-icons font-bold text-2xl'>Registro de compra</h1>
      {/* Informacion de la compra */}
      <InfoPurchase statusInfo={statusInfo} provider={provider} numberBill={numberBill} handleSubmit={handleSubmit} />
      {
        statusInfo === false 
        && (
          <>
            {/* Registro de productos */}
            <InsertionProducts products={products} toggleModal={toggleModal} deleteProduct={deleteProduct} />
            {/* Modal */}
            {
              isModalOpen && <ModalPurchases isModalOpen={isModalOpen} toggleModal={toggleModal} 
              handleSubmition={addProduct} />
            }
            {
                products.length > 0 
                && <ConfirmPurchase total={total} SendPurchase={SendPurchase} />
            }
          </>
        )
      }
    </>
  )
}
