import { AiOutlineLoading } from "react-icons/ai";

export default function LoadingComponent() {
    return (
        <div className="flex flex-col justify-center items-center py-8">
            <h2 className="text-sm">Cargando...</h2>
            <div className="h-10 w-10 flex justify-center items-center animate-spin">
                <AiOutlineLoading/>
            </div>
        </div>
    )
}