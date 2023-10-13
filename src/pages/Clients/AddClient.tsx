import FormAdd from '../../Components/Client/FormAdd'

export default function AddClient() {
  return (
    <main className="w-full h-screen flex justify-between items-start flex-col">
      <div className="w-full h-full flex justify-start items-start overflow-y-auto gap-1">
        <div className="w-full h-full bg-white overflow-y-scroll scroll-hidden">
          <div className="div-dashboard">
            <div className="contenido">
              <div className='py-4 pb-28 px-8 h-screen overflow-y-auto'>
                <h1 className='text-[#4F46E5] text-2xl font-bold my-4'>Registro de clientes</h1>
                <FormAdd />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
