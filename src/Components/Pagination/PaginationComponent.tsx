import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function PaginationComponent({currentPage, totalPages, onPageChange}: PaginationProps) {
    return (
        <div className="flex justify-center items-center h-20 gap-2 mt-4">
            <button onClick={() => {onPageChange(currentPage>1?currentPage-1:currentPage)}} disabled={currentPage==1} className="w-8 h-8 rounded-full flex justify-center items-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                <FaAngleLeft />
            </button>
            <div className="flex justify-center text-zinc-800 bg-gray-100 px-4 py-2 rounded-full">
                <h4>
                    P&aacute;gina {currentPage} de {totalPages}
                </h4>
            </div>
            <button onClick={() => {onPageChange(currentPage<totalPages?currentPage+1:currentPage)}} disabled={currentPage==totalPages} className="w-8 h-8 rounded-full flex justify-center items-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                <FaAngleRight />
            </button>
        </div>
    );
}