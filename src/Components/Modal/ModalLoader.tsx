import { IoIosCheckmarkCircle } from "react-icons/io";
import LoadingComponent from "../Loading/LoadingComponent.tsx";

interface ModalLoaderProps {
    title: string,
    message: string,
    icon: any,
    show: boolean,
    finish: boolean,
    fnFinish?: () => void
}

export default function ModalLoader({ title, message, show, finish, fnFinish }: ModalLoaderProps) {
    return (
        <div className={`w-full h-full bg-black/50 z-50 ${!show ? "hidden" : null} absolute top-0 left-0`}>
            <div className={"w-full h-full flex justify-center items-center"}>
                <div className={"w-full h-80 mx-4 max-w-[30rem] bg-white rounded-lg flex flex-col justify-center items-center gap-4"}>
                    <h3 className={"text-black text-lg font-bold"}>{title}</h3>
                    <p className={"text-black text-sm text-center"}>{message}</p>
                    <div className={"w-24 h-18 flex justify-center items-center"}>
                        <div className={"w-16 h-16 bg-white rounded-full flex justify-center items-center"}>
                            {finish ? <IoIosCheckmarkCircle className={"w-8 h-8 text-green-600"} /> : <LoadingComponent showText={false} />}
                        </div>
                    </div>
                    {finish && <button onClick={fnFinish} className={"bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"}>Continuar</button>}
                </div>
            </div>
        </div>
    )

}