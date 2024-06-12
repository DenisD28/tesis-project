import GananciasMensuales from "../../Components/Chartjs/GananciasMensuales"
import Ganancias from "../../Components/Earnings/Ganancias"
import ModalSecondary from "../../Components/ModalSecondary/ModalSecondary"
import { TablaProductoFaltante } from "../../Components/TablasDatos/TablaProductoFaltante"
import { User } from "../../Components/types.d"

interface HomeProps {
  userInfo: User | undefined
}

export default function Home({ userInfo }: HomeProps) {
  return (
    <div className="px-0 md:px-4 pb-8 w-full h-full overflow-y-auto scroll-hidden">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-full">
          {
            !userInfo?.verification_password && userInfo?.verification_password != undefined ? <ModalSecondary /> : null
          }
        </div>
        {
          userInfo?.role.name === "admin" ? 
          <>
            <Ganancias />
            <section className="col-span-12 2xl:col-span-6 md:h-72 hidden h-60 rounded-md border-2 md:flex justify-center items-center p-4">
              <GananciasMensuales />
            </section>
          </>
          : null
        }
        <section className="col-span-12 overflow-x-auto">
          <TablaProductoFaltante />
        </section>
      </div>
    </div>
  )
}
