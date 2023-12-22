import { ActualizarOrganizacion } from "../../../services/Organization/UpdateOrganizacionServices";
import { useNavigate } from "react-router-dom";

interface UpdateOrganizationType {
    name: string;
    ruc: string;
    address: string;
    sector: string;
    municipality: string;
    city: string;
    phone_main: string;
    phone_secondary: string;
    image: File | null;
    DataOld: {
        name: string;
        ruc: string;
        address: string;
        sector: string;
        municipality: string;
        city: string;
        phone_main: string;
        phone_secondary: string;
    }
}


export default function useUpdateOrganization({ name, ruc, address, sector, municipality, city, phone_main, phone_secondary, image, DataOld }: UpdateOrganizationType) {
    const navigate = useNavigate();
    let updateOrganization = async () => {
        const formData = new FormData();
        if (image) {
            formData.append("image", image);
        }
        if (name != DataOld.name && name != "") { formData.append("name", name); }
        if (ruc != "null") { formData.append("ruc", ruc ?? ""); }
        if (address != "null") { formData.append("address", address ?? ""); }
        formData.append("sector_id", sector);
        formData.append("municipality_id", municipality);
        formData.append("city_id", city);
        if (phone_main != "null") { formData.append("phone_main", phone_main ?? ""); }
        if (phone_secondary != "null") { formData.append("phone_secondary", phone_secondary ?? ""); }
        try {
            await ActualizarOrganizacion(formData)
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }
    return {
        updateOrganization
    }
}
