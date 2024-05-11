import ButtonForm from "../Forms/ButtonComponents/ButtonForm";
import InputsForm from "../Forms/InputsComponents/InputsForm";

interface Props {
    setcantidades: React.Dispatch<React.SetStateAction<string>>
    cantidades: string
    setIsOpenForm: React.Dispatch<React.SetStateAction<boolean>>
    dato: any
    SeleccionarDetalle: (dato: any, cantidades: string) => void
}

export const ModalInput: React.FC<Props> = ({ setcantidades, cantidades, setIsOpenForm, dato, SeleccionarDetalle }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        SeleccionarDetalle(dato, cantidades)
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Cantidades utilizadas del producto
                            </h3>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <div className='px-8 rounded-xl bg-white md:h-50 h-80 overflow-y-auto hidden-scroll shadow-lg shadow-[#ddd] border-2'>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <InputsForm
                                            DataInputs={{
                                                name: "stock_min",
                                                title: "cantidad",
                                                value: cantidades || "",
                                                type: "number",
                                                placeholder: "Ingrese la cantidad",
                                                isRequire: true,
                                                isDisabled: false,
                                                fnChange: setcantidades,
                                            }}
                                        />
                                    </div>
                                    <div className="flex justify items-center justify-center">
                                        <ButtonForm dataButton={{
                                            'title': 'Cancelar',
                                            'color': 'red',
                                            'type': 'reset',
                                            'fnClick': () => { },
                                        }} />
                                        <ButtonForm dataButton={{
                                            'title': 'Guardar',
                                            'color': 'green',
                                            'type': 'submit',
                                            'fnClick': () => { }
                                        }} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setIsOpenForm(false)}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}