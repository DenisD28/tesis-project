import ModalComponent from '../../Modal/ModalComponent/ModalComponent'
import InputsForm from '../../Forms/InputsComponents/InputsForm'
import TextareaForm from '../../Forms/TextareaComponents/TextareaForm'
import SelectForm from '../../Forms/SelectComponents/SelectForm'
import ButtonForm from '../../Forms/ButtonComponents/ButtonForm'
import { ModalPurchasesProps } from './ModalPurchaseProps'
import { ProductsForInventory } from '../../../types/InventoryTypes/ProductsTypes'
import useListProductsInventory from '../../../hooks/PurchaseHooks/useListProductsInventory'
import useAddProductsPurchase from '../../../hooks/PurchaseHooks/useAddProductsPurchase'

export default function ModalPurchases({ isModalOpen, toggleModal, handleSubmition }: ModalPurchasesProps) {
    const { ListProduct } = useListProductsInventory()
    const { setIdProduct, quantity, setQuantity, unitPrice, setUnitPrice, observation, setObservation, createProduct } = useAddProductsPurchase({ handleSubmition, ListProduct, toggleModal })

    return (
        <ModalComponent isOpen={isModalOpen} onClose={toggleModal}>
            <main className='grid grid-cols-12 mx-4'>
                <section className='col-span-12 grid grid-cols-12 gap-2'>
                    <div className='col-span-12'>
                        <h1 className='text-lg font-medium text-[#999]'>Buscar producto</h1>
                    </div>
                    <div className='col-span-12'>
                        <SelectForm dataSelect={{
                            'title': 'Producto',
                            'name': 'producto',
                            'placeholder': 'Seleccione el producto',
                            'options': ListProduct.map((item: ProductsForInventory) => {
                                return {
                                    'valor': item.id_product,
                                    'texto': item.name_product
                                }
                            }),
                            'fnChange': setIdProduct,
                            'isRequerid': true
                        }} />
                    </div>
                    <div className='col-span-6'>
                        <InputsForm DataInputs={{
                            'title': 'Cantidad',
                            'type': 'number',
                            'placeholder': 'Ingrese la cantidad',
                            'name': 'cantidad',
                            'value': quantity!,
                            'fnChange': setQuantity,
                            isRequire: true
                        }} />
                    </div>
                    <div className='col-span-6'>
                        <InputsForm DataInputs={{
                            'title': 'Precio unitario',
                            'type': 'number',
                            'placeholder': 'Ingrese el precio unitario',
                            'name': 'precio_unitario',
                            'value': unitPrice!,
                            'fnChange': setUnitPrice,
                            isRequire: true
                        }} />
                    </div>
                    <div className='col-span-12'>
                        <TextareaForm dataTextarea={{
                            'title': 'Observacion',
                            'name': 'observacion',
                            'placeholder': 'Ingrese la observacion',
                            'value': observation!,
                            'fnChange': setObservation,
                        }} />
                    </div>
                    <div className='col-span-12'>
                        <ButtonForm dataButton={{
                            'title': 'Agregar producto',
                            'type': 'submit',
                            'color': 'green',
                            'fnClick': createProduct,
                        }} />
                    </div>
                </section>
            </main>
        </ModalComponent>
    )
}
