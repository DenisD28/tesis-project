import { useState } from "react"
import login from "../services/Services"
import { Post } from "../Components/types.d"
import { useNavigate } from "react-router-dom"
import { Image } from "@nextui-org/react";
import "../css/App.css"

export default function LoginPage() {
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
        try {
            const userToken = await login.login(formtext)
            localStorage.setItem("token", userToken.token)
        } catch (e) {

        }
        navigate("/inventario")
    }

    return (
        <div className="container gap-20">
            <Image
                width={500}
                alt="NextUI hero Image"
                src="src\img\panadero.jpg"
            />
            <div className="Form">
                <div className="title">
                    <h2 className="tituloInicio">Bienvenido</h2>
                    <h3 className="subtituloInicio">Inicia sesion</h3>
                </div>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-6">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                        <input name="usuario" value={formtext.usuario} onChange={handleInputChange} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Usuario" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                        <input name="password" value={formtext.password} onChange={handleInputChange} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contraseña" required />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recuerdarme</label>
                    </div>
                    <button type="submit" className=" button text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar Sesion</button>
                </form>
            </div>
        </div>
    )
}