import { useEffect, useState } from 'react'
import ModalComponent from '../../Modal/ModalComponent/ModalComponent'
import InputsForm from '../../Forms/InputsComponents/InputsForm'
import ButtonForm from '../../Forms/ButtonComponents/ButtonForm'
import SelectInputSale from './SelectInputSale/SelectInputSale'
import InfoSaleSelected from './InfoSaleSelected/InfoSaleSelected'
import { ModalSaleProps } from './ModalSalePropsType'
import { inven, inventario, purchase } from '../../types.d'
import { listaInventario } from '../../../services/Products/ListaInventariosMPServices'
import { listaDetalleCompra } from '../../../services/Purchase/ListaDetalleCompraServices'
import { InputPurcharse } from '../../../types/PurchaseTypes/InputPurcharse'

export default function ModalPurcharseDetail({ DataPurcharse, setDetalle, isModalOpen, toggleModal, fnAddDetailsSale }: ModalSaleProps) {

    const [Quantity, setQuantity] = useState<string>('')
    const [ItemsSelected, setItemsSelected] = useState<InputPurcharse[]>([])
    const [productos, setProduct] = useState<inventario[]>([])
    const [formProducto, setFormProduct] = useState<inven>({ stock_min: 0, unit_of_measurement: "", code: "", description: "", id: 0, name: "" })
    // const [DataPurcharse, setDetalle] = useState<purchase[]>([])
    useEffect(() => {
        const lista = async () => {
            try {
                // const { links, meta, inventario } = await listaProductoTerminado()
                const { inventario } = await listaInventario(1)

                setProduct(inventario)
            } catch (e) {
                console.log(e)
            }
        }
        lista()
    }, [])


    const listaCompras = async (id: number) => {
        try {
            const response = await listaDetalleCompra(id)
            setDetalle(response.detalles_de_compra)

        } catch (e) {
            // console.log(e)
        }
    }

    const handleOnClickInput = (data: InputPurcharse) => {
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
        if (Quantity != '' && ItemsSelected.length != 0) {
            const data = {
                'detail_purchase_id': ItemsSelected[0].id,
                'quantity': parseInt(Quantity),
                'observation': "test",
            }
            fnAddDetailsSale(data)
            toggleModal()
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
                                    <option key={pro.product.id} value={pro.product.id}>{pro.product.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </section>
                <section className='md:col-span-4 col-span-12 grid items-end p-2'>
                    <button className='bg-blue-600 h-10 px-8 text-white font-semibold rounded-md' onClick={() => listaCompras(formProducto.id)}> Buscar</button>
                </section>
                {
                    ItemsSelected.length == 0
                        ? <SelectInputSale handleOnClickInput={handleOnClickInput} DataInput={DataPurcharse} />
                        : <InfoSaleSelected Data={ItemsSelected[0]} fnDeleteInput={handleDeleteInput} />
                }
                <section className='md:col-span-6 col-span-12'>
                    <InputsForm DataInputs={{
                        'title': 'Cantidad Utilizada',
                        'type': 'number',
                        'placeholder': 'Ingrese la cantidad',
                        'name': 'cantidad',
                        'value': Quantity,
                        'fnChange': setQuantity,
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
