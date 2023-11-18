import { MdAccountCircle } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/ri";
import { CgOrganisation } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BoxOptionsProps {
  name?: string,
  role?: string,
  InitialsName?: string,
  fnLogout: () => void
}

export default function BoxOptions({ name, role, InitialsName, fnLogout }: BoxOptionsProps) {
  return (
    <motion.section transition={{ ease: "easeOut", duration: 0.3 }} animate={{ x: -2, opacity: 1, spacing: 100 }} initial={{ opacity: 0, spacing: 90 }} className='w-80 pt-4 bg-transparent absolute top-10 right-2'>
      <div className="w-full border-2 rounded-md shadow-2xl shadow-zinc-400 h-auto bg-white p-2 flex flex-col gap-2">
        <article className='flex justify-start items-center gap-2 mb-4'>
          <span>
            <p className='bg-[#fbc531] w-14 h-14 rounded-full text-white flex justify-center items-center uppercase font-bold'>{InitialsName}</p>
          </span>
          <span>
            <p className='font-bold'>{name}</p>
            <p className='font-semibold text-sm text-zinc-400'>{role}</p>
          </span>
        </article>
        <Link to={'/account/edit'} className="w-full h-10 flex justify-start hover:text-purple-icons pl-2 items-center gap-2 rounded text-zinc-700 text-base font-medium transition-all">
          <MdAccountCircle size={22} />
          Editar perfil
        </Link>
        {
          role === 'admin' ?
            <Link to={'/account/edit'} className="w-full h-10 flex justify-start hover:text-purple-icons pl-2 items-center gap-2 rounded text-zinc-700 text-base font-medium transition-all">
              <CgOrganisation size={22} />
              Editar organizaci&oacute;n
            </Link>
            : null
        }
        <Link to={'/account/change-password'} className="w-full h-10 flex justify-start hover:text-purple-icons pl-2 items-center gap-2 rounded text-zinc-700 text-base font-medium transition-all">
          <RiLockPasswordFill size={22} />
          Cambiar contrase&ntilde;a
        </Link>
        <button onClick={() => { fnLogout() }} className="w-full h-10 flex justify-start pl-2 items-center gap-2 rounded text-base font-medium transition-all bg-red-600 hover:bg-red-700 text-white">
          <FiLogOut size={22} />
          Cerrar sesi&oacute;n
        </button>
      </div>
    </motion.section>
  )
}
