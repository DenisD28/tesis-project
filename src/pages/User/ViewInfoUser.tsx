import InputsForm from '../../Components/Forms/InputsComponents/InputsForm'
import ButtonForm from '../../Components/Forms/ButtonComponents/ButtonForm'
import useGetDataUser from './useGetDataUser'
import useUpdateDataUser from './useUpdateDataUser'

export default function ViewInfoUser() {
    const { userInfo, InitialsName, name, setEmail, email, setName } = useGetDataUser()
    const { HandleUpdateUser } = useUpdateDataUser()

    return (
    <article>
            <h1 className='text-[#4F46E5] text-2xl font-bold my-4'>Editar perfil</h1>
            <section className='w-full h-auto py-4 flex flex-col gap-4'>
                <h2 className='text-lg font-semibold'>Avatar</h2>
                <p className='bg-[#fbc531] w-24 h-24 rounded-full flex justify-center items-center uppercase text-white font-bold text-2xl'>{InitialsName}</p>
                <p className='text-sm text-zinc-400'>Pr&oacute;ximamente se podra actualizar el avatar en la secci&oacute;n de <span className='font-semibold'>Editar perfil</span></p>
            </section>
            <section className='w-full h-auto py-4 grid grid-cols-1 lg:grid-cols-2'>
                <h2 className='text-lg col-span-full font-semibold'>Datos generales</h2>
                <InputsForm DataInputs={{
                    title: 'Nombre',
                    type: 'text',
                    name: 'name',
                    placeholder: 'Nombre',
                    value: name,
                    isRequire: true,
                    fnChange: setName,
                }} />
                <InputsForm DataInputs={{
                    title: 'Correo',
                    type: 'email',
                    name: 'email',
                    placeholder: 'Correo',
                    value: email,
                    isRequire: true,
                    fnChange: setEmail,
                    isDisabled: false
                }} />
            </section>
            <ButtonForm dataButton={{
                title: 'Guardar cambios',
                color: 'blue',
                type: 'button',
                fnClick: () => {HandleUpdateUser(
                    name!==userInfo?.name?name:"",
                    email!==userInfo?.email?email:""
                )},
            }} />
    </article>
    )
}
