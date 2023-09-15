import "../../css/login.css"
import { useState } from "react"
import { Post, User } from "../../Components/types.d"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/Services";

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
        let userToken: User
        try {
            userToken = await login(formtext)
            console.log(userToken)
            //localStorage.setItem("token", userToken.token)

            if (userToken.token != "") {
                navigate("/inventario")
            }
        } catch (error) {
            alert("Credenciales incorrectas")
        }
    }

    return (
        <div className="container">

            <img src="src\img\pexels-ivan-j.jpg" alt="" />
            <div>
                <div className="Form">
                    <div className="title">
                        <h2 className="tituloInicio">Bienvenido</h2>
                        <h2 className="subtituloInicio">Inicia Sesión</h2>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-6 ">
                            <label htmlFor="username" className="labels">Usuario</label>
                            <input name="usuario" value={formtext.usuario} onChange={handleInputChange} type="text" id="username" className="input" placeholder="Usuario" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="labels">Contraseña</label>
                            <input name="password" value={formtext.password} onChange={handleInputChange} type="password" id="password" className="input" placeholder="Contraseña" required />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recuerdarme</label>
                        </div>
                        <button type="submit" className="btnLogin">Iniciar Sesion</button>
                    </form>
                </div>
            </div>
        </div>

    )
}