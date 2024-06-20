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
            "id": 2,
            "inventory_id": 120,
            "organization_id": 3,
            "user_id": 2,
            "date": "2024-06-05",
            "quantity": 6,
            "price": "20.00",
            "total": "120.00",
            "observation": "Registro de producto terminado el 05/06/2024",
            "disponibility": 0,
            "created_at": "2024-06-06T04:05:34.000000Z",
            "updated_at": "2024-06-13T00:15:47.000000Z",
            "type": "Input",
            "input": 6,
            "output": 0
        },
        {
            "id": 2,
            "inventory_id": 120,
            "organization_id": 3,
            "user_id": 2,
            "date": "2024-06-05",
            "quantity": "2.0000",
            "price": "20.0000",
            "total": "40.0000",
            "observation": "Salida de producto el 05/06/2024 por venta.",
            "created_at": "2024-06-06T04:08:42.000000Z",
            "updated_at": "2024-06-06T04:08:42.000000Z",
            "type": "Output",
            "input": 0,
            "output": "2.0000"
        },
        {
            "id": 3,
            "inventory_id": 120,
            "organization_id": 3,
            "user_id": 2,
            "date": "2024-06-12",
            "quantity": 6,
            "price": "20.00",
            "total": "120.00",
            "observation": "Registro de producto terminado el 12/06/2024",
            "disponibility": 6,
            "created_at": "2024-06-12T23:41:30.000000Z",
            "updated_at": "2024-06-12T23:41:30.000000Z",
            "type": "Input",
            "input": 6,
            "output": 0
        },
        {
            "id": 5,
            "inventory_id": 120,
            "organization_id": 3,
            "user_id": 2,
            "date": "2024-06-12",
            "quantity": 6,
            "price": "460.00",
            "total": "2760.00",
            "observation": "Registro de producto terminado el 12/06/2024",
            "disponibility": 6,
            "created_at": "2024-06-12T23:43:28.000000Z",
            "updated_at": "2024-06-12T23:43:28.000000Z",
            "type": "Input",
            "input": 6,
            "output": 0
        },
        {
            "id": 8,
            "inventory_id": 120,
            "organization_id": 3,
            "user_id": 2,
            "date": "2024-06-12",
            "quantity": 6,
            "price": "460.00",
            "total": "2760.00",
            "observation": "Registro de producto terminado el 12/06/2024",
            "disponibility": 6,
            "created_at": "2024-06-13T00:08:57.000000Z",
            "updated_at": "2024-06-13T00:08:57.000000Z",
            "type": "Input",
            "input": 6,
            "output": 0
        },
        {
            "id": 9,
            "inventory_id": 120,
            "organization_id": 3,
            "user_id": 2,
            "date": "2024-06-12",
            "quantity": 1000,
            "price": "2.76",
            "total": "2760.00",
            "observation": "Registro de producto terminado el 12/06/2024",
            "disponibility": 950,
            "created_at": "2024-06-13T00:09:33.000000Z",
            "updated_at": "2024-06-13T00:11:02.000000Z",
            "type": "Input",
            "input": 1000,
            "output": 0
        },
        {
            "id": 7,
            "inventory_id": 120,
            "organization_id": 3,
            "user_id": 2,
            "date": "2024-06-12",
            "quantity": "50.0000",
            "price": "2.7600",
            "total": "138.0000",
            "observation": "Salida de producto el 12/06/2024 por venta.",
            "created_at": "2024-06-13T00:11:02.000000Z",
            "updated_at": "2024-06-13T00:11:02.000000Z",
            "type": "Output",
            "input": 0,
            "output": "50.0000"
        },
        {
            "id": 9,
            "inventory_id": 120,
            "organization_id": 3,
            "user_id": 2,
            "date": "2024-06-12",
            "quantity": "4.0000",
            "price": "20.0000",
            "total": "80.0000",
            "observation": "Salida de producto el 12/06/2024 por venta.",
            "created_at": "2024-06-13T00:15:47.000000Z",
            "updated_at": "2024-06-13T00:15:47.000000Z",
            "type": "Output",
            "input": 0,
            "output": "4.0000"
        }
    ];
    const data1 = [
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
                        data.map((dat, index) => {
                            dat.input = dat.input ? parseFloat(dat.input.toString()) : 0;
                            dat.output = dat.output ? parseFloat(dat.output.toString()) : 0;
                            dat.price = (parseFloat(dat.price).toFixed(2)).toString();
                            dat.total = (parseFloat(dat.total).toFixed(2)).toString();
                            dat.created_at = new Date(dat.created_at).toLocaleDateString();
                            return <BoxTableKardexComponent key={index} dat={dat} headers={headers} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}