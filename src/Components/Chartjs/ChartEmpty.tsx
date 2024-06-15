import {BsBox} from "react-icons/bs";

export default function ChartEmpty() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-8 gap-4">
            <span className="text-2xl text-gray-400 bg-zinc-100 p-4 rounded-full"><BsBox/></span>
            <h2 className="font-bold text-2xl tracking-tight text-zinc-800">Sin datos disponibles</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Parece que no hay datos para mostrar en este momento.
            </p>
        </div>
    );
}