import { useEffect, useState } from 'react'
import ModalComponent from '../../Modal/ModalComponent/ModalComponent'
import InputsForm from '../../Forms/InputsComponents/InputsForm'
import ButtonForm from '../../Forms/ButtonComponents/ButtonForm'
import SelectInputSale from './SelectInputSale/SelectInputSale'
import InfoSaleSelected from './InfoSaleSelected/InfoSaleSelected'
import { ModalSaleProps } from './ModalSalePropsType'
import { InputSale } from '../../../types/SaleTypes/InputSale'
import { listaEntradas, } from '../../../services/Purchase/ListaEntradaCompra'
import { listaProductoTerminado } from '../../../services/Products/ListaInventarioPTServices'
import { inven, inventario } from '../../types.d'

export default function ModalSale({ isModalOpen, toggleModal, fnAddDetailsSale }: ModalSaleProps) {

    const [Quantity, setQuantity] = useState<string>('')
    const [UnitPrice, setUnitPrice] = useState<string>('')
    const [ItemsSelected, setItemsSelected] = useState<InputSale[]>([])
    const [productos, setProduct] = useState<inventario[]>([])
    const [formProducto, setFormProduct] = useState<inven>({ stock_min: 0, unit_of_measurement: "", code: "", description: "", id: 0, name: "" })
    const [DataInput, setDataInput] = useState<InputSale[]>([])

    useEffect(() => {
        const lista = async () => {
            try {
                // const { links, meta, inventario } = await listaProductoTerminado()
                const { inventario } = await listaProductoTerminado()

                setProduct(inventario)
            } catch (e) {
                console.log(e)
            }
        }
        lista()
    }, [])


    const listaEntrada = async () => {
        try {
            const response = await listaEntradas(formProducto.id.toString())
            setDataInput(response.entradas)
        } catch (e) {

        }
    }

    const handleOnClickInput = (data: InputSale) => {
        setItemsSelected([data])
    }

    const handleDeleteInput = () => {
        setItemsSelected([])
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormProduct((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmition = () => {
        if (Quantity != '' && UnitPrice != '' && ItemsSelected.length != 0) {
            const data = {
                'quantity': parseInt(Quantity),
                'price': parseInt(UnitPrice),
                'product_input': ItemsSelected[0],
            }
            console.log(data)
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
                    <div className="flex justify-center items-center flex-col p-2">
                        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="id">Productos *</label>
                        <select onChange={handleSelectChange} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="id" id="id" value={formProducto.id}>
                            <option value="">Selecciona el producto</option>
                            {
                                productos.map(pro => (
                                    <option value={pro.id}>{pro.product.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </section>
                <section className='md:col-span-4 col-span-12 grid items-end p-2'>
                    <button className='bg-blue-600 h-10 px-8 text-white font-semibold rounded-md' onClick={() => listaEntrada()}> Buscar</button>
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
                        'value': Quantity,
                        'fnChange': setQuantity,
                        isRequire: true
                    }} />
                </section>
                <section className='md:col-span-6 col-span-12'>
                    <InputsForm DataInputs={{
                        'title': 'Precio unitario',
                        'type': 'number',
                        'placeholder': 'Ingrese el precio unitario',
                        'name': 'precio_unitario',
                        'value': UnitPrice,
                        'fnChange': setUnitPrice,
                        isRequire: true
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
        </ModalComponent >
    )
}
