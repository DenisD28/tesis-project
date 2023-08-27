export interface User {
    id: string
    name: string
    email: string
    username: string
    password: string
    token: string
}

export type UserType = User
export type user = Pick<User, 'username' | 'password'>

export type ListOfUser = User[]

export interface Post {
    usuario: string
    password: string
}

export type formData = Post

export interface Inventary {
    product_id: number
    type: string
    stock_min: number
    unit_of_measurement: string
    location: string
    lot_number: string
}

export type inventario = Inventary