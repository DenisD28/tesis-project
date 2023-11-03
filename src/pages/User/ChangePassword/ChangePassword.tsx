import InputsForm from '../../../Components/Forms/InputsComponents/InputsForm'
import ButtonForm from '../../../Components/Forms/ButtonComponents/ButtonForm'
import useChangePassword from './useChangePassword'
import { motion } from 'framer-motion'

export default function ChangePassword() {
    const { password, newPassword, confirmPassword, error, setPassword, setNewPassword, setConfirmPassword, HandleOnClick, seePassword, setSeePassword } = useChangePassword()
    return (
    <article>
        <h1 className='text-[#4F46E5] text-2xl font-bold my-4'>Cambio de contrase&ntilde;a</h1>
        <form onSubmit={(e) => {e.preventDefault()}} className='w-full h-auto py-4 grid grid-cols-1'>
            {
                error!==''&&
                <p className='text-red-500 font-semibold text-sm px-2'>{error}</p>
            }
            <InputsForm DataInputs={{
                title: 'Contraseña actual',
                type: seePassword,
                name: 'password',
                placeholder: 'Contraseña actual',
                value: password,
                isRequire: true,
                fnChange: setPassword,
            }} />
            <InputsForm DataInputs={{
                title: 'Nueva contraseña',
                type: seePassword,
                name: 'password',
                placeholder: 'Nueva contraseña',
                value: newPassword,
                isRequire: true,
                fnChange: setNewPassword,
            }} />
            <InputsForm DataInputs={{
                title: 'Confirmar contraseña',
                type: seePassword,
                name: 'password',
                placeholder: 'Confirmar contraseña',
                value: confirmPassword,
                isRequire: true,
                fnChange: setConfirmPassword,
            }} />
            <section className='w-full h-14 flex justify-start items-center gap-2 px-2 mt-4 font-medium text-zinc-500'>
                <article className={`w-14 p-1 h-8 bg-zinc-900/20 rounded-full flex items-center ${seePassword!=="text"?"justify-start":"justify-end"}`} onClick={() => {seePassword==='password'?setSeePassword('text'):setSeePassword('password')}}>
                    <motion.div className="w-6 h-6 rounded-full bg-indigo-600 border-[2px] border-white" layout transition={{type: "spring", stiffness: 700, damping: 20}} />
                </article> 
                Mostrar contraseñas
            </section>
            <ButtonForm dataButton={{
                title: 'Guardar cambios',
                color: 'blue',
                type: 'submit',
                fnClick: () => {HandleOnClick()},
            }} />
        </form>
    </article>
  )
}
