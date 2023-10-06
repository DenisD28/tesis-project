import { useEffect, useState } from "react"
import { getGanaciasAnuales, getGanaciasMensuales } from "../../services/Services"
import { ganAnuales, ganMensuales } from "../types.d"

export default function Ganancias() {

    const [gananciasMensuales, setGananciasMensuales] = useState<ganMensuales>([])
    const [ganaciasAnuales, setGananciasTotalesAnuales] = useState<ganAnuales>([])
    let state = { last_month: [], last_week: [], today: [] }

    useEffect(() => {
        // getGanaciasMensual()
        // getGananciasAnual()
    })

    // const getGanaciasMensual = async () => {
    //     try {
    //         const { last_month, last_week, today } = await getGanaciasMensuales()
    //         state = ({
    //             last_month,
    //             last_week,
    //             today
    //         })
    //         setGananciasMensuales(last_month)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // const getGananciasAnual = async () => {
    //     try {
    //         const response = await getGanaciasAnuales()
    //         setGananciasTotalesAnuales(response)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    return (
        <section className="md:col-span-6 col-span-12 flex justify-center items-center flex-col md:gap-4 gap-6 border-2 rounded-lg p-8">
            <span className="w-full flex justify-center items-center flex-col">
                <h1 className="text-lg font-semibold text-zinc-400">Ganancias totales del año</h1>
                <h1 className="text-green-500 font-bold sm:text-2xl text-xl">+ C$ 2,000.00</h1>
            </span>
            <section className="flex justify-start items-center gap-8 sm:flex-row flex-col">
                <span className="flex justify-start items-center md:items-start flex-col">
                    <h1 className="text-zinc-400 font-bold text-lg">Hoy</h1>
                    <h1 className="text-zinc-600 font-bold text-lg">+ C$ 2,000.00</h1>
                </span>
                <span className="sm:border-l-2 border-zinc-400 sm:pl-4 flex justify-start items-center md:items-start flex-col">
                    <h1 className="text-zinc-400 font-bold text-lg">Este Mes</h1>
                    <h1 className="text-zinc-600 font-bold text-lg">+ C$ 2,0000</h1>
                </span>
            </section>
        </section>
    )
}
