import {useState} from 'react'
import ModalComponent from '../../Modal/ModalComponent/ModalComponent'
import InputsForm from '../../Forms/InputsComponents/InputsForm'
import ButtonForm from '../../Forms/ButtonComponents/ButtonForm'
import SelectForm from '../../Forms/SelectComponents/SelectForm'
import SelectInputSale from './SelectInputSale/SelectInputSale'
import InfoSaleSelected from './InfoSaleSelected/InfoSaleSelected'
import { ModalSaleProps } from './ModalSalePropsType'
import { InputSale } from '../../../types/SaleTypes/InputSale'

export default function ModalSale({isModalOpen, toggleModal, fnAddDetailsSale}: ModalSaleProps) {
    const [Quantity, setQuantity] = useState<string>('')
    const [UnitPrice, setUnitPrice] = useState<string>('')
    const [ItemsSelected, setItemsSelected] = useState<InputSale[]>([])
    const [DataInput, setDataInput] = useState<InputSale[]>([
        {
            'id': 1,
            'produccion': 50,
            'disponibilidad': 20,
            'costo': 100,
            'fecha': '15-09-2023',
        },
        {
            'id': 2,
            'produccion': 100,
            'disponibilidad': 20,
            'costo': 1000,
            'fecha': '21-09-2023',
        },
    ])

    const handleOnClickInput = (data: InputSale) => {
        setItemsSelected([data])
    }

    const handleDeleteInput = () => {
        setItemsSelected([])
    }

    const handleSubmition = () => {
        if(Quantity != '' && UnitPrice != '' && ItemsSelected.length != 0) {
            const data = {
                'cantidad': parseInt(Quantity),
                'precio': parseInt(UnitPrice),
                'product_input': ItemsSelected[0],
            }
            fnAddDetailsSale(data)
            toggleModal()
            console.log(data)
        }
    }

    return (
    <ModalComponent isOpen={isModalOpen} onClose={toggleModal}>
        <h1 className=' text-purple-icons font-bold text-2xl mb-8 px-2'>Buscar producto</h1>
        <article className='grid grid-cols-12'>
            <section className='md:col-span-8 col-span-12'>
                <SelectForm dataSelect={{
                    'title': 'Producto',
                    'name': 'producto',
                    'placeholder': 'Seleccione el producto',
                    'options': [
                        { 'valor': '1', 'texto': 'Producto 1' },
                        { 'valor': '2', 'texto': 'Producto 2' },
                        { 'valor': '3', 'texto': 'Producto 3' },
                        { 'valor': '4', 'texto': 'Producto 4' },
                        { 'valor': '5', 'texto': 'Producto 5' },
                    ],
                    'fnChange': () => {},
                }} />
            </section>
            <section className='md:col-span-4 col-span-12 grid items-end p-2'>
                <button className='bg-blue-600 h-10 px-8 text-white font-semibold rounded-md'>Buscar</button>
            </section>
            {
                ItemsSelected.length == 0
                ? <SelectInputSale handleOnClickInput={handleOnClickInput} DataInput={DataInput} />
                : <InfoSaleSelected Data={ItemsSelected[0]} fnDeleteInput={handleDeleteInput} />
            }
            <section className='md:col-span-6 col-span-12'>
                <InputsForm DataInputs={{
                    'title': 'Cantidad',
                    'type': 'number',
                    'placeholder': 'Ingrese la cantidad',
                    'name': 'cantidad',
                    'value': '',
                    'fnChange': setQuantity,
                }} />
            </section>
            <section className='md:col-span-6 col-span-12'>
                <InputsForm DataInputs={{
                    'title': 'Precio unitario',
                    'type': 'number',
                    'placeholder': 'Ingrese el precio unitario',
                    'name': 'precio_unitario',
                    'value': '',
                    'fnChange': setUnitPrice,
                }} />
            </section>
            <section className='col-span-12'>
                <ButtonForm dataButton={{
                    'title': 'Agregar',
                    'type': 'submit',
                    'color': 'green',
                    'fnClick': handleSubmition,
                }} />
            </section>
        </article>
    </ModalComponent>
  )
}
