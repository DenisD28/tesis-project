import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import InputsForm from "../Forms/InputsComponents/InputsForm"
import SelectForm from "../Forms/SelectComponents/SelectForm"
import TextareaForm from "../Forms/TextareaComponents/TextareaForm"

export const FormAddProveedores = () => {
    return (
        <>
            <form action="" className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>
                <InputsForm DataInputs={{
                    'title': 'Nombre',
                    'type': 'text',
                    'name': 'nombre',
                    'placeholder': 'Escribe el nombre de la organizacion',
                    'value': '',
                    'fnChange': () => { },
                }} />
                <InputsForm DataInputs={{
                    'title': 'Telefono principal',
                    'type': 'text',
                    'name': 'telefono',
                    'placeholder': 'Escribe el telefono principal de la organizacion',
                    'value': '',
                    'fnChange': () => { },
                }} />
                <InputsForm DataInputs={{
                    'title': 'Telefono secundario',
                    'type': 'text',
                    'name': 'telefonoSecundario',
                    'placeholder': 'Escribe el telefono secundario de la organizacion',
                    'value': '',
                    'fnChange': () => { },
                }} />

                <SelectForm
                    dataSelect={{
                        'title': 'Departamento',
                        'name': 'departamento',
                        'placeholder': 'Selecciona el el departamento de la organizacion',
                        'options': [
                            { 'valor': 1, 'texto': 'Chinandega' },
                            { 'valor': 2, 'texto': 'Leon' },
                            { 'valor': 3, 'texto': 'Managua' },
                            { 'valor': 4, 'texto': 'Masaya' },
                            { 'valor': 5, 'texto': 'Matagalpa' },
                        ],
                        'fnChange': () => { },
                    }}
                />
                <InputsForm DataInputs={{
                    'title': 'RUC',
                    'type': 'text',
                    'name': 'ruc',
                    'placeholder': 'Escribe el numero RUC de la organizacion',
                    'value': '',
                    'fnChange': () => { },
                }} />
                <span className='row-span-2'>
                    <TextareaForm dataTextarea={{
                        'title': 'Direccion',
                        'name': 'direccion',
                        'placeholder': 'Escribe la direccion de la organizacion',
                        'value': '',
                        'fnChange': () => { },
                    }} />
                </span>
                <SelectForm dataSelect={{
                    'title': 'Municipio',
                    'name': 'municipio',
                    'placeholder': 'Selecciona el municipio de la organizacion',
                    'options': [
                        { 'valor': 1, 'texto': 'Chinandega' },
                        { 'valor': 2, 'texto': 'Leon' },
                        { 'valor': 3, 'texto': 'Managua' },
                        { 'valor': 4, 'texto': 'Masaya' },
                        { 'valor': 5, 'texto': 'Matagalpa' },
                    ],
                    'fnChange': () => { },
                }} />
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
                    'fnClick': () => { },
                }} />
            </form>
        </>
    )
}