import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center mt-4">
            <ul className="flex">
                {pages.map((page) => (
                    <li key={page}>
                        <button
                            className={`px-3 py-2 mx-1 text-blue-600 rounded-full hover:bg-blue-100 focus:outline-none ${currentPage === page ? 'bg-blue-100' : ''
                                }`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;