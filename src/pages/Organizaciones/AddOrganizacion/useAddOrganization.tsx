interface Organizacion {
    id: number
    name: string
    ruc: string
    address: string
    phone_main: string
    second_phone: string
    city_id: number
    municipality_id: number
}


export default function useAddOrganization({ name, ruc, address, phone_main, second_phone, city_id, municipality_id }) {
    let AddOrganizacion = async () => {
        const formData = new FormData()

        try {
            await agregarOrganizacion(formProducto)
            navigation("/Organizaciones")

        } catch (e: any) {
            toast.error(e.response.data.message)
        }
    }
}