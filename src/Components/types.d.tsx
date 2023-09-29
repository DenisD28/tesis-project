export interface User {
    id: string
    name: string
    email: string
    username: string
    password: string
    token: string
    organization: Organizacion
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
    second_phone: string
    cite: number
    municipalities: number
}

export interface Producto {
    id: number
    name: string
    measurement_type: string
    quantity: string
}

export interface purchase {
    id: number
    provider: string
    date: string
    total: number
    detail_purchase_id: number
    quantity: number
    observation: number

}

export interface departamento {
    id: number
    name: string
}

export type ciudad = departamento[]

//Usuarios
export type UserType = User
export type user = Pick<User, 'username' | 'password'>
export type ListOfUser = User[]

//Iniciar sesion
export type formData = Post

//Inventario
export type inventario = Inventary
export type inven = Pick<Inventary, 'stock_min' | 'unit_of_measurement' | 'code' | 'description' | 'id'>
export type listProduct = Inventary[]

//Organizacion
export type listOrg = Organizacion[]
export type organi = Pick<Organizacion, 'id' | 'name' | 'ruc' | 'address'>
export type organizacion = Organizacion

//Lista Producto
export type listProd = Producto[]
export type agreagarProd = Producto
export type listInven = Pick<Producto, 'id' | 'quantity'>[]
export type invent = Pick<purchase, 'detail_purchase_id' | 'quantity' | 'observation'>
export type purchases = Pick<purchase, 'id' | 'provider' | 'date' | 'total'>[]
export type newProduct = Pick<Producto, 'name' | 'measurement_type'>