import GananciasMensuales from "../../Components/Chartjs/GananciasMensuales"
import Ganancias from "../../Components/Earnings/Ganancias"
import ModalSecondary from "../../Components/ModalSecondary/ModalSecondary"
import { TablaProductoFaltante } from "../../Components/TablasDatos/TablaProductoFaltante"

export default function Home() {
  return (
    <div className="px-0 md:px-4 pb-8 w-full h-full overflow-y-auto scroll-hidden">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-full">
          <ModalSecondary />
        </div>
        <Ganancias />
        <section className="md:col-span-6 col-span-12 md:h-72 h-60 rounded-md border-2 flex justify-center items-center p-4">
          <GananciasMensuales />
        </section>
        <section className="col-span-12">
          <TablaProductoFaltante />
        </section>
      </div>
    </div>
  )
}
