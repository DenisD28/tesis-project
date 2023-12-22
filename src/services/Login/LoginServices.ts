import axios from "axios";
import { Post, User } from "../../Components/types.d";


//Autenticacion
export const login = async (newPost: Post): Promise<User> => {
    const specialChars = newPost.password
    const encodedChars = encodeURIComponent(specialChars)
    const url = `${import.meta.env.VITE_API_URL}auth/login?username=${newPost.usuario}&password=${encodedChars}`

    const response = await axios.post(url)

    return response.data
}

