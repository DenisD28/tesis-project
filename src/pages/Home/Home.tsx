import Table from "../../Components/Table/Table"
import GananciasMensuales from "../../Components/Chartjs/GananciasMensuales"
import Ganancias from "../../Components/Earnings/Ganancias"

export default function Home() {
  return (
    <div className="p-8 pb-28 w-full h-screen overflow-y-auto">
      <div className="grid grid-cols-12 gap-4">
        <Ganancias />
        <section className="md:col-span-6 col-span-12 md:h-72 h-60 rounded-md border-2 flex justify-center items-center p-4">
          <GananciasMensuales />
        </section>
        <section className="col-span-12">
          <Table />
        </section>
      </div>
    </div>
  )
}
