export interface ViewInfoUserProps {
    name: string,
    email: string,
    username: string,
    role: {
        name: string
        description: string
    },
    organization: {
        name: string,
        ruc: string,
        address: string,
        sector: {
            name: string
        },
        city: {
            name: string
        },
        municipality: {
            name: string
        },
        phone_main: string,
        phone_secondary: string,
        image: string
    }
    verification_password: boolean,
    status: string,
    last_login_at: string,
    created_at: string,
    updated_at: string
}