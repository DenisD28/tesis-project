import logo from './static/unan_leon_logo.png'

export default function Footer() {
  return (
    <div className='w-full h-14 flex justify-center items-center border-t-2 text-white font-medium text-xs p-2 gap-2 bg-purple-icons z-50'>
        <img className='w-10 h-auto border-r-2 border-white' src={logo} alt="UNAN-Logo" />
        Universidad Nacional Autónoma de Nicaragua, Le&oacute;n
    </div>
  )
}
