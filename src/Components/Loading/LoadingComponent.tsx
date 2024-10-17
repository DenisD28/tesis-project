import { AiOutlineLoading } from "react-icons/ai";

interface LoadingComponentProps {
    showText?: boolean;
}

export default function LoadingComponent({showText}: LoadingComponentProps) {
    return (
        <div className="flex flex-col justify-center items-center py-8">
            {
                showText != false ? (
                    <h2 className="text-sm">Cargando...</h2>
                ) : null
            }
            <div className="h-10 w-10 flex justify-center items-center animate-spin">
                <AiOutlineLoading/>
            </div>
        </div>
    )
}