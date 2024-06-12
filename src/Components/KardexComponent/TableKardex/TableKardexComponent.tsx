import BoxTableKardexComponent from "./BoxTableKardex/BoxTableKardexComponent.tsx";

export default function TableKardexComponent() {
    const headers = [
        {name: 'Fecha', prop: 'date'},
        {name: 'Descripcion', prop: 'description'},
        {name: 'Entrada', prop: 'input'},
        {name: 'Salida', prop: 'output'},
    ]
    const data = [
        {
            date: '12/12/2021',
            description: 'Compra de productos',
            input: 10,
            output: 0,
        },
        {
            date: '12/12/2021',
            description: 'Compra de productos',
            input: 10,
            output: 0,
        },
        {
            date: '12/12/2021',
            description: 'Salida por produccion',
            input: 0,
            output: 5,
        },
        {
            date: '12/12/2021',
            description: 'Compra de productos',
            input: 10,
            output: 0,
        }
    ]
    return (
        <div className={"w-full border-2 border-zinc-100 rounded-md p-4"}>
            <div className={"w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4"}>
                <div className={"flex flex-col gap-4"}>
                    <div className={"w-full grid grid-cols-1 sm:grid-cols-2 gap-4"}>
                        <div className={"w-full"}>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Fecha de inicio
                            </label>
                            <input type="date" className="w-full border border-gray-300 p-2 rounded-md"/>
                        </div>
                        <div className={"w-full"}>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Fecha de fin
                            </label>
                            <input type="date" className="w-full border border-gray-300 p-2 rounded-md"/>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col gap-4"}>
                    <div className={"w-full"}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tipo de movimiento
                        </label>
                        <select className="w-full border border-gray-300 p-2 rounded-md">
                            <option value="all">Todos</option>
                            <option value="input">Entrada</option>
                            <option value="output">Salida</option>
                        </select>
                    </div>
                </div>
                <div></div>
                <button className="bg-zinc-900 text-white h-10 rounded-md md:col-span-1 col-span-full">Aplicar filtros</button>
            </div>
            <div className={"w-full overflow-x-auto scroll-style"}>
                <div className={"w-full grid grid-cols-4 min-w-[40rem] font-medium text-sm text-left text-gray-500 overflow-auto scroll-style"}>
                    <div className={"col-span-5 text-xs text-gray-700 uppercase bg-gray-100 grid grid-cols-4"}>
                        {
                            headers.map((head, index) => (
                                <div className="px-6 py-3" key={index}>{head.name}</div>
                            ))
                        }
                    </div>
                    {
                        data.map((dat, index) => (
                            <BoxTableKardexComponent key={index} dat={dat} headers={headers} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}