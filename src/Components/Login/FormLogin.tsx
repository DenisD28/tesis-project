import "../../css/login.css"
import "../../css/alert.css"
import { useState } from "react"
import { Post, User } from "../../Components/types.d"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/Login/LoginServices"
import Cookies from 'js-cookie'
import Footer from "../../Components/Footer/Footer"
import CryptoJS from 'crypto-js'
import toast from "react-hot-toast"
import { Imagenes } from "../Carousel/Imagenes"

export const FormLogin = () => {

    const navigate = useNavigate()
    const [formtext, setFormText] = useState<Post>({ usuario: "", password: "" })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormText((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let userToken: User
        try {
            userToken = await login(formtext)
            setEncryptedToken(userToken.token)

            if (userToken.token != "") {
                navigate("/dashboard")
            }

        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }

    function setEncryptedToken(token: string) {
        var expiracion = new Date()
        expiracion.setTime(expiracion.getTime() + (60 * 60 * 1000))

        const encryptedToken = CryptoJS.AES.encrypt(token, import.meta.env.VITE_KEY).toString();
        Cookies.set('authToken', encryptedToken, { expires: expiracion }); // Puedes ajustar la expiración como desees
    }

    return (
        <div className="flex justify-start items-stretch">
            {/* <img className="img_login w-6/12 object-cover" src="src\img\pexels-ivan-j.jpg" alt="" /> */}
            <div className="img_login">
                <Imagenes />
            </div>

            <div className="w-full h-screen overflow-y-auto pt-10 md:pt-32 flex flex-col justify-between">
                <div className="Form pb-8">
                    <div className="title text-center">
                        <h2 className="tituloInicio">Bienvenidos</h2>
                    </div>
                    <form className="w-full max-w-[25rem] flex flex-col justify-start items-start gap-6 [&>div]:flex [&>div]:justify-start [&>div]:items-start [&>div]:flex-col [&>div]:gap-2 [&>div]:w-full px-4" onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label htmlFor="username" className="labels">Usuario</label>
                            <input name="usuario" value={formtext.usuario} onChange={handleInputChange} type="text" id="username" className="input" placeholder="Usuario" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="labels">Contrase&ntilde;a</label>
                            <input name="password" value={formtext.password} onChange={handleInputChange} type="password" id="password" className="input" placeholder="Contraseña" required />
                        </div>
                        <section className="flex flex-row">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recuerdarme</label>
                        </section>
                        <button type="submit" className="btnLogin flex justify-center items-center font-medium hover:bg-indigo-700 transition-colors">Iniciar Sesi&oacute;n</button>
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}