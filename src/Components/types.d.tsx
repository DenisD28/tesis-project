export interface User {
    id: string
    name: string
    email: string
    username: string
    password: string,
    verification_password: boolean
    token: string
    organization: Organizacion
    role: role
}

export interface User2 {
    id: string
    name: string
    email: string
    username: string
    password: string
    token: string
    organization: string
    role: string
}

export interface role {
    id: number
    name: string
    description: string
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
    name: string
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
    city_id: number
    municipality_id: number
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

export interface municipio {
    id: number
    name: string
}

export interface clientes {
    id: number
    name: string
    address: string
    municipality_id: number
    city_id: number
    type: string
    phone_main: string
    phone_secondary: string
    details: string
}



export interface Proveedores {
    id: number
    name: string
    ruc: string
    address: string
    phone_main: string
    second_phone: string
    city_id: number
    municipality_id: number
    contact_name: string
}

export type compra = Pick<purchase, 'detail_purchase_id' | 'quantity'>


export type Usuario = User2;
export type provider = Proveedores[]
export type proveedor = Pick<Proveedores, 'name' | 'ruc' | 'address' | 'phone_main' | 'second_phone' | 'city_id' | 'municipality_id' | 'contact_name'>
export type cliente = clientes
export type clients = Pick<clientes, 'name' | 'address' | 'municipality_id' | 'city_id' | 'type' | 'phone_main' | 'phone_secondary' | 'details'>
export type lstCliente = cliente[]

export type ciudad = departamento[]
export type municipioCiudad = municipio[]

//Usuarios
export type UserType = User
export type user = Pick<User, 'username' | 'password'>
export type ListOfUser = User[]

//Iniciar sesion
export type formData = Post

//Inventario
export type inventario = Inventary
export type inven = Pick<Inventary, 'stock_min' | 'unit_of_measurement' | 'code' | 'description' | 'id' | "product">
export type listProduct = Inventary[]
export type tipo = Pick<Inventary, 'type'>

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