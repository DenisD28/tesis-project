import React, { createContext, useState } from "react"
import { UserType } from "../Components/types.d"
import { login } from "../services/Services"

interface Props {
    children: React.ReactNode
    data: UserType
}

export const UserContext = createContext({})

export function UserContextProvider({ children }: Props) {
    const [usuario, setUsuario] = useState()

    const Inicio = (data: Props) => {
        login(data).then(data => setUsuario(data))
    }

    return (
        <UserContext.Provider value={Inicio}>
            {children}
        </UserContext.Provider>
    )
}
