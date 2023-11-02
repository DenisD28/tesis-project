import { Link } from 'react-router-dom'
import React from 'react'
import {PiWarningOctagonBold} from 'react-icons/pi'

export default function ModalSecondary() {
  return (
    <div className='bg-white w-full h-auto rounded-md px-4 py-8 flex justify-start items-center flex-col gap-4 border-2'>
            <h1 className='flex justify-center items-center gap-4 h-10 uppercase text-yellow-300 font-bold text-2xl'>
                <PiWarningOctagonBold className="w-8 h-auto" />
                Advertencia!
            </h1>
            <section className='w-full grid grid-cols-1 text-lg text-justify max-w-[60rem] text-zinc-500 font-medium gap-4'>
                <p>
                    Para garantizar la seguridad de su cuenta, le recomendamos encarecidamente cambiar su contraseña actual por una nueva. Este paso es esencial para proteger sus datos y mantener su cuenta segura. Puede realizar el cambio de contraseña en el boton de la seccion de abajo. Le agradecemos por su cooperación en la mejora de la seguridad de su cuenta.
                </p>
                <Link to={"/"} className='bg-purple-icons text-white py-2 rounded-md text-center hover:bg-indigo-700 transition-all'>
                    Cambiar Contraseña
                </Link>
            </section>
        </div>
  )
}
