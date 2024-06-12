
export default function HeaderKardexComponent() {
    return (
        <nav className="flex flex-col md:flex-row w-full justify-between md:items-center">
            <span className="text-lg font-bold my-4">
                <h2 className="text-2xl font-bold">Kardex de inventario</h2>
                <h4 className="text-sm font-medium text-zinc-400">Resumen del inventario actual</h4>
            </span>
            <div className="flex gap-2 [&>button]:transition-all">
                <button className="border-[1px] hover:shadow font-bold py-2 px-4 rounded-md">
                    Exportar a Excel
                </button>
                <button className="border-[1px] hover:shadow font-bold py-2 px-4 rounded-md">
                    Exportar a PDF
                </button>
            </div>
        </nav>
    )
}