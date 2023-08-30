export interface User {
    id: string
    name: string
    email: string
    username: string
    password: string
    token: string
}
export interface Inventary {
    id: number
    type: string
    stock_min: number
    unit_of_measurement: string
    location: string
    lot_number: string
    note: string
    code: string
    description: string
    product: string
    status: string
    stock: number
    quantity: string
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

export interface Producto {
    id: number
    name: string
    measurement_type: string
    quantity: string
}

export interface purchase {
    detail_purchase_id: number
    quantity: string
    observation: string
}

export type UserType = User
export type user = Pick<User, 'username' | 'password'>
export type ListOfUser = User[]
export type formData = Post
export type inventario = Inventary
export type inven = Pick<Inventary, 'type' | 'stock_min' | 'unit_of_measurement' | 'code' | 'description' | 'id'>
export type listProduct = Inventary[]
export type listOrg = Organizacion[]
export type organi = Pick<Organizacion, 'id' | 'name' | 'ruc' | 'address'>
export type listProd = Producto[]
export type agreagarProd = Producto
export type listInven = Pick<Producto, 'id' | 'quantity'>[]
export type invent = Pick<purchase, 'detail_purchase_id' | 'quantity' | 'observation'>