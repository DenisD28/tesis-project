import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ButtonSectionComponent({ title, url }: { title: string, url: string }) {
    return (
        <Link to={url}
            className="bg-[#007bff] hover:bg-blue-600 gap-2 text-white font-bold py-2 px-4 rounded flex justify-start items-center">
            <IoAdd className={"w-5 h-5"}/>
            Agregar {title.toLowerCase()}
        </Link>
    )
}