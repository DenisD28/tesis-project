import InputsForm from "../../../Components/Forms/InputsComponents/InputsForm";
import SelectForm from "../../../Components/Forms/SelectComponents/SelectForm";
import ButtonForm from "../../../Components/Forms/ButtonComponents/ButtonForm";
import useGetInfoOrganization from "./useGetInfoOrganization";
import useUpdateOrganization from "./useUpdateOrganization";

export default function EditOrganization() {
  const {
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
    phone_main,
    setPhone_main,
    phone_secondary,
    setPhone_secondary,
    listMunicipality,
    listSectors,
    image,
    DataOld
  } = useGetInfoOrganization();
  const { updateOrganization } = useUpdateOrganization({
    name,
    ruc,
    address,
    sector: sector_id,
    municipality: municipality_id,
    city: city_id,
    phone_main,
    phone_secondary,
    image,
    DataOld
  });

  return (
    <section>
      <h1 className="text-[#4F46E5] text-2xl font-bold my-4">
        Editar organizacion
      </h1>
      <h3 className="text-lg text-zinc-700 font-semibold mb-4">
        Informaci&oacute;n de la organizaci&oacute;n
      </h3>
      <section className="grid lg:grid-cols-2">
        {/* <FileInputComponent
          label="Logo"
          name="file"
          isRequired={true}
          isDisabled={false}
          fnChange={setImage}
          url_image={imageOld}
        /> */}
        <InputsForm
          DataInputs={{
            name: "name",
            title: "Nombre",
            value: name || "",
            type: "text",
            placeholder: "Nombre de la organizacion",
            isRequire: true,
            isDisabled: false,
            fnChange: setName,
          }}
        />
        <InputsForm
          DataInputs={{
            name: "ruc",
            title: "RUC",
            value: ruc || "",
            type: "text",
            placeholder: "RUC de la organizacion",
            isRequire: false,
            isDisabled: false,
            fnChange: setRuc,
          }}
        />
        <InputsForm
          DataInputs={{
            name: "address",
            title: "Dirección",
            value: address || "",
            type: "text",
            placeholder: "Dirección de la organizacion",
            isRequire: false,
            isDisabled: false,
            fnChange: setAddress,
          }}
        />
        <SelectForm
          dataSelect={{
            name: "sector_id",
            title: "Sector",
            placeholder: "Seleccione un sector",
            fnChange: setSector_id,
            options: listSectors.map((sector) => {
              return { valor: sector.id, texto: sector.name };
            }, []),
            isRequerid: true,
            value: sector_id,
          }}
        />
        <SelectForm
          dataSelect={{
            name: "city_id",
            title: "Ciudad",
            placeholder: "Seleccione una ciudad",
            fnChange: setCity_id,
            options: listCity.map((city) => {
              return { valor: city.id, texto: city.name };
            }, []),
            isRequerid: true,
            value: city_id,
          }}
        />
        <SelectForm
          dataSelect={{
            name: "municipality_id",
            title: "Municipio",
            placeholder: "Seleccione un municipio",
            fnChange: setMunicipality_id,
            options: listMunicipality.map((municipality) => {
              return { valor: municipality.id, texto: municipality.name };
            }, []),
            isRequerid: true,
            value: municipality_id,
          }}
        />
        <InputsForm
          DataInputs={{
            name: "phone_main",
            title: "Teléfono principal",
            value: phone_main || "",
            type: "text",
            placeholder: "Teléfono principal de la organizacion",
            isRequire: false,
            isDisabled: false,
            fnChange: setPhone_main,
          }}
        />
        <InputsForm
          DataInputs={{
            name: "phone_secondary",
            title: "Teléfono secundario",
            value: phone_secondary || "",
            type: "text",
            placeholder: "Teléfono secundario de la organizacion",
            isRequire: false,
            isDisabled: false,
            fnChange: setPhone_secondary,
          }}
        />
        <div className="col-span-full">
          <ButtonForm
            dataButton={{
              title: "Actualizar organizacion",
              color: "blue",
              type: "submit",
              fnClick: () => {updateOrganization()},
            }}
          />
        </div>
      </section>
    </section>
  );
}
