import {useState} from 'react'
import ModalComponent from '../../Modal/ModalComponent/ModalComponent'
import InputsForm from '../../Forms/InputsComponents/InputsForm'
import TextareaForm from '../../Forms/TextareaComponents/TextareaForm'
import SelectForm from '../../Forms/SelectComponents/SelectForm'
import ButtonForm from '../../Forms/ButtonComponents/ButtonForm'
import { ModalPurchasesProps } from './ModalPurchaseProps'

export default function ModalPurchases({isModalOpen, toggleModal, handleSubmition}: ModalPurchasesProps) {
    const [IdProduct, setIdProduct] = useState("")
    const [quantity, setQuantity] = useState("")
    const [unitPrice, setUnitPrice] = useState("")
    const [observation, setObservation] = useState("")

    let createProduct = () => {
        handleSubmition({
            'id': parseInt(IdProduct!),
            'name': 'Producto 1',
            'quantity': parseFloat(quantity!),
            'unit_price': parseFloat(unitPrice!),
            'observation': observation!,
            'total': parseFloat(quantity!) * parseFloat(unitPrice!),
        })
        toggleModal()
    }
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
                            'options': [
                                {'valor': '1', 'texto': 'Producto 1'},
                                {'valor': '2', 'texto': 'Producto 2'},
                                {'valor': '3', 'texto': 'Producto 3'},
                                {'valor': '4', 'texto': 'Producto 4'},
                                {'valor': '5', 'texto': 'Producto 5'},
                                {'valor': '6', 'texto': 'Producto 6'},
                                {'valor': '7', 'texto': 'Producto 7'},
                                {'valor': '8', 'texto': 'Producto 8'},
                            ],
                            'fnChange': setIdProduct,
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
