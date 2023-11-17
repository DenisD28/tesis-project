import { useState, useEffect } from 'react';
import { departamentos, municipio, sectores, getDataMyOrganization as serviceOrganization } from '../../../services/Services';

interface CityType {
    id: number;
    name: string;
}

interface OrganizationType {
    name: string;
    ruc: string;
    address: string;
    sector: CityType;
    municipality: CityType;
    city: CityType;
    phone_main: string;
    phone_secondary: string;
    image: string;
}

interface DataOldType {
    name: string;
    ruc: string;
    address: string;
    sector: string;
    municipality: string;
    city: string;
    phone_main: string;
    phone_secondary: string;
}

const useGetInfoOrganization = () => {
    // informacion de la organizacion
    const [infoOrganization, setInfoOrganization] = useState<OrganizationType>();
    // estados
    const [DataOld, setDataOld] = useState<DataOldType>({
        name: "",
        ruc: "",
        address: "",
        sector: "",
        municipality: "",
        city: "",
        phone_main: "",
        phone_secondary: "",
    });
    const [name, setName] = useState("");
    const [ruc, setRuc] = useState("");
    const [address, setAddress] = useState("");
    const [sector_id, setSector_id] = useState("");
    const [municipality_id, setMunicipality_id] = useState("");
    const [city_id, setCity_id] = useState("");
    const [phone_main, setPhone_main] = useState("");
    const [phone_secondary, setPhone_secondary] = useState("");
    const [image, setImage] = useState<File | null>(null);
    // listas
    const [listCity, setListCity] = useState<CityType[]>([]);
    const [listMunicipality, setListMunicipality] = useState<CityType[]>([]);
    const [listSectors, setListSectors] = useState<CityType[]>([]);
    const [imageOld, setImageOld] = useState("");


    useEffect(() => {
    let getDepartamentos = async () => {
        const { ciudades } = await departamentos()
        await setListCity(ciudades)
    }
    let getSectores = async () => {
        const info = await sectores()
        await setListSectors(info.sectores)
    }
    let getDataMyOrganization = async () => {
        const info = await serviceOrganization()
        await setInfoOrganization(info.organizacion)
    }
    getDataMyOrganization()
    getSectores()
    getDepartamentos()
    }, []);

    useEffect(() => {
        let getMunicipios = async () => {
            const info = await municipio(city_id)
            await setListMunicipality(info.municipios)
        }
        city_id !== "" && getMunicipios()
    }, [city_id]);

    useEffect(() => {
        if (infoOrganization !== undefined) {
            setDataOld({
                name: infoOrganization.name,
                ruc: infoOrganization.ruc,
                address: infoOrganization.address,
                sector: (infoOrganization.sector.id).toString(),
                municipality: (infoOrganization.municipality.id).toString(),
                city: (infoOrganization.city.id).toString(),
                phone_main: infoOrganization.phone_main,
                phone_secondary: infoOrganization.phone_secondary,
            })
            setName(infoOrganization.name)
            setRuc(infoOrganization.ruc)
            setAddress(infoOrganization.address)
            setSector_id((infoOrganization.sector.id).toString())
            setCity_id((infoOrganization.city.id).toString())
            setMunicipality_id((infoOrganization.municipality.id).toString())
            setPhone_main(infoOrganization.phone_main)
            setPhone_secondary(infoOrganization.phone_secondary)
            setImageOld(infoOrganization.image)
        }
    }, [infoOrganization]);

    return {
        name,
        setName,
        ruc,
        setRuc,
        address,
        setAddress,
        sector_id,
        setSector_id,
        municipality_id,
        setMunicipality_id,
        city_id,
        setCity_id,
        listCity,
        setListCity,
        phone_main,
        setPhone_main,
        phone_secondary,
        setPhone_secondary,
        setImage,
        listMunicipality,
        listSectors,
        imageOld,
        image,
        DataOld
    };
};

export default useGetInfoOrganization;