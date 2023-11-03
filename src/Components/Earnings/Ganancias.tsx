import useGetEarnings from "./useGetEarnings"

export default function Ganancias() {
    const { earnings } = useGetEarnings() 

    return (
        <section className="md:col-span-6 col-span-12 flex justify-center items-center flex-col md:gap-4 gap-6 border-2 rounded-lg p-8">
            <h1 className="font-bold text-xl text-zinc-600">Ganancias totales</h1>
            <span className="w-full flex justify-center items-center flex-col">
                <h1 className="text-lg font-semibold text-zinc-400">Ultimos 30 dias</h1>
                {
                    earnings?.last_month.earnings_total === undefined
                    ? <h1 className="text-green-500 font-bold sm:text-xs text-xl">
                        Calculando...
                    </h1>
                    : <h1 className="text-green-500 font-bold sm:text-2xl text-xl">
                    + C$ {(earnings?.last_month.earnings_total)?.toFixed(2)}
                    </h1>
                }
            </span>
            <section className="flex justify-start items-center gap-8 sm:flex-row flex-col">
                <span className="flex justify-start items-center md:items-start flex-col">
                    <h1 className="text-zinc-400 font-bold text-lg">Hoy</h1>
                    {
                        earnings?.today.earnings_total === undefined
                        ? <h1 className="text-zinc-600 font-bold text-xs">
                            Calculando...
                        </h1>
                        : <h1 className="text-zinc-600 font-bold text-lg">
                        + C$ {earnings?.today.earnings_total?.toFixed(2)}
                        </h1>
                    }
                </span>
                <span className="sm:border-l-2 border-zinc-400 sm:pl-4 flex justify-start items-center md:items-start flex-col">
                    <h1 className="text-zinc-400 font-bold text-lg">Ultimos 7 dias</h1>
                    {
                        earnings?.last_week.earnings_total === undefined
                        ? <h1 className="text-zinc-600 font-bold text-xs">
                            Calculando...
                        </h1>
                        : <h1 className="text-zinc-600 font-bold text-lg">
                        + C$ {earnings?.last_week.earnings_total?.toFixed(2)}
                        </h1>
                    }
                </span>
            </section>
        </section>
    )
}
