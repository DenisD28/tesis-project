export interface User {
    id: string
    name: string
    email: string
    username: string
    password: string
    token: string
}
export interface Inventary {
    product_id: number
    type: string
    stock_min: number
    unit_of_measurement: string
    location: string
    lot_number: string
    note: string
    code: string
    description: string
}
export interface Post {
    usuario: string
    password: string
}
export interface Organizacion {

    id: number
    name: string
    ruc: string
    address: string
    phone_main: string
}

export type UserType = User
export type user = Pick<User, 'username' | 'password'>
export type ListOfUser = User[]
export type formData = Post
export type inventario = Inventary
export type inven = Pick<Inventary, 'type' | 'stock_min' | 'unit_of_measurement' | 'code' | 'description'>
export type listProduct = Inventary[]
export type listOrg = Organizacion[]
export type organi = Pick<Organizacion, 'id' | 'name' | 'ruc' | 'address'>