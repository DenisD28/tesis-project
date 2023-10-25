import "../../css/login.css"
import "../../css/alert.css"

import toast, { Toaster } from "react-hot-toast"
import { FormLogin } from "../../Components/Login/FormLogin"

export default function LoginPage() {

    return (
        <><div> <Toaster /></div >
            <FormLogin />
        </>

    )
}