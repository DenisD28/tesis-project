import {useState} from 'react'
import { changePassword } from '../../../services/Services'
import { useNavigate } from 'react-router-dom'

export default function useChangePassword() {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigation = useNavigate()
    const [seePassword, setSeePassword] = useState('password')

    let HandleOnClick = () => {

        if(password!=='' && newPassword!=='' && confirmPassword!==''){
            if(newPassword===confirmPassword){
                ChangePasswordQuery()
            }else{
                setError('Las contraseñas no coinciden')
            }
        }else{
            setError('Los campos no pueden estar vacios')
        }
    }

    let ChangePasswordQuery = async () => {
        try {
            const { estado} = await changePassword(password, newPassword)
            if(estado === 200){
                navigation('/')
            }
        } catch (e: any) {
            setError(e.response.data.message)
        }
    }
    return {
        password,
        newPassword,
        confirmPassword,
        error,
        setPassword,
        setNewPassword,
        setConfirmPassword,
        HandleOnClick,
        seePassword,
        setSeePassword
    }
}
