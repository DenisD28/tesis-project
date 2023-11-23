import ModalComponent from "../ModalComponent/ModalComponent";
import useGetProduct from "./useGetProduct";
import SelectForm from "../../Forms/SelectComponents/SelectForm";

interface ReportsModalProps {
  isOpen: boolean;
  onClose: () => void;
  typeProduct: string;
  selelectProduct: boolean;
  typeReport: string;
}

export default function ReportsModal({
  isOpen,
  onClose,
  typeProduct,
  selelectProduct,
  typeReport,
}: ReportsModalProps) {
  const {
    fromDate,
    toDate,
    setFromDate,
    setToDate,
    withProduct,
    setWithProduct,
    listProduct,
    setProduct,
    touchButton,
  } = useGetProduct(typeProduct);

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <h1 className=" text-purple-icons font-bold text-2xl mb-8 px-2">
        Detalles del reporte
      </h1>
      <section className="w-full px-4">
        {  
          selelectProduct &&
          <label className="w-full flex justify-start items-center py-2 font-semibold gap-2">
            Producto en especifico
            <input
              className="ml-2"
              type="checkbox"
              checked={withProduct}
              onChange={() => setWithProduct(!withProduct)}
            />
          </label>
        }
        {withProduct && (
          <article className="w-full flex justify-start flex-wrap gap-2">
            <SelectForm
              dataSelect={{
                title: "Producto",
                name: "product",
                placeholder: "Seleccione un producto",
                options: listProduct.map((product) => {
                  return {
                    texto: product.name_product,
                    valor: product.id_product.toString(),
                  };
                }),
                fnChange: setProduct,
                isRequerid: true,
              }}
            />
          </article>
        )}
        <article className="w-full flex justify-start flex-wrap gap-2">
          <label>desde</label>
          <input
            value={fromDate}
            onChange={(e) => setFromDate(e.currentTarget.value)}
            type="date"
            className="w-full h-10 border-2 border-purple-icons rounded-md px-2"
          />
          <label>hasta</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.currentTarget.value)}
            className="w-full h-10 border-2 border-purple-icons rounded-md px-2"
          />
        </article>
        <button
          onClick={() => {
            touchButton(typeReport);
          }}
          className="w-full h-10 mt-4 bg-purple-icons rounded-md text-white flex justify-center px-4 items-center font-semibold"
        >
          <h1>Descargar reporte</h1>
        </button>
      </section>
    </ModalComponent>
  );
}
