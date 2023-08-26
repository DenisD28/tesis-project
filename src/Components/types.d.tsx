export interface User {
    id: string
    name: string
    email: string
    username: string
    password: string
}

export type UserType = User
export type user = Pick<User, 'username' | 'password'>

export type ListOfUser = User[]

export interface FormData {
    usuario: string
    password: string
}

export type data = FormData